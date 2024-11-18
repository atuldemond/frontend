import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Data from "../components/Data";
import Home from "../components/Home";
import About from "../components/About";
const Nav = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/data">Data</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/data" element={<Data />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Nav;
