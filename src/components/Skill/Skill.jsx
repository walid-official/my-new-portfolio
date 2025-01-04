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
      <div className="boxShadow lg:w-[20%] md:w-[40%] sm:w-[80%] border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 rounded-full mx-auto p-6">
        <h2 className="font-bold text-4xl  text-center text-white">
          My Skills
        </h2>
      </div>
      <div className=" py-20">
        <div className=" ">
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            <div className="boxShadow p-10">
              <div className="boxShadow w-40 h-40 mx-auto  border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={htmlImg} alt="" />
              </div>
              <div className="text-white">
                <h2 className="font-bold text-center text-2xl py-4">
                  HTML Mastery
                </h2>
                <p className="text-center font-medium">
                  Skilled in HTML5 for creating clean, structured, and
                  responsive web layouts, ensuring accessibility and seamless
                  user experiences
                </p>
              </div>
            </div>

            <div className="boxShadow p-10">
              <div className="boxShadow w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={cssImg} alt="" />
              </div>
              <div className="text-white">
                <h2 className="font-bold text-center text-2xl py-4">
                  CSS Expertise
                </h2>
                <p className="text-center font-medium">
                  Skilled in CSS3 for designing modern, responsive, and visually
                  appealing web layouts, ensuring seamless cross-browser
                  compatibility and accessibility.
                </p>
              </div>
            </div>

            <div className="boxShadow p-10">
              <div className="boxShadow w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={tailwindImg} alt="" />
              </div>
              <div className="text-white">
                <h2 className="font-bold text-center text-2xl py-4">
                  Tailwind Expert
                </h2>
                <p className="text-center font-medium">
                Skilled in utilizing Tailwind's responsive modifiers to create layouts that adapt seamlessly to different screen sizes, enhancing user experience across devices.
                </p>
              </div>
            </div>

            <div className="boxShadow p-10">
              <div className="boxShadow w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={jsImg} alt="" />
              </div>
              <div className="text-white">
                <h2 className="font-bold text-center text-2xl py-4">
                  JavaScript Specialist
                </h2>
                <p className="text-center font-medium">
                Proficient in JavaScript for building dynamic, interactive, and user-friendly web applications with efficient and reusable code. Experienced in leveraging modern JavaScript features and frameworks 
                </p>
              </div>
            </div>

            <div className="boxShadow p-10">
              <div className="boxShadow w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={reactImg} alt="" />
              </div>
              <div className="text-white">
                <h2 className="font-bold text-center text-2xl py-4">
                  React Developer
                </h2>
                <p className="text-center font-medium">
                  Proficient in React for building dynamic, responsive, and
                  scalable user interfaces. Experienced in creating reusable
                  components, managing state, and optimizing performance in
                  modern web applications.
                </p>
              </div>
            </div>

            <div className="boxShadow p-10">
              <div className="boxShadow w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
                <img className="w-24" src={mongoImg} alt="" />
              </div>

              <div className="text-white">
                <h2 className="font-bold text-center text-2xl py-4">
                MongoDB Enthusiast
                </h2>
                <p className="text-center font-medium">
                Skilled in MongoDB for designing and managing NoSQL databases. Experienced in building efficient, scalable data models, performing queries, and optimizing database performance for modern web applications
                </p>
              </div>
            </div>

           

            <div className="boxShadow p-10">
            <div className="boxShadow w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
              <img className="w-24" src={nodejsImg} alt="" />
            </div>
              <div className="text-white">
                <h2 className="font-bold text-center text-2xl py-4">
                Node.js Developer
                </h2>
                <p className="text-center font-medium">
                Proficient in Node.js for developing scalable, high-performance server-side applications. Experienced in building RESTful APIs, integrating databases, and ensuring seamless communication between server and client.
                </p>
              </div>
            </div>



            <div className="boxShadow p-10">
            <div className="boxShadow w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
              <img className="w-24" src={firebaseImg} alt="" />
            </div>
              <div className="text-white">
                <h2 className="font-bold text-center text-2xl py-4">
                Firebase Developer
                </h2>
                <p className="text-center font-medium">
                Proficient in Firebase for developing and managing real-time, scalable web and mobile applications. Experienced in utilizing Firebase services such as Authentication, Firestore, Realtime Database, Cloud Functions, and Cloud Messaging to build robust, user-centric solutions.
                </p>
              </div>
            </div>
           


            
            <div className="boxShadow p-10">
            <div className="boxShadow w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
              <img className="w-32" src={expressImg} alt="" />
            </div>
              <div className="text-white">
                <h2 className="font-bold text-center text-2xl py-4">
                Express.js Developer
                </h2>
                <p className="text-center font-medium">
                Proficient in Express.js for developing robust, high-performance web applications. Experienced in building RESTful APIs, managing server-side routing, and ensuring seamless integration with databases and front-end technologies.
                </p>
              </div>
            </div>


            <div className="boxShadow p-10">
            <div className="boxShadow w-40 h-40 mx-auto border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 flex justify-center items-center shadow-2xl rounded-full">
              <img className="w-32" src={jwtImg} alt="" />
            </div>
              <div className="text-white">
                <h2 className="font-bold text-center text-2xl py-4">
                JWT  Specialist
                </h2>
                <p className="text-center font-medium">
                Proficient in implementing JSON Web Tokens (JWT) for secure, stateless authentication and authorization in web applications. Experienced in generating, signing, and verifying JWTs to facilitate trusted communication between clients and servers.
                </p>
              </div>
            </div>


          

           

          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
