import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="w-full fixed top-0 z-50 transition-all duration-300">
      <div
        className={`px-4 md:px-8 lg:px-16 py-4 ${
          scrolling ? "bg-blue-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <h1 className="text-white text-xl font-bold">AG Tech-II</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-6 text-lg text-white">
              <li><Link to="/" className="hover:text-blue-300 transition-colors duration-300 relative group">Home</Link></li>
              <li><Link to="/past-papers" className="hover:text-blue-300 transition-colors duration-300 relative group">Past Papers</Link></li>
              <li><Link to="/course-book" className="hover:text-blue-300 transition-colors duration-300 relative group">Course Book</Link></li>
              <li><Link to="/tech-guidance" className="hover:text-blue-300 transition-colors duration-300 relative group">Tech Guidance</Link></li>
              <li><Link to="/contact-us" className="hover:text-blue-300 transition-colors duration-300 relative group">Contact Us</Link></li>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <FiAlignJustify
            onClick={handleToggle}
            className="md:hidden text-3xl cursor-pointer text-white"
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out overflow-hidden">
          <ImCross
            onClick={handleToggle}
            className="absolute top-5 right-5 text-3xl cursor-pointer hover:rotate-90 transition-transform duration-300"
          />
          <ul className="flex flex-col items-center gap-6 text-lg text-black">
            <li><Link to="/" onClick={handleToggle} className="text-black hover:text-blue-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300">Home</Link></li>
            <li><Link to="/past-papers" onClick={handleToggle} className="text-black hover:text-blue-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300">Past Papers</Link></li>
            <li><Link to="/course-book" onClick={handleToggle} className="text-black hover:text-blue-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300">Course Book</Link></li>
            <li><Link to="/tech-guidance" onClick={handleToggle} className="text-black hover:text-blue-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300">Tech Guidance</Link></li>
            <li><Link to="/contact-us" onClick={handleToggle} className="text-black hover:text-blue-900 py-2 px-4 rounded-lg hover:bg-gray-100 transition-all duration-300">Contact Us</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
