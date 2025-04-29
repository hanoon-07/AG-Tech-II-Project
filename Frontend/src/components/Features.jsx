import React from "react";
import Button from "../components/Button";
import UploadCards from "./UploadCards";

const Features = () => {
  const uploads = [
    {
      id: 1,
      title: "Universities & Affiliated Collage Past Papers",
      image: "./Images/paper.png",
    },
    {
      id: 2,
      title: "Universities & Affiliated Collage Recommended Books",
      image: "./Images/books.png",
    },
    {
      id: 3,
      title: "Tech Guidance in Web, AI, ML, and Web-3 Hunt Job in IT",
      image: "./Images/it.png",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold  mb-4">Recent Uploads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
         {uploads.map((upload) => (
            <UploadCards key={upload.id} upload={upload} />
          ))}
      </div>

    </div>
  );
};

export default Features;
