const jwt = require('jsonwebtoken');
const User = require('../models/User.js')
const dotenv=require("dotenv")
const bcrypt = require('bcryptjs');

dotenv.config()
console.log(process.env.JWT_SECRET)


//! SIGNUP
exports.signup = async (req, res) => {
    try {
        const { 
            username,
            email, 
            password, 
            mobileNumber,
            
        } = req.body;
        console.log("Signup Request:",req.body);

        // Check if both email, password and confirmPassword fields are provided
        if (!email || !password || !username) {
            return res.status(400).json({
                status: 'fail',
                message: ''
            });
        }
        
        console.log("Username, Email, and  password, are required?");

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({
                status: 'fail',
                message: 'User already exists with this email',
            });
        }

        // Create the new user with email and password
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = await User.create({
            email,
            password: hashedPassword,
            username,
            mobileNumber,
            role: "user",
        });
        console.log("New User Created with Hashed Password");

        // Generate JWT Token
        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN || '1d',
        });
        console.log("JWT Token Generated");

        // Return response with the token and user data
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser,
                token,
            }
        });
        console.log("Response Sent");
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err.message,
        });
        console.log("Error Occurred");
    }
};


//! Login Controller
exports.login = async (req, res) => {
    try {
        console.log('Login Request');
        const { email, password } = req.body;

        console.log('Email from request:', req.body);


        // Check if both fields are provided
        if (!email || !password) {
            return res.status(400).json({
                status: 'fail',
                message: 'Email and password are required'
            });
        }

        // Find the user by email and select password
        const user = await User.findOne({ email }).select('+password');
        console.log('Queried user:', user);
        if (!user) {
            return res.status(401).json({
                status: 'fail',
                message: 'Incorrect Email'
            });
        }

  // Compare entered password with hashed password
  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
      return res.status(401).json({
          status: 'fail',
          message: 'Incorrect Password',
      });
  }

    // 3. Generate JWT Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN || '1d',
    });

    // 4. Send response
    res.status(200).json({
      status: 'success',
      token,
      data: {
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err.message,
    });
  }
};
