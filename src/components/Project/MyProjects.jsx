import React, { useEffect, useState } from "react";
import MyProject from "./MyProject";

const MyProjects = () => {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        fetch("/project.json")
        .then(res => res.json())
        .then(data => {
            setProjects(data);
        })
    },[])
  return (
    <div className="lg:w-[80%] w-[90%] mx-auto">
      <div
          className="mt-6 lg:w-[30%] md:w-[40%] sm:w-[80%] mx-auto p-6 relative overflow-hidden group"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(229,231,235,0.9))",
            boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.2)",
            borderLeft: "4px solid rgba(59, 130, 246, 0.8)",
            borderRight: "4px solid rgba(59, 130, 246, 0.8)",
            borderRadius: "9999px",
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

          {/* Title */}
          <h2
            className="font-bold text-4xl text-center text-black relative z-10"
            style={{
              background:
                "linear-gradient(45deg, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            My Projects
          </h2>
        </div>
      <div className="grid md:grid-cols-2 gap-6 pt-20">
        {
            projects.map((project,index) => <MyProject key={index} project={project}></MyProject> )
        }
      </div>
    </div>
  );
};

export default MyProjects;
