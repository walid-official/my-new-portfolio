import React from "react";
import bannerImg from "../../assets/images/banner.png";
import { TypeAnimation } from "react-type-animation";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";

const Banner = () => {

  const handleLinkdin = () => {
    window.open('https://www.linkedin.com/in/walidhasan87', '_blank');
  };

  const handleTwitter = () => {
    window.open('https://x.com/WalidHasan17083', '_blank');
  };
  const handleGithub = () => {
    window.open('https://github.com/walid-official', '_blank');
  };

  return (
    <div className="py-10">
      <div className="lg:h-screen w-11/12 mx-auto text-black">
        <div className="lg:flex items-center lg:h-screen flex-row-reverse justify-around ">
          <div
            //  animate={{ y: 20, x: 30 }}
            //  transition={{
            //    duration: 3,
            //    ease: "easeInOut",
            //    repeat: Infinity,
            //    repeatType: "reverse",
            //  }}
            className="shadow-2xl  boxShadow"
          >
            <img
              src={bannerImg}
              className="lg:max-w-lg w-full rounded-lg shadow-2xl"
            />
          </div>
          <div className="boxShadow  text-black  p-10 lg:w-[50%] flex flex-col justify-center items-center">
            <div className="flex gap-6 items-center pb-4">
              {/* <div className="w-10 h-1 bg-black boxShadow"></div> */}
              <h2 className="font-semibold text-center text-xl px-4 py-2">
                Welcome to My World
              </h2>
            </div>
            <h1 className="sm:text-5xl text-xl text-center font-bold">
              Hi,👋I'm{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(77,160,255)]  to-[#0f70df]">
                Walid Hasan
              </span>
            </h1>
            <div className="py-3 text-center">
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
                style={{ fontSize: "1.5em",textAlign: "center"}}
                repeat={Infinity}
              />
            </div>
            <div className="flex gap-4">
              <div onClick={handleLinkdin} className="boxShadow cursor-pointer w-12 h-12 rounded-full flex justify-center items-center">
                <a>
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </div>
              <div onClick={handleTwitter} className="boxShadow cursor-pointer w-12 h-12 rounded-full flex justify-center items-center">
                <a href="">
                  <FaXTwitter></FaXTwitter>
                </a>
              </div>
              <div onClick={handleGithub} className="boxShadow cursor-pointer w-12 h-12 rounded-full flex justify-center items-center">
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
            <a href="https://docs.google.com/document/d/1cC_a_sEV_LUGmUvdnXGFEXXkNLDcnkuhn3G3prfDc6k/export?format=docx"
            download className=" px-8 py-3 rounded-lg my-4 border-none shadow-2xl boxShadow">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
