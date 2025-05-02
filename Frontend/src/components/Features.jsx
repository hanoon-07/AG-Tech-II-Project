import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Button from "../components/Button";

const Features = () => {
  const navigate = useNavigate();

  const uploads = [
    {
      id: 1,
      title: "Universities & Affiliated Collage Past Papers",
      image: "./Images/paper.png",
      route: "/past-papers",
    },
    {
      id: 2,
      title: "Universities & Affiliated Collage Recommended Books",
      image: "./Images/books.png",
      route: "/course-book",
    },
    {
      id: 3,
      title: "Tech Guidance in Web, AI, ML, and Web-3 Hunt Job in IT",
      image: "./Images/it.png",
      route: "/tech-guidance",
    },
  ];

  const handleNavigate = (route) => {
    navigate(route);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Features Categories</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {uploads.map((upload) => (
          <div
            key={upload.id}
            onClick={() => handleNavigate(upload.route)}
            className="w-full max-w-sm h-[380px] bg-gray-100 p-4 shadow-lg shadow-gray-400 rounded-xl flex flex-col justify-between text-center transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            {/* Image */}
            <img
              src={upload.image}
              alt={upload.title}
              className="w-full h-48 object-cover rounded-lg"
            />

            {/* Text Content */}
            <div className="mt-3 flex flex-col items-center flex-grow gap-2 lg:gap-1">
              <h3 className="text-base sm:text-lg font-semibold line-clamp-2">{upload.title}</h3>
            </div>

            {/* Button */}
            <Button
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click propagation
                handleNavigate(upload.route);
              }}
              className="cursor-pointer btn mx-auto mt-4 mb-2 bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm rounded-full shadow-md hover:bg-amber-500 hover:font-bold transition-all duration-200 ease-in-out transform hover:scale-105 hover:translate-y-1"
            >
              EXPLORE ME
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
