import React from "react";

const RecentUploads = () => {
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
    {
      id: 4,
      title: "Discrete Mathematics and Its Applications",
      university: "Kenneth Rosen",
      image: "https://picsum.photos/300/200?random=4",
    },
    {
      id: 5,
      title: "Database Past Paper and Guess Material 3rd Semester",
      university: "PU & Other Universities",
      image: "https://picsum.photos/300/200?random=5",
    },
    {
      id: 6,
      title: "Programming Fundamentals - C++",
      university: "D.S Malik",
      image: "https://picsum.photos/300/200?random=6",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-2xl font-bold  mb-4">Recent Uploads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {uploads.map((upload) => (
          <div
            key={upload.id}
            className="bg-white p-4 shadow-md rounded-lg relative flex flex-col items-center text-center"
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
            <h3 className="text-lg font-semibold mt-2">{upload.title}</h3>
            <p className="text-sm text-gray-600">{upload.university}</p>
            {/* Small & Centered Button */}
            <button className="mt-3 bg-blue-600 text-white px-3 py-1 text-sm rounded-full shadow hover:bg-blue-700 transition">
              DOWNLOAD
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUploads;
