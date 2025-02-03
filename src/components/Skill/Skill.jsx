import React from "react";
import htmlImg from "../../assets/images/skills/html.png";
import cssImg from "../../assets/images/skills/css.png";
import reactImg from "../../assets/images/skills/react.png";
import tailwindImg from "../../assets/images/skills/tailwind.png";
import jsImg from "../../assets/images/skills/js.png";
import mongoImg from "../../assets/images/skills/mongo.png";
import nodejsImg from "../../assets/images/skills/nodejs.png";
import expressImg from "../../assets/images/skills/exjs.png";
import firebaseImg from "../../assets/images/skills/firebase.png";
import jwtImg from "../../assets/images/skills/jwt.png";
import { motion } from "framer-motion";

const Skill = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-10 lg:w-[20%] md:w-[40%] sm:w-[80%] border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 rounded-full mx-auto p-6">
        <h2 className="font-bold text-4xl  text-center text-black">
          My Skills
        </h2>
      </div>
      <div className="py-20">
        <div className=" ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10  rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-40 h-40 rounded-full shadow-2xl mx-auto flex justify-center  items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full"
                ></motion.div>
                <img className="w-24 relative z-10" src={htmlImg} alt="html" />
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 py-4">
                HTML Specialist
              </h2>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${90}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-blue-500 rounded-full"
                ></motion.div>
              </div>

              {/* 90 Percentage */}
              <p className="mt-2 text-gray-600 font-semibold">{90}% Mastery</p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10 bg-white rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-40 h-40 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full"
                ></motion.div>
                <img className="w-24 relative z-10" src={cssImg} alt="html" />
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 py-4">
                CSS Expertise
              </h2>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${80}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-blue-500 rounded-full"
                ></motion.div>
              </div>

              {/* 90 Percentage */}
              <p className="mt-2 text-gray-600 font-semibold">{80}% Mastery</p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10 bg-white rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-40 h-40 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full"
                ></motion.div>
                <img className="w-24 relative z-10" src={tailwindImg} alt="html" />
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 py-4">
                Tailwind Expert
              </h2>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${70}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-blue-500 rounded-full"
                ></motion.div>
              </div>

              {/* 90 Percentage */}
              <p className="mt-2 text-gray-600 font-semibold">{70}% Mastery</p>
            </motion.div>
           <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10 bg-white rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-40 h-40 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full"
                ></motion.div>
                <img className="w-24 relative z-10" src={jsImg} alt="html" />
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 py-4">
                Javascript Specialist
              </h2>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${80}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-blue-500 rounded-full"
                ></motion.div>
              </div>

              {/* 90 Percentage */}
              <p className="mt-2 text-gray-600 font-semibold">{80}% Mastery</p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10 bg-white rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-40 h-40 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full"
                ></motion.div>
                <img className="w-24 relative z-10" src={reactImg} alt="html" />
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 py-4">
                React Developer
              </h2>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${75}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-blue-500 rounded-full"
                ></motion.div>
              </div>

              {/* 90 Percentage */}
              <p className="mt-2 text-gray-600 font-semibold">{75}% Mastery</p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10 bg-white rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-40 h-40 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full"
                ></motion.div>
                <img className="w-24 relative z-10" src={mongoImg} alt="html" />
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 py-4">
              MongoDB Enthusiast
              </h2>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${85}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-blue-500 rounded-full"
                ></motion.div>
              </div>

              {/* 90 Percentage */}
              <p className="mt-2 text-gray-600 font-semibold">{85}% Mastery</p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10 bg-white rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-40 h-40 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full"
                ></motion.div>
                <img className="w-24 relative z-10" src={nodejsImg} alt="html" />
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 py-4">
                Node.js Developer
              </h2>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${65}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-blue-500 rounded-full"
                ></motion.div>
              </div>

              {/* 90 Percentage */}
              <p className="mt-2 text-gray-600 font-semibold">{65}% Mastery</p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10 bg-white rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-40 h-40 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full"
                ></motion.div>
                <img className="w-24 relative z-10" src={firebaseImg} alt="html" />
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 py-4">
                Firebase Developer
              </h2>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${70}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-blue-500 rounded-full"
                ></motion.div>
              </div>

              {/* 90 Percentage */}
              <p className="mt-2 text-gray-600 font-semibold">{70}% Mastery</p>
            </motion.div>

             <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10 bg-white rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-40 h-40 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full"
                ></motion.div>
                <img className="w-24 relative z-10" src={expressImg} alt="html" />
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 py-4">
                Express.js Developer
              </h2>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${65}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-blue-500 rounded-full"
                ></motion.div>
              </div>
              {/* 90 Percentage */}
              <p className="mt-2 text-gray-600 font-semibold">{65}% Mastery</p>
            </motion.div>

            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.3)",
              }}
              transition={{ duration: 0.3 }}
              className="p-10 bg-white rounded-xl  text-center relative overflow-hidden"
            >
              {/* Animated Border Circle */}
              <div className="relative w-40 h-40 rounded-full shadow-2xl mx-auto flex justify-center items-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full border-t-4 border-b-4 border-blue-500 rounded-full"
                ></motion.div>
                <img className="w-24 relative z-10" src={jwtImg} alt="html" />
              </div>

              {/* Title */}
              <h2 className="font-bold text-xl text-gray-800 py-4">
                JWT Specialist
              </h2>

              {/* Progress Bar */}
              <div className="w-full bg-gray-300 rounded-full h-3 mt-4">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: `${65}%` }}
                  transition={{ duration: 1.5 }}
                  className="h-3 bg-blue-500 rounded-full"
                ></motion.div>
              </div>
              {/* 90 Percentage */}
              <p className="mt-2 text-gray-600 font-semibold">{65}% Mastery</p>
            </motion.div>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
