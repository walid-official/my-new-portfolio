import React from "react";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";

const MyProject = ({ project }) => {
  const { name, image, description } = project || {};
  return (
    <div className="card boxShadow  shadow-xl">
      <figure>
        <img className="" src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="md:flex justify-between">
          <h2 className="card-title text-black font-bold text-2xl">{name}</h2>
          <div className="flex gap-2 space-y-3 md:space-y-0 text-black">
            <div className="pt-3 md:pt-0">
              <motion.div
                className="boxShadow flex justify-center items-center w-10 h-10 rounded-full"
                animate={{
                  rotate: 360, // Rotation in degrees
                }}
                transition={{
                  repeat: Infinity, // Repeat infinitely
                  repeatType: "loop", // Loop the animation
                  duration: 3, // Adjust the speed (in seconds)
                  ease: "linear", // Smooth animation
                }}
              >
                <FaReact></FaReact>
              </motion.div>
            </div>
            <div className="boxShadow flex justify-center items-center w-10 h-10 rounded-full">
              <DiMongodb></DiMongodb>
            </div>
            <div className="boxShadow flex justify-center items-center w-10 h-10 rounded-full">
              <SiExpress></SiExpress>
            </div>
            <div className="boxShadow flex justify-center items-center w-10 h-10 rounded-full">
              <FaNodeJs></FaNodeJs>
            </div>
          </div>
        </div>
        <p className="text-black">{description}</p>
        <div className="card-actions justify-start">
          <button className="boxShadow px-10 py-3 rounded-full text-black shadow-2xl">
            Live link
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProject;
