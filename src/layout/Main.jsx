import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Main = () => {
  return (
    <div  className="bg-center bg-fixed bg-cover" style={{backgroundImage: `url(https://wallpapers.com/images/hd/wavy-graphic-in-pitch-black-gg9ubtwxk5jj9jzm.jpg)`}}>
      <div className="sticky top-0 z-10 backdrop-blur-0 bg-[#242424]">
        <Navbar></Navbar>
      </div>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
