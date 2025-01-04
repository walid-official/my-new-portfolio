import  { useRef } from "react";
import contactImg from "../../assets/images/world.png";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm("service_zkobzwh", "template_kvl3fu6", form.current, "n9eOVgGeK1V5CpTT0")
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
    }

  return (
    <div className="overflow-x-hidden">
      <div className="hero min-h-screen">
        <div className="hero-content text-white flex-col lg:flex-row-reverse">
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
          <div className="card boxShadow  w-full max-w-lg shrink-0 shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  name="from_name"
                  className="boxShadow bg-[#1c1e23] p-4 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  type="email"
                  name="from_name"
                  placeholder="Email"
                  className="boxShadow bg-[#1c1e23] p-4 rounded-md"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Message</span>
                </label>
                <textarea
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="boxShadow bg-[#1c1e23] p-6 pb-14 rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="boxShadow px-10 py-4 rounded-full text-white shadow-2xl">
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
