import React from "react";
import { useState } from "react";
import { createContext } from "react";
export const userContext = createContext();

const Context = (props) => {
  const [count, setCount] = useState(0);
  console.log(props);
  return (
    <userContext.Provider value={count}>{props.children}</userContext.Provider>
  );
};

export default Context;
