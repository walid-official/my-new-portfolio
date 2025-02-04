import React, { useState } from "react";
import navLogo from "../../assets/images/logo.png";
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
        className="text-black tooltip tooltip-left hover:cursor-pointer font-medium bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        data-tip="Home"
      >
        <IoHome className="text-2xl block" />
      </li>
      <li
        onClick={() => scrollToSection("about")}
        className="text-black tooltip tooltip-left hover:cursor-pointer font-medium bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        data-tip="About"
      >
        <FaPersonDotsFromLine className="text-2xl" />
      </li>
      <li
        onClick={() => scrollToSection("skill")}
        className="text-black tooltip tooltip-left hover:cursor-pointer font-medium bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        data-tip="Skill"
      >
        <GiSkills className="text-2xl" />
      </li>
      <li
        onClick={() => scrollToSection("myProject")}
        className="text-black tooltip tooltip-left hover:cursor-pointer font-medium bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        data-tip="Project"
      >
        <FaProjectDiagram className="text-2xl" />
      </li>
      <li
        onClick={() => scrollToSection("contact")}
        className="text-black tooltip tooltip-left hover:cursor-pointer font-medium bg-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center"
        data-tip="Contact"
      >
        <MdContactMail className="text-2xl" />
      </li>
    </>
  );

  return (
    <nav className="w-11/12 mx-auto">
      <div className="navbar flex justify-between items-center py-4">
        {/* Logo */}
        <img src={navLogo} alt="Logo" className="h-10 w-auto" />

        {/* Desktop Menu */}
        <ul className="hidden lg:block space-y-4 mr-4">{links}</ul>

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
