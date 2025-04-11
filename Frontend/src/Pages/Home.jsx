import React from "react";
import RecentUploads from "../components/RecentUploads";
import Features from "../components/Features";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="">
        <div
          className="h-screen flex flex-col items-center justify-center bg-cover bg-center relative pt-20 px-4"
          style={{ backgroundImage: "url('/Images/hero.jpg')" }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-100/10"></div>

          {/* Main Content */}
          <div className="relative z-10 text-center text-white w-full max-w-4xl">
            <h1
              className="text-3xl md:text-5xl lg:text-6xl font-medium mb-6 
          leading-tight [text-shadow:_0_4px_4px_rgb(0_0_0_/2)]"
            >
              Get Free University Past Papers & Tech Guidance
            </h1>

            {/* Search Bar */}
            <div className="flex justify-center items-center mt-6">
              <div className="relative w-full max-w-lg">
                <input
                  type="text"
                  placeholder="Search Past Papers & Tech Guidance..."
                  className="w-full p-4 pr-12 rounded-full bg-white text-black placeholder-gray-500
              focus:outline-none focus:ring-0"
                />
                {/* Search Button with Image */}
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                  <img
                    src="/Images/search.png"
                    alt="Search"
                    className="w-4 h-4 cursor-pointer"
                  />
                </button>
              </div>
            </div>

            {/* Upload Button */}
            <p className="mt-4 text-xl [text-shadow:_0_6px_6px_rgb(0_0_0_/1)]">
              If you want to upload study material
            </p>
            <Link
              to="/upload-paper"
              className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 mt-4 rounded-lg text-lg inline-block"
            >
              Wish to Upload
            </Link>
          </div>
        </div>
      </div>
      <RecentUploads />
      <Features />
    </>
  );
};

export default Home;
