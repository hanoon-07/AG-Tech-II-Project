import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";

function UploadBooks() {
    const [selectedFile, setSelectedFile] = useState([]);
    const [bookName, setBookName] = useState('');
    const [authorName, setAuthorName] = useState('');
    const [courseBook, setCourse] = useState('');
    const [isUploading, setIsUploading] = useState(false);



    const handleFileSelect = (event) => {
        const file = event.target.files[0]; // Get only the first file

        // Check if file exists and is valid
        if (file && (file.type === "application/pdf")) {
            setSelectedFile([file]); // Set only this file (overwrite any previous one)
        } else {
            toast.warn("Only one PDF file is allowed.");
        }
    };


    const handleFileDelete = (fileToDelete) => {
        setSelectedFile(prevFiles =>
            prevFiles.filter(file => file !== fileToDelete)
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!bookName.trim() || !authorName.trim()) {
            toast.error("Please fill all required fields (*)");
            return;
        }

        if (!selectedFile || selectedFile.length === 0) {
            toast.error("Please upload book.");
            return;
        }


        setIsUploading(true);

        try {
            const uploadedFileUrls = [];

            for (const file of selectedFile) {
                const data = new FormData();
                data.append("file", file);
                data.append("upload_preset", "upload");

                const uploadUrl = "https://api.cloudinary.com/v1_1/daexycwc7/raw/upload";

                const uploadRes = await axios.post(uploadUrl, data);
                const fileUrl = uploadRes.data.secure_url;
                uploadedFileUrls.push(fileUrl);
            }

            console.log("All file URLs:", uploadedFileUrls);

            // Send all file URLs together to backend
            const payload = {
                bookName,
                authorName,
                courseBook,
                fileUrls: uploadedFileUrls, // Use plural name
            };

            console.log("Data Sent to the backend :", payload);

            await axios.post("/api/books", payload);

            toast.success("Papers uploaded successfully!");
            setAuthorName("");
            setBookName("");
            setCourse("");
            setSelectedFile([]);
        } catch (err) {
            console.error("Upload error:", err);
            toast.error("Error uploading papers");
        } finally {
            setIsUploading(false);
        }
    };

    return (
        <>
            <ToastContainer position="top-right" />
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
                            className="w-full border rounded px-3 py-2"
                            value={courseBook}
                            onChange={(e) => setCourse(e.target.value)}
                        />
                    </div>

                    {/* File Upload */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium mb-2">Book Upload *</label>
                        <label className="w-full cursor-pointer inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            <span>Book Upload</span>
                            <input
                                type="file"
                                accept=".pdf,image/*"
                                className="hidden"
                                onChange={handleFileSelect}
                            />
                        </label>
                    </div>

                    {/* File Preview */}
                    {selectedFile.length > 0 && (
                        <div className="space-y-3 mb-6">
                            {selectedFile.map((file, index) => (
                                <div
                                    key={`${file.name}-${index}`}
                                    className="flex items-center justify-between bg-gray-50 p-4 rounded-lg"
                                >
                                    <div className="flex items-center">
                                        <svg className="cursor-pointer w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z" />
                                            <path d="M3 8a2 2 0 012-2v10h2a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                        </svg>
                                        <span className="ml-2">{file.name}</span>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => handleFileDelete(file)}
                                        className="text-red-500 hover:text-red-700"
                                    >
                                        <svg className="cursor-pointer w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center mb-5">
                        <button type="submit" className="cursor-pointer px-6 py-2 rounded-full text-white bg-[#2563EB] hover:bg-blue-800">
                            {isUploading ? "Uploading..." : "Upload Book"}
                        </button>
                    </div>
                </div>
            </form>
        </>

    );
}

export default UploadBooks;