import React from "react";
import bannerImg from "../../assets/images/walid.png";
import util1 from "../../assets/images/skills/html.png";
import util2 from "../../assets/images/skills/js.png";
import util3 from "../../assets/images/skills/react-banner.png";
import util4 from "../../assets/images/skills/css.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  const handleLinkdin = () => {
    window.open("https://www.linkedin.com/in/walidhasan87", "_blank");
  };

  const handleTwitter = () => {
    window.open("https://x.com/WalidHasan17083", "_blank");
  };
  const handleGithub = () => {
    window.open("https://github.com/walid-official", "_blank");
  };

  return (
    <div className="relative">
      <div className="absolute right-80 top-40 rotate-12">
        <motion.img
          className="w-16 h-16"
          animate={{
            x: [0, 20, 0], // Moves left and right smoothly
            y: [0, 10, 0], // Moves left and right smoothly
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut", // Smooth transition
          }}
          src={util2}
          alt=""
        />
      </div>
      <div className="absolute left-80 top-60 rotate-12">
        <motion.img
          className="w-16 h-16"
          animate={{
            y: [0, -10, 10, 0], // Floating effect
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut",
          }}
          src={util1}
          alt=""
        />
      </div>
      <div className="absolute left-[400px] top-[460px] rotate-12">
        <motion.img
          className="w-16 h-16"
          animate={{
            rotate: 360, // Floating effect
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "linear",
          }}
          src={util3}
          alt=""
        />
      </div>
      <div className="absolute right-[400px] top-[460px] rotate-12">
        <motion.img
          className="w-16 h-16"
          animate={{
            x: [0, 10, 0],
            y: [0, -5, 5, 0], // Floating effect
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut",
          }}
          src={util4}
          alt=""
        />
      </div>
      <div className="lg:h-screen w-11/12 mx-auto">
        <div className="lg:flex items-center lg:h-screen flex-row-reverse justify-around ">
          <div className="   p-10 lg:w-[50%] flex flex-col justify-center items-center">
            <div className="flex gap-2 items-center absolute top-10 z-10 ">
              <h1 className="font-bold text-8xl text-white drop-shadow-[2px_2px_0px_black]">
                Web Developer
              </h1>
            </div>
            <div className="mt-28">
              <img
                className="w-28 h-28 rounded-full object-cover"
                src={bannerImg}
                alt=""
              />
            </div>
            <div className="flex gap-6 items-center pb-4">
              {/* <div className="w-10 h-1 bg-black boxShadow"></div> */}

              {/* <h2 className="font-semibold text-center text-xl px-4 py-2">
                Welcome to My World
              </h2> */}
            </div>
            {/* bg-clip-text text-transparent bg-gradient-to-r from-[rgb(77,160,255)]  to-[#0f70df] */}
            <h1 className="sm:text-5xl text-xl text-center font-bold">
              Hi,👋I'm <span className="">Walid Hasan</span>
            </h1>
            <div className="py-3 text-center">
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "A Web Designer",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "A Frontend Web Developer",
                  1000,
                  "A MERN Stack Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ fontSize: "1.5em", textAlign: "center" }}
                repeat={Infinity}
              />
            </div>
            <div className="flex gap-4">
              <div
                onClick={handleLinkdin}
                className="boxShadow hover:shadow-2xl  hover:border duration-500  cursor-pointer w-12 h-12 rounded-full flex justify-center items-center"
              >
                <a>
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </div>
              <div
                onClick={handleTwitter}
                className="boxShadow hover:shadow-2xl  hover:border duration-500  cursor-pointer w-12 h-12 rounded-full flex justify-center items-center"
              >
                <a href="">
                  <FaXTwitter></FaXTwitter>
                </a>
              </div>
              <div
                onClick={handleGithub}
                className="boxShadow hover:shadow-2xl  hover:border duration-500  cursor-pointer w-12 h-12 rounded-full flex justify-center items-center"
              >
                <a href="">
                  {" "}
                  <RiGithubLine></RiGithubLine>
                </a>
              </div>
            </div>
            <p className="py-4 w-[80%] font-semibold text-center">
              Frontend MERN Stack Developer skilled in React, JavaScript, and
              responsive design. I create user-friendly web applications with
              clean code and efficient full-stack solutions
            </p>
            <a
              href="https://docs.google.com/document/d/1cC_a_sEV_LUGmUvdnXGFEXXkNLDcnkuhn3G3prfDc6k/export?format=docx"
              download
              className="relative px-8 py-3 rounded-lg my-4 border-none bg-gradient-to-r from-blue-500 to-blue-700 shadow-2xl boxShadow overflow-hidden group"
            >
              {/* Background Sliding Effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></span>

              {/* Text Content */}
              <span className="relative z-10  text-white group-hover:text-white font-semibold duration-500">
                Hire Me
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="fixed bottom-8 right-0 z-10">
        <Navbar></Navbar>
      </div>
    </div>
  );
};

export default Banner;
