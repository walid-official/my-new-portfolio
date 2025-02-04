import React from "react";
import bannerImg from "../../assets/images/walid.png";
import util1 from "../../assets/images/skills/html.png";
import util2 from "../../assets/images/skills/js.png";
import util3 from "../../assets/images/skills/react-banner.png";
import util4 from "../../assets/images/skills/tailwind.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";
import Navbar from "../Navbar/Navbar";
import "./banner.css";
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
      <div className="absolute right-80 top-40 rotate-12 ">
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
      <div className="absolute left-80 top-60 rotate-12 ">
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
      <div className="absolute left-[400px] top-[460px] rotate-12 ">
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
      <div className="absolute right-[400px] top-[460px] rotate-12 ">
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
          <div className="  p-10 lg:w-[70%] w-[90%] flex flex-col justify-center items-center">
            <div
              className="flex gap-2 items-center relative"
              data-aos="slide-right"
              data-aos-mirror="false"
              data-aos-once="false"
            >
              <h1
                className="font-extrabold text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text transition-all duration-500 ease-in-out"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
                Web Developer
              </h1>

              {/* Glow Effect on Hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle, rgba(75, 85, 99, 0.3), transparent 80%)",
                }}
              ></div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              className="mt-4 relative flex justify-center"
              data-aos="slide-down"
              data-aos-mirror="false"
              data-aos-once="false"
            >
              {/* Animated Border */}
              <div className="relative w-36 h-36 rounded-full p-[3px] shadow-2xl border-[3px] border-transparent animate-border-gradient">
                {/* Profile Image */}
                <motion.img
                  className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white"
                  src={bannerImg}
                  alt="Profile"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                />
              </div>
            </motion.div>

            <div className="flex gap-6 items-center pb-4"></div>
            {/* bg-clip-text text-transparent bg-gradient-to-r from-[rgb(77,160,255)]  to-[#0f70df] */}
            <h1
              className="text-center transition-all duration-500 font-extrabold text-xl sm:text-5xl md:text-4xl lg:text-5xl leading-tight tracking-wide relative"
              data-aos="slide-up"
              data-aos-mirror="false"
              data-aos-once="false"
              // style={{
              //   background:
              //     "linear-gradient(45deg, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1))",
              //   WebkitBackgroundClip: "text",
              //   backgroundClip: "text",
              //   color: "transparent",
              //   textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              // }}
            >
              Hi,{" "}
              <span className="inline-block text-blue-600 drop-shadow-lg animate-waving-hand">
                👋
              </span>{" "}
              I'm
              <span
                className="relative transition-all duration-500 ease-in-out hover:scale-105"
                // style={{
                //   background:
                //     "linear-gradient(45deg, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1))",
                //   WebkitBackgroundClip: "text",
                //   backgroundClip: "text",
                //   color: "transparent",
                //   textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                // }}
              >
                {" "}
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
              {/* LinkedIn Icon */}
              <motion.div
                onClick={handleLinkdin}
                className="boxShadow hover:shadow-2xl hover:border duration-500 cursor-pointer w-12 h-12 rounded-full flex justify-center items-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a>
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <FaLinkedinIn className="text-xl" />
                  </motion.div>
                </a>
              </motion.div>

              {/* Twitter Icon */}
              <motion.div
                onClick={handleTwitter}
                className="boxShadow hover:shadow-2xl hover:border duration-500 cursor-pointer w-12 h-12 rounded-full flex justify-center items-center"
                whileHover={{ scale: 1.1, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <FaXTwitter className=" text-xl" />
                  </motion.div>
                </a>
              </motion.div>

              {/* GitHub Icon */}
              <motion.div
                onClick={handleGithub}
                className="boxShadow hover:shadow-2xl hover:border duration-500 cursor-pointer w-12 h-12 rounded-full flex justify-center items-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <a href="">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <RiGithubLine className=" text-xl" />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <p className="py-4 w-[60%] font-semibold text-center">
              Frontend MERN Stack Developer skilled in React, JavaScript, and
              responsive design. I create user-friendly web applications with
              clean code and efficient full-stack solutions
            </p>
            <a
              href="https://docs.google.com/document/d/1cC_a_sEV_LUGmUvdnXGFEXXkNLDcnkuhn3G3prfDc6k/export?format=docx"
              download
              className="relative px-8 py-3 my-4 mx-auto flex justify-center items-center overflow-hidden rounded-full border-l-4 border-r-4 border-blue-400 bg-white shadow-xl transition-all duration-500 group hover:shadow-2xl"
              style={{
                background:
                  "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(229,231,235,0.9))",
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.2)",
                transform: "perspective(1000px)",
              }}
            >
              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent 70%)",
                }}
              ></div>

              {/* Animated Border */}
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-400 transition-all duration-500"
                style={{
                  animation: "spin 5s linear infinite",
                }}
              ></div>

              {/* Button Text */}
              <span
                className="relative z-10 font-bold text-lg text-black transition-all duration-500 group-hover:text-blue-600"
                style={{
                  background:
                    "linear-gradient(45deg, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1))",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
                }}
              >
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
