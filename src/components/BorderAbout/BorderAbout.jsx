import React from "react";

const BorderAbout = () => {
  return (
    <div className="flex justify-center items-center  p-6 mb-20 md:w-[85%] w-[95%] mx-auto">
      <div className="">
        <p
          className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center md:leading-normal sm:leading-normal lg:leading-normal leading-normal"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px black",
          }}
        >
          Building seamless experiences and{" "}
          scalable web solutions.
        </p>
      </div>
    </div>
  );
};

export default BorderAbout;
