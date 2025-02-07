import React from "react";
import { FaReact } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { motion } from "framer-motion";
import { RiGithubLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { FaLink } from "react-icons/fa6";
import { FaExternalLinkAlt } from "react-icons/fa";

const MyProject = ({ project }) => {
  const { name, image, description, id, liveLink, clientLink, serverLink, } =
    project || {};
  return (
    <div className="shadow-xl hover:scale-105 duration-500 rounded-md relative">
      <figure className="border-b">
        <img className="rounded-md" src={image} alt="Shoes" />
      </figure>
      <div className="p-8">
        <div className="">
          <h2 className="card-title text-black font-bold text-2xl py-4">{name}</h2>
          <div className="flex gap-2 text-black pb-4">
            <div className="">
              <motion.div
                className=" flex justify-center items-center w-10 h-10 rounded-full"
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
            <div className=" flex justify-center items-center w-10 h-10 rounded-full">
              <DiMongodb></DiMongodb>
            </div>
            <div className=" flex justify-center items-center w-10 h-10 rounded-full">
              <SiExpress></SiExpress>
            </div>
            <div className=" flex justify-center items-center w-10 h-10 rounded-full">
              <FaNodeJs></FaNodeJs>
            </div>
          </div>
        </div>
        <p className="text-black text-justify">{description}</p>
        <div className="flex items-center pt-3">
          <div className="">
            <a
              href={liveLink}
              target="_blank"
              className=" text-center  text-black"
            >
              <FaLink></FaLink>
            </a>
          </div>
         
          <div className="">
            <div className="  flex justify-center rounded-full cursor-pointer">
              <a
                href={clientLink}
                target="_blank"
                className="flex gap-2 items-center px-7 py-3"
              >
                {" "}
                <RiGithubLine></RiGithubLine>
                Client
              </a>
            </div>
          </div>
          {/* <div className="">
            <div className=" flex justify-center rounded-full cursor-pointer">
              <a
                href={serverLink}
                target="_blank"
                className="flex gap-2 items-center px-7 py-3"
              >
                {" "}
                <RiGithubLine></RiGithubLine>
                Server
              </a>
            </div>
          </div> */}
           <div className=" bg-slate-600 rounded-md">
            <NavLink
              to={`DetailsProject/${id}`}
              className=" block text-center px-5 py-3 rounded-full text-white"
            >
              View Details
            </NavLink>
          </div>
        </div>
      </div>
     
    </div>
  );
};

export default MyProject;
