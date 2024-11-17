import React from "react";
import { useState, useRef } from "react";
const Card = () => {
  // const name = useRef(null);
  const [val, setVal] = useState({ name: "", age: "" });

  // preventDefault
  
  const handleSubmit = (details) => {
    details.preventDefault();
    console.log(val);
  };

  return (
    <>
      {/* <form action="" onSubmit={handleSubmit}>
        <input ref={name} type="text" placeholder="name" />
        <input type="submit" />
      </form> */}

      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setVal({ ...val, name: event.target.value })}
          placeholder="name"
        />
        <input
          type="text"
          onChange={(event) => setVal({ ...val, age: event.target.value })}
          placeholder="age"
        />
        <input type="submit" />
      </form>
    </>
  );
};

export default Card;
