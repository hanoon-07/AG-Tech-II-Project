import React from "react";
import { useState } from "react";
import Paper from './PastPaper';
import UploadBooks from './UploadBooks';

function PaperUploadForm() {
  const [currentPage, setCurrentPage] = useState("Paper");

  function goToPastPaper() {
    setCurrentPage("Paper");
  }

  function goToBooks() {
    setCurrentPage("UploadBooks");
  }

  function Navbar() {
    return (
      <div className="bg-[#2563EB]">
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }



  return <div>
    <Navbar />
    <div className="pt-12 pl-6 pb-6 flex justify-start">

    </div>
    {/* Main Title */}
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-medium flex items-center text-center">
        Upload the Material
      </h1>
    </div>

    {/* Navigation Options */}
    <div className="flex sm:flex-row justify-center sm:justify-evenly gap-6 sm:gap-6 
                    pt-4 sm:pt-6 lg:pt-8 px-4 sm:px-4 lg:px-8">
      <h2
        className="flex items-center text-lg sm:text-md lg:text-2xl cursor-pointer 
                   hover:text-blue-600 transition-colors duration-300
                   before:content-['•'] before:mr-2 before:text-2xl sm:before:text-3xl lg:before:text-4xl"
        onClick={goToPastPaper}
      >
        Past Paper
      </h2>

      <h2
        className="flex items-center text-lg sm:text-md lg:text-2xl cursor-pointer 
                   hover:text-blue-600 transition-colors duration-300
                   before:content-['•'] before:mr-2 before:text-2xl sm:before:text-3xl lg:before:text-4xl"
        onClick={goToBooks}
      >
        Books
      </h2>

      <h2
        className="flex items-center text-lg sm:text-md lg:text-2xl cursor-pointer 
                   hover:text-blue-600 transition-colors duration-300
                   before:content-['•'] before:mr-2 before:text-2xl sm:before:text-3xl lg:before:text-4xl"
      >
        Tech Guidance
      </h2>
    </div>

    <hr className="border-t-2 w-7/10 mx-auto border-gray-300 pl-20 pr-20 my-9">
    </hr>

    <div>
      {currentPage === "Paper" && <Paper />}
      {currentPage === "UploadBooks" && <UploadBooks />}
    </div>
  </div>;

}



export default PaperUploadForm;