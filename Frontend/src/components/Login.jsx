import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClimbingBoxLoader } from "react-spinners";

export default function AuthPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [imageLoaded, setImageLoaded] = useState(false);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Image loading effect
  useEffect(() => {
    const img = new Image();
    img.src = "./Images/Auth/login2.jpg"; // Adjust path if needed
    img.onload = () => setImageLoaded(true);
  }, []);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Show loader for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Handle login submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate email
    if (!email) {
      setEmailError("Email is required");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError('');

    // Validate password
    if (!password) {
      setPasswordError("Password is required");
      return;
    }
    setPasswordError('');

    // Navigate to the next page after successful validation
    navigate("/");
  };

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError('');
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <ClimbingBoxLoader color="#2563EB" loading={true} size={15} />
      </div>
    );
  }

  return (
    <div
      className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4"
      style={{
        backgroundImage: imageLoaded
          ? "url(./Images/Auth/login2.jpg)"
          : "none",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleLogin} noValidate
          className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)]"
        >
          <div className="mb-4">
            <h3 className="text-3xl font-extrabold text-gray-800">Login</h3>
            <p className="mt-3 text-sm text-gray-800">
              You have no Account?{" "}
              <a
                href=""
                onClick={() => navigate("/signup")}
                className="font-medium text-blue-600"
              >
                Create an account
              </a>
            </p>
          </div>

          {/* Email Field */}
          <div>
            <div className="relative flex items-center">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                required
                className="w-full px-2 py-3 text-sm text-gray-800 bg-transparent border-b border-gray-400 outline-none focus:border-gray-800 placeholder:text-gray-800"
                onChange={handleEmailChange}
              />
              <svg xmlns="http://www.w3.org/2000/svg"
                className="w-[18px] h-[18px] absolute right-2"
                fill="#333"
                viewBox="0 0 24 24"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            {emailError && (
              <p className="mt-1 text-sm text-red-500">{emailError}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mt-6">
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                id="password"
                value={password}
                required
                onChange={handlePasswordChange}
                className="w-full px-2 py-3 text-sm text-gray-800 bg-transparent border-b border-gray-400 outline-none focus:border-gray-800 placeholder:text-gray-800"
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
            {passwordError && (
              <p className="mt-1 text-sm text-red-500">{passwordError}</p>
            )}
          </div>

          {/* Login Button */}
          <div className="mt-10 mb-4">
            <button
              type="submit"
              className="w-full py-2.5 px-4 text-sm font-semibold tracking-wider cursor-pointer rounded-full text-white bg-[#0071c2] hover:bg-[#3a90f3] focus:outline-none"
            >
              Login
            </button>
          </div>

          <div className="flex justify-center text-gray-500 text-sm hover:text-[#0071c2]">
            <a href="https://aligates-portfolio.netlify.app/" target="blank">
              Designed by AG-Tech-II
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
