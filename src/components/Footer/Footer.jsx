import React from "react";
import footerLogo from "../../assets/images/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { RiGithubLine } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center border-t-2 text-primary-content p-10">
        <aside>
          <div className="w-20 h-20 rounded-full flex justify-center items-center boxShadow">
            <img className="" src={footerLogo} alt="" />
          </div>
          <p className="font-bold text-xl">
            Walid Hasan
            <br />
            Serving Bogura, Rajshahi with dedication and excellence
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <div className="flex gap-4">
              <div className="boxShadow w-12 h-12 rounded-full flex justify-center items-center">
                <a href="">
                  <FaLinkedinIn></FaLinkedinIn>
                </a>
              </div>
              <div className="boxShadow w-12 h-12 rounded-full flex justify-center items-center">
                <a href="">
                  <FaXTwitter></FaXTwitter>
                </a>
              </div>
              <div className="boxShadow w-12 h-12 rounded-full flex justify-center items-center">
                <a href="">
                  {" "}
                  <RiGithubLine></RiGithubLine>
                </a>
              </div>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
