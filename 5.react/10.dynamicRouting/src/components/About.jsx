import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/contact");
    navigate(-1);
  };
  return (
    <div>
      About
      <button onClick={handleClick}>go back</button>
    </div>
  );
};

export default About;
