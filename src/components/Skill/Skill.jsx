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
const Skill = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="boxShadow  lg:w-[20%] md:w-[40%] sm:w-[80%] border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 rounded-full mx-auto p-6">
        <h2 className="font-bold text-4xl  text-center text-black">
          My Skills
        </h2>
      </div>
      <div className=" py-20">
        <div className=" ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <div className="boxShadow  p-10">
              <div className="boxShadow  w-40 h-40 mx-auto  border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={htmlImg} alt="" />
              </div>
              <div className="text-black">
                <h2 className="font-bold text-center text-2xl py-4">
                  HTML Mastery
                </h2>
              </div>
            </div>

            <div className="boxShadow  p-10">
              <div className="boxShadow  w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={cssImg} alt="" />
              </div>
              <div className="text-black">
                <h2 className="font-bold text-center text-2xl py-4">
                  CSS Expertise
                </h2>
              </div>
            </div>

            <div className="boxShadow  p-10">
              <div className="boxShadow  w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={tailwindImg} alt="" />
              </div>
              <div className="text-black">
                <h2 className="font-bold text-center text-2xl py-4">
                  Tailwind Expert
                </h2>
              </div>
            </div>

            <div className="boxShadow  p-10">
              <div className="boxShadow  w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={jsImg} alt="" />
              </div>
              <div className="text-black">
                <h2 className="font-bold text-center text-2xl py-4">
                  JavaScript Specialist
                </h2>
              </div>
            </div>

            <div className="boxShadow  p-10">
              <div className="boxShadow  w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={reactImg} alt="" />
              </div>
              <div className="text-black">
                <h2 className="font-bold text-center text-2xl py-4">
                  React Developer
                </h2>
              </div>
            </div>

            <div className="boxShadow  p-10">
              <div className="boxShadow  w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={mongoImg} alt="" />
              </div>

              <div className="text-black">
                <h2 className="font-bold text-center text-2xl py-4">
                  MongoDB Enthusiast
                </h2>
              </div>
            </div>

            <div className="boxShadow  p-10">
              <div className="boxShadow  w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={nodejsImg} alt="" />
              </div>
              <div className="text-black">
                <h2 className="font-bold text-center text-2xl py-4">
                  Node.js Developer
                </h2>
              </div>
            </div>

            <div className="boxShadow  p-10">
              <div className="boxShadow  w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={firebaseImg} alt="" />
              </div>
              <div className="text-black">
                <h2 className="font-bold text-center text-2xl py-4">
                  Firebase Developer
                </h2>
              </div>
            </div>

            <div className="boxShadow  p-10">
              <div className="boxShadow  w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-32" src={expressImg} alt="" />
              </div>
              <div className="text-black">
                <h2 className="font-bold text-center text-2xl py-4">
                  Express.js Developer
                </h2>
              </div>
            </div>

            <div className="boxShadow  p-10">
              <div className="boxShadow  w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-32" src={jwtImg} alt="" />
              </div>
              <div className="text-black">
                <h2 className="font-bold text-center text-2xl py-4">
                  JWT Specialist
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
