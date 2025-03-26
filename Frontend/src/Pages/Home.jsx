import React from "react";
import RecentUploads from "../components/RecentUploads";
import Features from "../components/Features";


const Home = () => {
  return (
    <>
    <div className="overflow-x-hidden overflow-y-hidden">
      <div
        className="h-screen flex flex-col items-center justify-center bg-cover bg-center relative pt-20 px-4"
        style={{ backgroundImage: "url('/Images/hero-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-900/85"></div>

        {/* Main Content */}
        <div className="relative z-10 text-center text-white w-full max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Get Free University Past Papers & Study Material
          </h1>

          {/* Search Bar */}
          <div className="flex justify-center items-center mt-6">
            <input
              type="text"
              placeholder="Search Past Papers & Study Material..."
              className="w-full max-w-lg p-3 rounded-l-lg bg-white text-black placeholder-black"
            />
            <button className="bg-blue-600 px-5 py-3 rounded-r-lg text-white hover:bg-blue-700">
              🔍
            </button>
          </div>

          {/* Upload Button */}
          <p className="mt-4 text-lg">If you want to upload study material</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 mt-4 rounded-lg text-lg">
            Wish to Upload
          </button>
        </div>
      </div>
    </div>
    <RecentUploads/>
    <Features/>
    </>
    
  );
};

export default Home;
