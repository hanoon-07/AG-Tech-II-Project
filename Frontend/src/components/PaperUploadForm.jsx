import React from "react";
import {useState} from "react"; 
import Paper from './PastPaper';
import UploadBooks from './UploadBooks';


function PaperUploadForm() {
 const [currentPage, setCurrentPage] =useState("Home");
 
  function goToPastPaper() {
    setCurrentPage("Paper");
  }
  
  function goToBooks() {
    setCurrentPage("UploadBooks");
  } 
  
  
  return <div> 
  <div class="pt-12 pl-6 pb-6 flex justify-start">
    <button className= "w-[120px] h-[40px] text-sm flex items-center justify-center rounded-full text-white bg-[#2563EB]">
      Back to home</button>
  </div>
      <div class="flex justify-center">
    <h1 class="text-4xl font-medium flex items-center"> Upload the Material</h1>
    </div>
    <div class="flex justify-evenly pt-8 flex items-center">
      <h2 class="before:content-['•'] before:mr-2 before:text-black-500 
      before:text-4xl  flex items-center text-2xl cursor-pointer" onClick={goToPastPaper}>Past Paper</h2>
      <h2 class="before:content-['•'] before:mr-2 before:text-black-500 
      before:text-4xl  flex items-center text-2xl cursor-pointer" onClick={goToBooks}>Books</h2>
      <h2 class="before:content-['•'] before:mr-2 before:text-black-500 
      before:text-4xl  flex items-center text-2xl cursor-pointer">Tech Guidance</h2>
    </div>
  
    <hr class="border-t-2 w-7/10 mx-auto border-gray-300 pl-20 pr-20 my-9">
    </hr>
    
    <div>
        {currentPage === "Paper" && <Paper />}
        {currentPage === "UploadBooks" && <UploadBooks />}
      </div>
  </div>;

}



export default PaperUploadForm;