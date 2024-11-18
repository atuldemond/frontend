import React from "react";
import { useContext } from "react";
import { userContext } from "../Context/Context.jsx";
const Data = () => {
  const value = useContext(userContext);
  console.log(value);
  return <div>Data</div>;
};

export default Data;
