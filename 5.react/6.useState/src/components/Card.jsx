import React from "react";
import { useState } from "react";
const Card = () => {
  const [count, setCount] = useState({
    value: 0,
    boolean: true,
    name: "Atul Demond",
  });

  const change = () => {
    setCount(() => {
      return {
        ...count,
        value: count.value + 1,
        boolean: !count.boolean,
        name: "Sumit Raj",
      };
    });
  };

  return (
    <>
      <h1 className="text-4xl">{count.value}</h1>
      <h1 className="text-4xl">{count.boolean.toString()}</h1>
      <h1 className="text-4xl">{count.name}</h1>

      <button
        onClick={change}
        className={` px-4 py-2 ${
          count.boolean ? "bg-green-500" : "bg-red-400"
        }`}
      >
        +1
      </button>
      {/* <button
        onClick={() => setCount((prev) => prev + 5)}
        className="bg-red-300 px-4 py-2 "
      >
        +5
      </button> */}
    </>
  );
};

export default Card;
