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
      <div className="boxShadow lg:w-[30%] md:w-[40%] sm:w-[80%] border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 rounded-full mx-auto p-6">
        <h2 className="font-bold text-4xl  text-center text-white">
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
