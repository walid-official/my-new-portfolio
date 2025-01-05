import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
    // className=" bg-fixed bg-gradient-to-r from-[#232732] to-[#212428] shadow-inner"
  return (
    <div className="bg-fixed bg-gradient-to-r from-[#bebebe] to-[#ffffff] shadow-inner">
      <div className="sticky top-0 z-10 backdrop-blur-0 bg-gradient-to-r from-[#bebebe] to-[#ffffff]">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[600px]">

      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
