import React from "react";
import bannerImg from "../../assets/images/banner.png"
const Banner = () => {
  return (
    <div>
      <div className="hero h-screen text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="shadow-2xl boxShadow">
        <img
            src={bannerImg}
            className="max-w-md rounded-lg shadow-2xl"
          />
        </div>
          <div>
            <h2 >Welcome to My World</h2>
            <h1 className="text-5xl font-bold">Hi,I'm Walid Hasan</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-[#286fe8] border-none shadow-2xl boxShadow text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
