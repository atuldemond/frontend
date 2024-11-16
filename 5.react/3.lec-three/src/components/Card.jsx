import React from "react";

const Card = () => {
  return (
    <>
      <div className="w-full h-screen bg-zinc-400">
        <div className="px-3 py-4 bg-white absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md">
          <div className="w-full h-32 bg-pink-200 ">
            <img
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1662466767400-27c176fab51b?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="w-full px-3 py-4 ">
            <h2 className="text-black-200 font-sans">Amazon Baiscs</h2>
            <p className=" text-sm mt-5 ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
              quae aliquid ab ea, culpa tempore corrupti aspernatur, rem harum
              eos maiores at. At, hic eaque.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
