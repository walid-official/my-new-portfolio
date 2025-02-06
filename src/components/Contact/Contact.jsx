import { useRef } from "react";
import contactImg from "../../assets/images/world.png";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import ContactBorder from "../ContactBorder/ContactBorder";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zkobzwh",
        "template_kvl3fu6",
        form.current,
        "n9eOVgGeK1V5CpTT0"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send the email. Please try again later.");
        }
      );
  };

  return (
    <div className="overflow-x-hidden">
     
      <div className="">
        <div
          className="mt-6 lg:w-[30%] md:w-[40%] sm:w-[80%] mx-auto p-6 relative overflow-hidden group"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(229,231,235,0.9))",
            boxShadow: "0px 10px 30px rgba(0, 102, 255, 0.2)",
            borderLeft: "4px solid rgba(59, 130, 246, 0.8)",
            borderRight: "4px solid rgba(59, 130, 246, 0.8)",
            borderRadius: "9999px",
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

          {/* Title */}
          <h2
            className="font-bold text-4xl text-center text-black relative z-10"
            style={{
              background:
                "linear-gradient(45deg, rgba(59, 130, 246, 1), rgba(147, 51, 234, 1))",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
            }}
          >
            Get In Touch
          </h2>
        </div>
       
      </div>
      
      <div className="hero min-h-screen">
        <div className="hero-content text-black flex-col lg:flex-row-reverse">
          <div className="w-[55%] flex justify-center items-center">
            <motion.img
              className="w-[55%]"
              animate={{
                rotate: 360, // Rotation in degrees
              }}
              transition={{
                repeat: Infinity, // Repeat infinitely
                repeatType: "loop", // Loop the animation
                duration: 16, // Adjust the speed (in seconds)
                ease: "linear", // Smooth animation
              }}
              src={contactImg}
              alt=""
            />
          </div>
          <div className="card boxShadow   w-full max-w-lg shrink-0 shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  name="from_name"
                  className="boxShadow p-4 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Email</span>
                </label>
                <input
                  type="email"
                  name="from_name"
                  placeholder="Email"
                  className="boxShadow  p-4 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Message</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="boxShadow  p-6 pb-14 rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="boxShadow px-10 py-4 rounded-full text-black shadow-2xl">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
