import React from "react";
import { FaCode } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaQrcode } from "react-icons/fa6";
const JourneyCard = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-3">
      <div className="mt-20">
        <div className="bg-white shadow-2xl p-6 rounded-xl">
            <div className="text-6xl text-center">
                <FaCode></FaCode>
            </div>
          <p className="py-2">
            I'm a dedicated web developer, constantly evolving and refining my
            skills. Every challenge I encounter is a stepping stone toward
            mastery, and every project is a chance to innovate. With passion and
            persistence, I'm crafting my place in the digital landscape. 🚀
          </p>
        </div>
      </div>
      <div className="">
        <div className="bg-white shadow-2xl p-6 rounded-xl">
        <div className="text-6xl text-center">
                <FaCodepen></FaCodepen>
            </div>
          <p className="py-2">
          From problem-solving to creative design, web development is my playground. I embrace every challenge as a chance to learn and improve, refining my skills one project at a time. Passion drives me, and effort defines my journey.🚀
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div className="bg-white shadow-2xl p-6 rounded-xl">
        <div className="text-6xl text-center">
                <FaQrcode></FaQrcode>
            </div>
          <p className="py-2">
          Building the web isn’t just my skill—it’s my passion. Every day, I strive to grow, refine my craft, and create meaningful digital experiences. Through hard work and curiosity, I’m shaping a future where code meets creativity. 🚀
          </p>
        </div>
      </div>
    
    </div>
  );
};

export default JourneyCard;
