import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function UploadBooks() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [course, setCourse] = useState('');

    const handleFileSelect = (event) => {
        const file = event.target.files[0];
        if (file && file.type === "application/pdf") {
            setSelectedFile(file);
        } else {
            toast.error("Please select a valid PDF file!");
        }
    };

    const handleFileDelete = () => {
        setSelectedFile(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!bookName.trim() || !authorName.trim() || !course.trim()) {
            toast.error("Please fill all required fields (*)");
            return;
        }

        if (!selectedFile) {
            toast.error("Please upload a PDF file.");
            return;
        }

        // Success
        toast.success("Book uploaded successfully!");
        // Upload logic goes here
    };

    return (
        <>
            <div className="flex justify-center mb-8">
                <h1 className="text-4xl font-medium flex items-center text-[#2563EB]">Upload Books</h1>
            </div>
            <form className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" onSubmit={handleSubmit}>
                <div className="space-y-6">
                    {/* Book Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Book Name *</label>
                        <input
                            type="text"
                            // placeholder="Enter book name"
                            className="w-full border rounded px-3 py-2"
                            value={bookName}
                            onChange={(e) => setBookName(e.target.value)}
                        />
                    </div>

                    {/* Author Name */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Author Name *</label>
                        <input
                            type="text"
                            // placeholder="Enter author name"
                            className="w-full border rounded px-3 py-2"
                            value={authorName}
                            onChange={(e) => setAuthorName(e.target.value)}
                        />
                    </div>

                    {/* Course */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium mb-2">Book Related Course Name *</label>
                        <input
                            type="text"
                            // placeholder="Enter course name like 3rd Semester"
                            className="w-full border rounded px-3 py-2"
                            value={course}
                            onChange={(e) => setCourse(e.target.value)}
                        />
                    </div>

                    {/* File Upload */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Book Upload *</label>
                        <label className=" w-full cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            <span>Book Upload</span>
                            <input
                                type="file"
                                accept=".pdf"
                                className="hidden"
                                onChange={handleFileSelect}
                                multiple
                            />
                        </label>
                    </div>

                    {/* File Preview */}
                    {selectedFile && (
                        <div className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
                            <div className="flex items-center">
                                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                                    <path d="M3 8a2 2 0 012-2v10h2a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                </svg>
                                <span className="ml-2">{selectedFile.name}</span>
                            </div>
                            <button
                                type="button"
                                onClick={handleFileDelete}
                                className="cursor-pointer text-red-500 hover:text-red-700 transition-colors duration-200"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center mb-5">
                        <button type="submit" className="cursor-pointer px-6 py-2 rounded-full text-white bg-[#2563EB] hover:bg-blue-800">
                            Upload Book
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default UploadBooks;