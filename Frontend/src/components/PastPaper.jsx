import React from "react";

function Paper() {
    return <>
        <div class="flex justify-center">
            <h1 class="text-4xl font-medium flex items-center text-[#2563EB]">Upload Past Paper</h1>
        </div>
        <form class="pt-4">
            <label class="pl-50 text-sm font-medium pt-4 px-4">Subject Name * </label>
            <input type="text" class="w-200 border rounded px-2 py-1 text-left" defaultValue="Discrete Mathematics"/>
            <div class="flex justify-start pt-4 pb-5">
            <label class="text-sm font-medium pl-50 px-7">Course Code * </label> 
            <input type="text" class="w-40 border rounded-sm text-left px-2" defaultValue="BS-IT"/>
            <label class="text-sm font-medium pl-12 px-6">Year * </label>
            <input type="text" class="w-40 border rounded-sm text-left px-2" defaultValue="2023"/>
            </div>
            <label class="pl-50 text-sm font-medium pr-2 pt-4">University Name  </label>
            <input type="text" class="w-200 border rounded px-2 py-1 text-left px-2" defaultValue="University Name"/>
            <div class="pb-8 pt-3">
                <label class="pl-50 text-sm font-medium pr-2 pt-6 ">File Upload </label>
                <button type="submit" className="bg-blue-600 text-white px-65 py-2 text-lg rounded mt-2">Past Paper Upload (PNG,JPG,PDF)</button>
            </div>
            <div class="pb-4 flex justify-center">
            <button className= "w-[120px] h-[40px] text-sm flex items-center justify-center rounded-full text-white bg-[#2563EB]">
                Upload Book
            </button>
            </div>
        </form>
    </>
}
export default Paper;