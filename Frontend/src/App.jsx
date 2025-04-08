import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import PastPapers from "./pages/PastPapers";
import CourseBook from "./pages/CourseBook";
import TechGuidance from "./pages/TechGuidance";
import ContactUs from "./pages/ContactUs";
import Home from "./Pages/Home";

import Login from "./components/Login"
import SignUpPage from "./components/SignUpPage";
import Footer from "./components/Footer";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/past-papers" element={<PastPapers />} />
        <Route path="/course-book" element={<CourseBook />} />
        <Route path="/tech-guidance" element={<TechGuidance />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
