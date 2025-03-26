import React from "react";

const Features = () => {
  const uploads = [
    {
      id: 1,
      year: "2018",
      title: "IT-201 Object Oriented Programming Past Paper 2018",
      university: "Punjab University",
      image: "https://picsum.photos/300/200?random=1",
    },
    {
      id: 2,
      year: "2019",
      title: "IT-201 Object Oriented Programming Past Paper 2019",
      university: "University of Management & Technology",
      image: "https://picsum.photos/300/200?random=2",
    },
    {
      id: 3,
      year: "2021",
      title: "IT-201 Object Oriented Programming Past Paper 2021",
      university: "Punjab University",
      image: "https://picsum.photos/300/200?random=3",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold  mb-6 text-gray-800">
        Features
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {uploads.map((upload) => (
          <div
            key={upload.id}
            className="bg-white p-5 shadow-lg rounded-lg relative flex flex-col items-center text-center transition transform hover:scale-105 duration-300"
          >
            <img
              src={upload.image}
              alt={upload.title}
              className="w-full h-48 object-cover rounded-lg"
            />
            {upload.year && (
              <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md absolute top-2 right-2">
                {upload.year}
              </span>
            )}
            <h3 className="text-lg font-semibold mt-3 text-gray-900">
              {upload.title}
            </h3>
            <p className="text-sm text-gray-600">{upload.university}</p>
            {/* Small & Centered Button */}
            <button className="mt-4 bg-blue-600 text-white px-4 py-1 text-sm rounded-full shadow-md hover:bg-blue-700 transition">
              DOWNLOAD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
