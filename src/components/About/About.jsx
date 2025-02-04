import React from "react";
import aboutImg from "../../assets/images/about2.png";
import nodeJs from "../../assets/images/skills/nodejs.png"
import reactJs from "../../assets/images/skills/react.png"
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto">
        <div className="boxShadow mt-6  lg:w-[20%] md:w-[40%] sm:w-[80%] border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 rounded-full mx-auto p-6">
          <h2 className="font-bold text-4xl text-center text-black">
            About Me
          </h2>
        </div>
        <div className="lg:flex justify-center py-20">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <div className="lg:mt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0, 102, 255, 0.3)",
                }}
                transition={{ duration: 0.5 }}
                className="relative bg-white border-2 rounded-lg shadow-xl p-6 max-w-md mx-auto overflow-hidden"
              >
                {/* Animated Left Border */}
                <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute top-0 left-0 w-1 bg-blue-500"
                ></motion.div>

                {/* Animated Decorative Shapes */}
                <motion.div
                  initial={{ x: -50, y: -50 }}
                  animate={{
                    x: [0, 100, 100, 0, -100, -100, 0],
                    y: [0, -100, 100, 100, 0, -100, -100],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-16 h-16 bg-blue-500 rounded-full opacity-20"
                ></motion.div>

                <motion.div
                  initial={{ x: 50, y: 50 }}
                  animate={{
                    x: [0, -100, -100, 0, 100, 100, 0],
                    y: [0, 100, -100, -100, 0, 100, 100],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-24 h-24 bg-blue-400 rounded-full opacity-10"
                ></motion.div>

                {/* Text Section */}
                <div className="relative z-10">
                  <div className="">
                    <img src={nodeJs} className="w-20" alt="" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#000] mb-3">
                    Backend Developer | Node.js
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I am a skilled Backend Developer specializing in Node.js,
                    focused on building scalable, secure, and high-performance
                    server-side applications. I excel at optimizing APIs,
                    databases, and backend logic for seamless functionality.
                  </p>
                </div>
              </motion.div>
            </div>
            <div className="">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0, 102, 255, 0.3)",
                }}
                transition={{ duration: 0.5 }}
                className="relative bg-white border-2 rounded-lg shadow-xl p-6 max-w-md mx-auto overflow-hidden"
              >
                {/* Animated Border */}
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute top-0 left-0 h-1 bg-blue-500"
                ></motion.div>

                {/* Animated Decorative Shapes */}
                <motion.div
                  initial={{ x: -50, y: -50 }}
                  animate={{
                    x: [0, 100, 100, 0, -100, -100, 0],
                    y: [0, -100, 100, 100, 0, -100, -100],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-16 h-16 bg-blue-500 rounded-full opacity-20"
                ></motion.div>

                <motion.div
                  initial={{ x: 50, y: 50 }}
                  animate={{
                    x: [0, -100, -100, 0, 100, 100, 0],
                    y: [0, 100, -100, -100, 0, 100, 100],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-24 h-24 bg-blue-400 rounded-full opacity-10"
                ></motion.div>

                {/* Text Section */}
                <div className="relative z-10">
                <div className="">
                    <img src={reactJs} className="w-20" alt="" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#000] mb-3">
                    Frontend Developer | React.js
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I am a dedicated Front-End Developer with over a year of
                    experience specializing in React.js. I excel at building
                    dynamic, responsive, and user-centric web applications,
                    ensuring seamless performance, modern design, and optimal
                    user experience.
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="lg:mt-20">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 8px 20px rgba(0, 102, 255, 0.3)",
                }}
                transition={{ duration: 0.5 }}
                className="relative bg-white border-2   rounded-lg shadow-xl p-6 max-w-md mx-auto overflow-hidden"
              >
                {/* Animated Right Border */}
                <motion.div
                  initial={{ height: "0%" }}
                  animate={{ height: "100%" }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute top-0 right-0 w-1 bg-blue-500"
                ></motion.div>

                {/* Animated Decorative Shapes */}
                <motion.div
                  initial={{ x: -50, y: -50 }}
                  animate={{
                    x: [0, 100, 100, 0, -100, -100, 0],
                    y: [0, -100, 100, 100, 0, -100, -100],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-16 h-16 bg-blue-500 rounded-full opacity-20"
                ></motion.div>

                <motion.div
                  initial={{ x: 50, y: 50 }}
                  animate={{
                    x: [0, -100, -100, 0, 100, 100, 0],
                    y: [0, 100, -100, -100, 0, 100, 100],
                    rotate: [0, 90, 180, 270, 360],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-24 h-24 bg-blue-400 rounded-full opacity-10"
                ></motion.div>

                {/* Text Section */}
                <div className="relative z-10">
                <div className="">
                    <img src="https://images.seeklogo.com/logo-png/44/2/next-js-icon-logo-png_seeklogo-449825.png" className="w-20" alt="" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#000] mb-3">
                    Web Developer | Next.js
                  </h2>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    I am a dedicated Web Developer specializing in Next.js,
                    passionate about building fast, scalable, and SEO-friendly
                    web applications. I focus on creating seamless user
                    experiences with efficient server-side rendering and modern
                    front-end technologies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
