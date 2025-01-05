import { p } from "motion/react-client";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsProject = () => {
  const [projectDetails, setProjectDetails] = useState([]);
  const [singleProject, setSingleProject] = useState([]);
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
      });
  }, []);
  console.log(projectDetails);
  useEffect(() => {
    const singeProject = projectDetails.find((project) => project.id == id);
    setSingleProject(singeProject);
  }, [projectDetails]);

  const {
    image,
    image2,
    fullImg,
    name,
    description,
    frontEndDescription = [],
    backEndDescription = [],
    improvement = [],
  } = singleProject || {};

  console.log(singleProject);

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="md:flex gap-10">
        <div className="w-[50%]">
          <img src={fullImg} alt="" />
        </div>
        <div className="w-[50%]">
          <h2 className="font-bold text-4xl">{name}</h2>
          <p className="font-medium py-4">{description}</p>
          <div className="">
            <h2 className="font-bold pt-8 text-3xl">FrontEnd</h2>
            {frontEndDescription?.map((para, index) => (
              <p key={index} className="py-3">
                {para}
              </p>
            ))}
          </div>
          <div className="">
            <h2 className="font-bold pt-8 text-3xl">BackEnd</h2>
            {backEndDescription?.map((para, index) => (
              <p key={index} className="py-3">
                {para}
              </p>
            ))}
          </div>
          <div className="">
            <h2 className="font-bold text-3xl pt-8">
              Comprehensive Improvement
            </h2>
            {improvement?.map((para, index) => (
              <p key={index} className="py-3">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProject;
