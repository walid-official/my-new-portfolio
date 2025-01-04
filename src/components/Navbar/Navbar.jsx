import React from "react";
import navLogo from "../../assets/images/logo.png"
const Navbar = () => {
  const links = (
    <>
      <li className="bg-[#24272c]  rounded-lg shadow-2xl">
        <a>Home</a>
      </li>
      <li className="bg-[#24272c]  rounded-lg shadow-2xl">
        <a>About</a>
      </li>
      <li className="bg-[#24272c]  rounded-lg shadow-2xl">
        <a>Service</a>
      </li>
      <li className="bg-[#24272c]  rounded-lg shadow-2xl">
        <a>Skills</a>
      </li>
      <li className="bg-[#24272c]  rounded-lg shadow-2xl">
        <a>Project</a>
      </li>
      <li className="bg-[#24272c]  rounded-lg shadow-2xl">
        <a>Contact</a>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
          {links}
            </ul>
          </div>
          <div className="w-16 h-16 rounded-full boxShadow shadow-2xl"><img className="w-full" src={navLogo} alt="" /></div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-4 text-white px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn shadow-2xl bg-[#191c21] text-white border-none">Download Cv</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
