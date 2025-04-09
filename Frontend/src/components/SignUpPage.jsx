import React, { useState } from "react"
import { useNavigate } from "react-router-dom" // For navigation to login page

export default function SignUpPage() {
  const navigate = useNavigate() // Hook to navigate to another page
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  })

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // You can implement form submission logic here, e.g., API call to register the user
    console.log("Form Submitted", formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex max-w-5xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Swap image */}
        {/* Left side: Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="Sign Up Visual"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right side: Form */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Create Account</h2>
            <p className="text-sm text-gray-500 mt-1">
              Already have an account?{" "}
              <a
                href="#"
                onClick={() => navigate("/login")} // Navigate to Login page on click
                className="text-blue-600 font-medium"
              >
                Login
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Sign Up
            </button>
          
          </form>
        </div>
      </div>
    </div>
  )
}
