import React from "react";
import Button from "./Button";

function PaperContentsItem({ alt, img, title, university }) {
  return (
    <div className="bg-white w-90 h-90 shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:translate-y-1">
    <div>
      <img src={img} alt={alt} className="w-full h-40 object-cover transition-all duration-300 ease-in-out transform hover:scale-110" />
    </div>
    <div className="text-sm text-black font-bold px-6 py-4">{title}</div>
    <div className="text-orange-500 text-lg">{university}</div>
    <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full mt-4 transition-all duration-200 ease-in-out transform hover:scale-105 hover:translate-y-1">
      DOWNLOAD
    </Button>
  </div>
  
  );
}

export default PaperContentsItem;
