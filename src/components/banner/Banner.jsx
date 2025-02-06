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
      <div className="absolute right-1/4 top-20 rotate-12 hidden sm:block">
        <motion.img
          className="w-16 h-16"
          animate={{
            x: [0, 20, 0],
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 5,
            ease: "easeInOut",
          }}
          src={util2}
          alt=""
        />
      </div>
      <div className="absolute left-1/4 top-40 rotate-12 hidden sm:block">
        <motion.img
          className="w-16 h-16"
          animate={{
            y: [0, -10, 10, 0],
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
      <div className="absolute left-[25%] top-[60%] rotate-12 hidden sm:block">
        <motion.img
          className="w-16 h-16"
          animate={{
            rotate: 360,
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
      <div className="absolute right-[25%] top-[60%] rotate-12 hidden sm:block">
        <motion.img
          className="w-16 h-16"
          animate={{
            x: [0, 10, 0],
            y: [0, -5, 5, 0],
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
      <div className="w-11/12 mx-auto">
        <div className="lg:flex items-center lg:h-screen flex-row-reverse justify-center sm:flex-wrap">
          <div className="lg:w-[70%] w-[90%] flex flex-col justify-center items-center lg:-mt-20 mt-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
              className="relative flex justify-center"
              data-aos="slide-down"
              data-aos-mirror="false"
              data-aos-once="false"
            >
              <div
                className="relative w-36 h-36 rounded-full p-[3px] shadow-2xl border-[3px] border-transparent animate-border-gradient"
                style={{ boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)" }}
              >
                <motion.img
                  className="w-full h-full rounded-full object-cover shadow-lg border-4 border-white"
                  src={bannerImg}
                  alt="Profile"
                  whileHover={{ scale: 1.05, rotate: 2 }}
                />
              </div>
            </motion.div>

            <div className="flex gap-6 items-center pb-4"></div>
            <h1 className="text-center font-extrabold text-xl sm:text-5xl md:text-4xl lg:text-5xl leading-tight tracking-wide relative">
              Hi,{" "}
              <span className="inline-block text-blue-600 drop-shadow-lg animate-waving-hand">
                👋
              </span>{" "}
              I'm
              <span className="relative transition-all duration-500 ease-in-out hover:scale-105">
                {" "}
                Walid Hasan
              </span>
            </h1>

            <div className="py-3 text-center">
              <TypeAnimation
                sequence={[
                  "A Web Designer",
                  1000,
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
                // style={{ boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)" }}
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
                // style={{ boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)" }}
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
                // style={{ boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)" }}
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
            <p className="py-4 lg:w-[55%] md:w-[70%] w-[90%] sm:w-full font-semibold text-center">
              Frontend MERN Stack Developer skilled in React, JavaScript, and
              responsive design. I create user-friendly web applications with
              clean code and efficient full-stack solutions
            </p>
            <a
              href="https://docs.google.com/document/d/14b_OR9Y2XED0hoakPNAXwylwWegIO4EIy5Tqyq3KZV0/export?format=docx"
              download
              className="relative px-8 py-3 mt-4 mx-auto flex justify-center items-center overflow-hidden rounded-full border-l-4 border-r-4 border-blue-400 bg-white shadow-xl transition-all duration-500 group hover:shadow-2xl"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(59, 130, 246, 0.2), transparent 70%)",
                }}
              ></div>
              <div
                className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-400 transition-all duration-500"
                style={{
                  animation: "spin 5s linear infinite",
                }}
              ></div>
              <span className="relative z-10 font-bold text-lg text-black transition-all duration-500 group-hover:text-blue-600">
                Hire Me
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
