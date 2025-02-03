import React from "react";
import navLogo from "../../assets/images/logo.png";
import { IoHome } from "react-icons/io5";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
const Navbar = () => {
  const homeScroll = () => {
    const targetSection = document.getElementById("home");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const aboutScroll = () => {
    const targetSection = document.getElementById("about");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skillScroll = () => {
    const targetSection = document.getElementById("skill");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const myProjectScroll = () => {
    const targetSection = document.getElementById("myProject");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const contactScroll = () => {
    const targetSection = document.getElementById("contact");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const links = (
    <>
      <li
        onClick={homeScroll}
        className="text-black tooltip tooltip-left  hover:cursor-pointer font-medium bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center "
        data-tip="Home"
      >
        <i className="font-bold text-2xl block"><IoHome></IoHome></i> 
      </li>
      <li
        onClick={aboutScroll}
        className="text-black hover:cursor-pointer tooltip tooltip-left font-medium bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        data-tip="About"
      >
        
        <i className="font-bold text-2xl block"><FaPersonDotsFromLine></FaPersonDotsFromLine></i> 
      </li>
      <li
        onClick={skillScroll}
        className="text-black  tooltip tooltip-left hover:cursor-pointer font-medium bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        data-tip="Skill"
      >
        <i className="font-bold text-2xl block"><GiSkills></GiSkills></i> 
      </li>
      <li
        onClick={myProjectScroll}
        className="text-black tooltip tooltip-left hover:cursor-pointer font-medium bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
         data-tip="Project"
      >
        <i className="font-bold text-2xl block"><FaProjectDiagram></FaProjectDiagram></i> 
      </li>
      <li
        onClick={contactScroll}
        className="text-black tooltip tooltip-left hover:cursor-pointer font-medium bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        data-tip="Contact"
      >
        <i className="font-bold text-2xl block"><MdContactMail></MdContactMail></i> 
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-black lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-black z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="text-black space-y-4 px-1">
            {links}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
