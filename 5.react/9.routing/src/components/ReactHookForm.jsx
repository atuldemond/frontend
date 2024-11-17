import React from "react";
import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const { register, handleSubmit } = useForm(); // Added handleSubmit to handle form submissions
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Enter your name"
            {...register("name")} // Register input with react-hook-form
          />
          
          <input
            type="text"
            placeholder="Enter your age"
            {...register("age")} // Register input with react-hook-form
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default ReactHookForm;
