import React from "react";

const BorderBanner = () => {
  return (
    <div className="flex justify-center items-center mb-20 mt-20 md:mt-0  md:w-[85%] w-[95%]  mx-auto">
      <div className="">
        <p
          className="font-bold lg:text-6xl md:text-5xl sm:text-4xl text-3xl text-center  md:leading-normal sm:leading-normal lg:leading-normal leading-normal"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px black",
          }}
        >
          Dynamic UIs with <span className="text-black">React & Tailwind</span> , secure APIs with Node.js & MongoDB.
        </p>
      </div>
    </div>
  );
};

export default BorderBanner;
