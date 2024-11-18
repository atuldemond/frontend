import React from "react";
import axios from "axios";
import { useEffect } from "react";

const Data = () => {
  const api = "https://fakestoreapi.com/products";
  const handle = () => {
    axios
      .get(api)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

//   useeffect is use to controle rendering and updation
  useEffect(() => {
    handle();
  }, []);

  return (
    <div>
      <h1>Data Page</h1>
      <button>Get Data</button>
    </div>
  );
};

export default Data;
