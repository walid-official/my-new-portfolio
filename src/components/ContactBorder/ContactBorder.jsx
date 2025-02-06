import React from "react";

const ContactBorder = () => {
  return (
    <div className="flex justify-center items-center  p-6 mb-20 w-[85%] mx-auto">
      <div className="">
        <p
          className="font-bold  lg:text-6xl md:text-5xl sm:text-4xl text-3xl  md:leading-normal sm:leading-normal lg:leading-normal leading-normal"
          style={{
            color: "transparent",
            WebkitTextStroke: "2px black",
          }}
        >
          Reach out anytime for question
        </p>
      </div>
    </div>
  );
};

export default ContactBorder;
