import React from "react";

const Card = () => {
  const data = [
    {
      name: "Atul Demond ",
      image:
        "https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "lorem hey i am doing great work and what about your and your family ",
      inStock: true,
    },
    {
      name: "Rahul Kumar ",
      image:
        "https://plus.unsplash.com/premium_photo-1731498609034-f92f4445d4dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "lorem hey i am doing great work and what about your and your family ",
      inStock: false,
    },
    {
      name: "Pintu Raj ",
      image:
        "https://images.unsplash.com/photo-1720048171098-dba33b2c4806?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "lorem hey i am doing great work and what about your and your family ",
      inStock: true,
    },
    {
      name: "Atul Demond ",
      image:
        "https://images.unsplash.com/photo-1721332155433-3a4b5446bcd9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "lorem hey i am doing great work and what about your and your family ",
      inStock: true,
    },
    {
      name: "Rahul Kumar ",
      image:
        "https://plus.unsplash.com/premium_photo-1731498609034-f92f4445d4dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "lorem hey i am doing great work and what about your and your family ",
      inStock: true,
    },
    {
      name: "Pintu Raj ",
      image:
        "https://images.unsplash.com/photo-1720048171098-dba33b2c4806?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      desc: "lorem hey i am doing great work and what about your and your family ",
      inStock: false,
    },
  ];

  const stockcheck = (event) => {
    alert("Clicked");
  };
  return (
    <>
      <div className=" w-full h-[100%] flex flex-wrap items-center gap-10 justify-center  bg-amber-200 p-2 ">
        {data.map((value, index) => {
          return (
            <div
              key={index}
              className=" w-[300px] h-auto px-3 py-4  bg-white rounded-md"
            >
              <div className="w-full h-32 bg-pink-200 ">
                <img
                  className="w-full h-full object-cover"
                  src={value.image}
                  alt=""
                />
              </div>
              <div className="w-full px-3 py-4 ">
                <h2 className="text-black-200 font-sans">{value.name}</h2>
                <p className=" text-sm mt-5 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Delectus quae aliquid ab ea, culpa tempore corrupti
                  aspernatur, rem harum eos maiores at. At, hic eaque.
                </p>
              </div>
              <button
                onClick={stockcheck}
                className={`"px-2   text-sm  rounded-md  ${
                  value.inStock ? "bg-blue-400" : " bg-red-500"
                } py-2 "`}
              >
                {value.inStock ? "BUY NOW" : "OUT OF STOCK"}
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Card;
