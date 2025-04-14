import React from "react";
import Button from "./Button";

function PaperContentsItem({ alt, img, title, university }) {
  return (
    <div className="bg-white w-90  h-90  shadow-md rounded-lg  text-center">
      <div>
        <img src={img} alt={alt} className="w-90 h-61  " />
      </div>
      <div className="text-sm text-black font-bold px-4">{title}</div>
      <div className="text-orange-500">{university}</div>
      <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full">
        DOWNLOAD
      </Button>
    </div>
  );
}

export default PaperContentsItem;
