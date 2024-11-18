import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
const Nav = () => {
  return (
    <>
      {/* //We can use NavLink for better Styling */}
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Nav;
