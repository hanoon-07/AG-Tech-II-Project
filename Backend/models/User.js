const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');


// Define User Schema and embed userDetailsSchema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: true,
        minlength: 3,

    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^\S+@\S+\.\S+$/.test(v);  // Basic email validation
            },
            message: props => `${props.value} is not a valid email!`
        }
    },
    mobileNumber: {
        type: String,
        validate: {
            validator: function(v) {
                return /\d{10}/.test(v);  // Basic validation for mobile number
            },
            message: props => `${props.value} is not a valid mobile number!`
        }
    },
    
    password: {
        type: String,
        required: [true, 'Password is required'],
        minlength: 4,
        select: false,  // Ensure password is not selected in queries
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
}, {
    timestamps: true,  // Automatically adds createdAt and updatedAt fields
});

// Pre-save hook to hash the password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();  // Only hash if password is modified
    this.password = await bcrypt.hash(this.password, 12);  // Hash password with cost factor of 12
    next();
});

// Method to compare password during login
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

// Create the User model
const User = mongoose.model('User', userSchema);

module.exports = User;
