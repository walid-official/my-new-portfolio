import React, { useState } from "react";
import navLogo from "../../../public/my-logo.png";
import { IoHome } from "react-icons/io5";
import { FaPersonDotsFromLine } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import { FaProjectDiagram } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId) => {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false); // Close menu after clicking a link
  };

  const links = (
    <>
      <li
        onClick={() => scrollToSection("home")}
        className="text-black  hover:cursor-pointer font-medium bg-white  shadow-2xl flex items-center justify-center"
      >
        Home
      </li>
      <li
        onClick={() => scrollToSection("about")}
        className="text-black  hover:cursor-pointer font-medium bg-white  shadow-2xl flex items-center justify-center"
        data-tip="About"
      >
        About
      </li>
      <li
        onClick={() => scrollToSection("skill")}
        className="text-black  hover:cursor-pointer font-medium bg-white  shadow-2xl flex items-center justify-center"
        data-tip="Skill"
      >
        Skill
      </li>
      <li
        onClick={() => scrollToSection("myProject")}
        className="text-black  hover:cursor-pointer font-medium bg-white  shadow-2xl flex items-center justify-center"
        data-tip="Project"
      >
        Project
      </li>
      <li
        onClick={() => scrollToSection("contact")}
        className="text-black  hover:cursor-pointer font-medium bg-white  shadow-2xl flex items-center justify-center"
        data-tip="Contact"
      >
        Contact
      </li>
    </>
  );

  return (
    <nav className="w-[85%] mx-auto">
      <div className="flex items-center justify-between ">
        {/* Logo */}
        <div className="">
          <img src={navLogo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <div className="ml-32">
          <ul className="hidden lg:flex gap-12">{links}</ul>
        </div>
        <div className="">
          <a
            href="https://docs.google.com/document/d/1cC_a_sEV_LUGmUvdnXGFEXXkNLDcnkuhn3G3prfDc6k/export?format=docx"
            download
            className="relative px-8 py-3 my-4 mx-auto flex justify-center items-center overflow-hidden rounded-full border-l-4 border-r-4 border-blue-400 bg-white shadow-xl transition-all duration-500 group hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(229,231,235,0.9))",
              boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.2)",
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

            {/* Button Text */}
            <span
              className="relative z-10 font-bold text-lg text-black transition-all duration-500 group-hover:text-blue-600"
              style={{
                background:
                  "linear-gradient(45deg, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1))",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
                textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
              }}
            >
              Download CV
            </span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="lg:hidden btn btn-ghost text-black"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-8 6h8"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col justify-center items-center gap-6 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-6 text-black text-3xl"
        >
          ✖
        </button>
        <ul className="flex flex-col gap-6">{links}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
