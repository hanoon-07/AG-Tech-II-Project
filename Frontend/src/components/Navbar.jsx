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
          scrolling
            ? "bg-[#2563EB] backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
          <Link to="/" >
            <h1 className="text-white text-xl font-bold">AG Tech-II</h1>
          </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex text-lg text-white">
              <li>
                <Link
                  to="/"
                  className=" nav-link transition-colors duration-300 relative px-4 py-2 rounded-md"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/past-papers"
                  className="nav-link transition-colors duration-300 relative px-4 py-2 rounded-md"
                >
                  Past Papers
                </Link>
              </li>
              <li>
                <Link
                  to="/course-book"
                  className="nav-link transition-colors duration-300 relative  px-4 py-2 rounded-md"
                >
                  Course Book
                </Link>
              </li>
              <li>
                <Link
                  to="/tech-guidance"
                  className="nav-link transition-colors duration-300 relative  px-4 py-2 rounded-md"
                >
                  Tech Guidance
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className="nav-link  transition-colors duration-300 relative px-4 py-2 rounded-md"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Icon */}
          <FiAlignJustify
            onClick={handleToggle}
            className="md:hidden text-3xl cursor-pointer text-white  "
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="bg-blue-600 fixed inset-0  z-50 flex flex-col items-center justify-center transition-all duration-500 ease-in-out overflow-hidden">
          <ImCross
            onClick={handleToggle}
            className="absolute top-5 right-5 text-3xl cursor-pointer hover:rotate-90 transition-transform duration-300 text-white"
          />
          <ul className="flex flex-col items-center gap-6 text-lg text-black">
            <li>
              <Link
                to="/"
                onClick={handleToggle}
                className="nav-link text-white  py-2 px-4 rounded-lg  transition-all duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/past-papers"
                onClick={handleToggle}
                className="nav-link text-white   py-2 px-4 rounded-lg  transition-all duration-300"
              >
                Past Papers
              </Link>
            </li>
            <li>
              <Link
                to="/course-book"
                onClick={handleToggle}
                className="nav-link text-white  py-2 px-4 rounded-lg  transition-all duration-300"
              >
                Course Book
              </Link>
            </li>
            <li>
              <Link
                to="/tech-guidance"
                onClick={handleToggle}
                className="text-white nav-link   py-2 px-4 rounded-lg  transition-all duration-300"
              >
                Tech Guidance
              </Link>
            </li>
            <li>
              <Link
                to="/contact-us"
                onClick={handleToggle}
                className="text-white nav-link   py-2 px-4 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
