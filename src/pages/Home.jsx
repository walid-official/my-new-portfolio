import React from "react";
import Banner from "../components/banner/Banner";
import About from "../components/About/About";
import Skill from "../components/Skill/Skill";
import MyProjects from "../components/Project/MyProjects";
import Contact from "../components/Contact/Contact";

const Home = () => {
  return (
    <div>
      <div id="home" className="">
        <Banner></Banner>
      </div>
      <div id="about" className="">
        <About></About>
      </div>
      <div id="skill" className="">
        <Skill></Skill>
      </div>

      <div id="myProject" className="">
        <MyProjects></MyProjects>
      </div>

      <div id="contact" className="">
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
