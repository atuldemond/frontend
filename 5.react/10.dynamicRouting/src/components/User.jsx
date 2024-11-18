import React from "react";
import { useNavigate } from "react-router-dom";

const User = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/contact");
    navigate(-1);
  };
  return (
    <div>
      <div>
        <div>
          User Page
          <button onClick={handleClick}>go back</button>
        </div>
      </div>
    </div>
  );
};

export default User;
