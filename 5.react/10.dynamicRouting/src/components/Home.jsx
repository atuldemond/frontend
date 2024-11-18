import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/contact");
    navigate(-1);
  };
  return (
    <div>
      <div>
        Home
        <button onClick={handleClick}>go back</button>
      </div>
    </div>
  );
};

export default Home;
