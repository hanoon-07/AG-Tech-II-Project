import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-10">
      {/* Top Section: Logo & Social Icons */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <h2 className="text-2xl font-bold">AG Tech-II</h2>
        <div className="flex items-center space-x-4">
          <span className="text-lg font-semibold">Follow Us</span>
          <FaFacebookF className="cursor-pointer hover:text-gray-200" />
          <FaTwitter className="cursor-pointer hover:text-gray-200" />
          <FaInstagram className="cursor-pointer hover:text-gray-200" />
          <FaLinkedinIn className="cursor-pointer hover:text-gray-200" />
        </div>
      </div>

      {/* Divider */}
      <hr className="border-white opacity-30 my-6" />

      {/* Middle Section: About, Links & Contact */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* About Section */}
        <div>
          <p className="text-sm">
            Check out our IT Tech Guidance Blog for tutorials on web development, cloud computing, and emerging technologies.
          </p>
          <p className="mt-2 text-sm">A free resource hub for university materials.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Past Papers</a></li>
            <li><a href="#" className="hover:underline">Books</a></li>
            <li><a href="#" className="hover:underline">Tech Sector</a></li>
            <li><a href="#" className="hover:underline">IT Hub</a></li>
          </ul>
        </div>

        {/* Contact & Address */}
        <div>
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="mt-3 text-sm">hacktech877@gmail.com</p>
          <p className="text-sm">+9234 698 7780</p>
          <h3 className="font-semibold text-lg mt-4">Our Address</h3>
          <p className="text-sm">99 Fifth Avenue, 3rd Floor</p>
          <p className="text-sm">San Francisco, CA 1980</p>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="border-t border-white opacity-30 mt-6 pt-4 text-center text-sm">
        Copyright © 2024. JustHome
      </div>
    </footer>
  );
};

export default Footer;
