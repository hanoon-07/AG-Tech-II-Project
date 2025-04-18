import React from "react";

function UploadBooks() {
    return <>
        <div class="flex justify-center">
            <h1 class="text-4xl font-medium flex items-center text-[#2563EB]">Upload Books</h1>
        </div>
        <form class="pt-4">
            <label class="pl-50 text-sm font-medium pt-6 px-4">Book Name * </label>
            <input type="text" class="w-200 border rounded px-2 py-1 text-left" defaultValue="Discrete Mathematics"/>
            <div class="flex justify-start pt-6 pb-5">
            <label class="text-sm font-medium pl-50 px-7">Author Name * </label> 
            <input type="text" class="w-40 border rounded-sm text-left px-2" defaultValue="BS-IT"/>
            <label class="text-sm font-medium pl-12 px-6">Book Course Related * </label>
            <input type="text" class="w-40 border rounded-sm text-left px-2" defaultValue="BS-IT,3rd Semester"/>
            </div>
            <div class="pb-8 pt-3">
                <label class="pl-50 text-sm font-medium pr-2 pt-6 ">File Upload </label>
                <button type="submit" className="bg-blue-600 text-white px-65 py-2 text-lg rounded mt-2">Book (PDF)</button>
            </div>
            <div class="pb-4 flex justify-center">
            <button className= "w-[120px] h-[40px] text-sm flex items-center justify-center rounded-full text-white bg-[#2563EB]">
                Upload Book
            </button>
            </div>
        </form>
        </>
}
export default UploadBooks;