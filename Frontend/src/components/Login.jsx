import React from 'react';

export default function AuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex max-w-5xl w-full bg-white rounded-lg shadow-md overflow-hidden">
        {/* Left side: Form */}
        <div className="w-full md:w-1/2 p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Sign in to your account</h2>
            <p className="text-sm text-gray-500 mt-1">
              Not a member? <a href="#" className="text-blue-600 font-medium">Start a 15 day free trial</a>
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                className="mt-1 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Sign in
            </button>
            <div className="flex items-center justify-center text-sm text-gray-500">or continue with</div>
            <div className="flex space-x-4">
              <button className="flex-1 border border-gray-300 py-2 rounded-md text-sm hover:bg-gray-100">Google</button>
              <button className="flex-1 border border-gray-300 py-2 rounded-md text-sm hover:bg-gray-100">GitHub</button>
            </div>
          </form>
        </div>

        {/* Right side: Image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
            alt="Login Visual"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}