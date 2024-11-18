import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Data from "../components/Data";
const Nav = () => {
  return (
    <>
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
    </>
  );
};

export default Nav;
