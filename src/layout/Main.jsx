import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import AOS from 'aos';

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
      once: false,
      offset: 0,
    });
}, []);
  return (
    <div className="bg-fixed ">
      <div className="min-h-[600px]">

      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
