import React from "react";

const BorderBanner = () => {
  return (
    <div className="flex justify-center items-center mb-20 w-[85%] mx-auto">
      <div className="">
        <p
          className="font-bold text-6xl text-center leading-normal"
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
