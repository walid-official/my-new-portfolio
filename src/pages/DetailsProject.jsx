import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsProject = () => {
  const [projectDetails, setProjectDetails] = useState([]);
  const [singleProject, setSingleProject] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch("/project.json")
      .then((res) => res.json())
      .then((data) => {
        setProjectDetails(data);
      });
  }, []);

  useEffect(() => {
    if (projectDetails.length > 0) {
      const project = projectDetails.find((project) => project.id == id);
      setSingleProject(project || {});  // Avoid setting undefined
    }
  }, [projectDetails, id]);

  console.log(singleProject);

  const {
    image,
    image2,
    fullImg,
    name,
    description,
    frontEndDescription = [],
    backEndDescription = [],
    challenges = [],
    improvement = [],
  } = singleProject || {};

  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="md:flex gap-10">
        <div className="md:w-[50%]">
          <img src={fullImg} alt="" />
        </div>
        <div className="md:w-[50%] pt-10 md:pt-0">
          <h2 className="font-bold text-4xl">{name}</h2>
          <p className="font-medium py-4">{description}</p>

          <div>
            <h2 className="font-bold pt-8 text-3xl">FrontEnd</h2>
            {frontEndDescription.map((para, index) => (
              <p key={index} className="py-3">{para}</p>
            ))}
          </div>

          <div>
            <h2 className="font-bold pt-8 text-3xl">BackEnd</h2>
            {backEndDescription.map((para, index) => (
              <p key={index} className="py-3">{para}</p>
            ))}
          </div>

          <div>
            <h2 className="font-bold pt-8 text-3xl">Key Challenges</h2>
            {challenges.length > 0 ? (
              challenges.map((para, index) => (
                <p key={index} className="py-3">{para}</p>
              ))
            ) : (
              <p className="text-gray-500">No challenges found.</p>
            )}
          </div>

          <div>
            <h2 className="font-bold text-3xl pt-8">Comprehensive Improvement</h2>
            {improvement.map((para, index) => (
              <p key={index} className="py-3">{para}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsProject;
