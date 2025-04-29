import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import { ClimbingBoxLoader } from "react-spinners";

//temporary comment
export default function SignUpPage() {
  const navigate = useNavigate() // Hook to navigate to another page
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: ""
  })

  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);

  // Because images are loaded more quickly
  useEffect(() => {
    const img = new Image();
    img.src = './Images/Auth/login2.jpg'; // Adjust path if needed
    img.onload = () => setImageLoaded(true);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // for React Loader 
  useEffect(() => {
    // Show loader for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center bg-white">
        <ClimbingBoxLoader color="#2563EB" loading={true} size={15} />
      </div>
    );
  }
  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  //Issue 44 - Handle Phone no. input
  const handlePhone = (e) =>{
    const {name, value} = e.target
    setFormData({...formData, [name]: value})
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // You can implement form submission logic here, e.g., API call to register the user
    console.log("Form Submitted", formData)
  }

  return (
    <>
      <div
        className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4"
        style={{
          backgroundImage: imageLoaded
            ? "url(./Images/Auth/login3.jpg)"
            : "none",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          transition: "background-image 0.5s ease-in-out",
        }}
      >
        <div className="max-w-md w-full mx-auto">
          <form onSubmit={handleSubmit}
            className="bg-white/70 backdrop-blur-md rounded-2xl p-6 
        shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
          >
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
              <p className="text-sm text-gray-500 mt-1">
                Already have an account?{" "}
                <a
                  href=""
                  onClick={() => navigate("/login")} // Navigate to Login page on click
                  className="text-blue-600 font-medium"
                >
                  Login
                </a>
              </p>
            </div>

            {/* Username Field */}
            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder="Enter Username"
                  value={formData.username}
                  onChange={handleChange}
                  id="username"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#333"
                  stroke="#333"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zm0 2c-3.314 0-9 1.657-9 5v1h18v-1c0-3.343-5.686-5-9-5z" />
                </svg>
              </div>
            </div>

            {/* Email Field */}
            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  type="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleChange}
                  id="email"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#333"
                  stroke="#333"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
            </div>

            {/* Phone Number Field */}
            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  type="tel"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="\d{10}"
                  id="phone"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#333"
                  stroke="#333"
                  className="w-[18px] h-[18px] absolute right-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.5 22 2 13.5 2 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                </svg>
              </div>
            </div>

            {/* Password Field */}
            <div className="mt-6">
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  id="password"
                  required
                  className="bg-transparent w-full text-sm text-gray-800 border-b border-gray-400 focus:border-gray-800 px-2 py-3 outline-none placeholder:text-gray-800"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#333"
                  stroke="#333"
                  className="w-[18px] h-[18px] absolute right-2 cursor-pointer"
                  viewBox="0 0 128 128"
                  onClick={togglePasswordVisibility}
                >
                  <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                </svg>
              </div>
            </div>


            <div className=" mt-3 flex justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            {/* Login Button */}
            <div className="mt-10 mb-4">
              <Link to="/home">
                <button
                  type="button"
                  // disabled={loading}
                  // onClick={handleClick}
                  className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider cursor-pointer
                        rounded-full text-white bg-[#0071c2] hover:bg-[#3a90f3] focus:outline-none"
                >
                  Signup
                </button>
              </Link>
            </div>
            
          </form>
        </div>
      </div>
    </>
  )
}
