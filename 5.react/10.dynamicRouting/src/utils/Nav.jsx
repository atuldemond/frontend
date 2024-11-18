import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
const Nav = () => {
  return (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/user">User</NavLink>
      <NavLink to="/about">About</NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default Nav;
