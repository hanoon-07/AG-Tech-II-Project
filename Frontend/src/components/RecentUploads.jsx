import React from "react";
import Button from "./Button";
import './styles.css'
import UploadCards from "./UploadCards";

const RecentUploads = () => {
  const uploads = [
    {
      id: 1,
      year: "2018",
      title: "IT-201 Object Oriented Programming Past Paper 2018",
      university: "Punjab University",
      image: "./Images/2018.PNG",
    },
    {
      id: 2,
      year: "2019",
      title: "IT-201 Object Oriented Programming Past Paper 2019",
      university: "University of Management & Technology",
      image: "./Images/2020.PNG",
    },
    {
      id: 3,
      year: "2021",
      title: "IT-201 Object Oriented Programming Past Paper 2021",
      university: "Punjab University",
      image: "./Images/bs 2021.PNG",
    },
    {
      id: 4,
      title: "Discrete Mathematics and Its Applications",
      university: "Kenneth Rosen",
      image: "./Images/Discrete Mathematics.jpg",
    },
    {
      id: 5,
      title: "Database Past Paper and Guess Material 3rd Semester",
      university: "PU & Other Universities",
      image: "./Images/Guess Paper.png",
    },
    {
      id: 6,
      title: "Programming Fundamentals - C++",
      university: "D.S Malik",
      image: "./Images/DS Malik C++.jpg",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Uploads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {uploads.map((upload) => (
    <UploadCards key={upload.id} upload={upload} />
  ))}
      </div>

    </div>
  );
};

export default RecentUploads;
