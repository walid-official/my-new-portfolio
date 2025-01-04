import React from "react";
import bannerImg from "../../assets/images/banner.png";
import { TypeAnimation } from "react-type-animation";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";

const Banner = () => {
  return (
    <div> 
      <div className="lg:h-screen w-11/12 mx-auto text-white">
        <div className="lg:flex items-center lg:h-screen flex-row-reverse justify-around ">
          <div 
          //  animate={{ y: 20, x: 30 }}
          //  transition={{
          //    duration: 3,
          //    ease: "easeInOut",
          //    repeat: Infinity,
          //    repeatType: "reverse",
          //  }}
          className=" shadow-2xl boxShadow">
            <img src={bannerImg} className="lg:max-w-lg w-full rounded-lg shadow-2xl" />
          </div>
          <div className="boxShadow p-10 lg:w-[50%] flex flex-col justify-center items-center">
            <div className="flex gap-6 items-center pb-4">
              {/* <div className="w-10 h-1 bg-black boxShadow"></div> */}
              <h2 className="font-semibold text-xl px-4 py-2">Welcome to My World</h2>
            </div>
            <h1 className="text-5xl font-bold">Hi,👋I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-[#84abd7] to-[#597ca4]">Walid Hasan</span></h1>
           <div className="py-3">
           <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "A Web Designer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "A Frontend Web Developer",
                1000,
                "A MERN Web Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1.5em" }}
              repeat={Infinity}
            />
           </div>
           <div className="flex gap-4">
              <div className="boxShadow w-12 h-12 rounded-full flex justify-center items-center">
                <a href=""><FaLinkedinIn></FaLinkedinIn></a>
              </div>
              <div className="boxShadow w-12 h-12 rounded-full flex justify-center items-center">
                <a href=""><FaXTwitter></FaXTwitter></a>
              </div>
              <div className="boxShadow w-12 h-12 rounded-full flex justify-center items-center">
                <a href=""> <RiGithubLine></RiGithubLine></a>
              </div>
            </div>
            <p className="py-4 w-[80%] font-semibold text-center">
              Frontend MERN Stack Developer skilled in React, JavaScript, and responsive design. I create user-friendly web applications with clean code and efficient full-stack solutions
            </p>
            <button className=" px-8 py-3 rounded-lg my-4 border-none shadow-2xl boxShadow text-white">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
