import { useRef } from "react";
// import contactImg from "../../assets/images/world.png";
// import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
// import ContactBorder from "../ContactBorder/ContactBorder";
import { IoLocationSharp } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import toast from "react-hot-toast";
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
          toast.success("Email sent successfully!");
          form.current.reset(); 
        },
        (error) => {
          console.error("FAILED...", error.text);
          alert("Failed to send the email. Please try again later.");
        }
      );
  };

  return (
    <div className="w-11/12 mx-auto">
      <div className="">
        <div
          className="mt-6 lg:w-[30%] md:w-[40%] w-[80%] mx-auto p-6 relative overflow-hidden group"
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

      <div className="">
        <div className="lg:flex my-20 lg:w-[80%] mx-auto">
          <div className="card rounded-none  lg:w-[50%]  shadow-2xl">
            <form ref={form} onSubmit={sendEmail} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-black">Name</span>
                </label>
                <input
                  type="name"
                  placeholder="Name"
                  name="from_name"
                  className="border-b-2 p-4 rounded-md"
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
                  className="border-b-2  p-4 rounded-md"
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
                  className="border-b-2  p-6 pb-14 rounded-md"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button className="border-b-2 px-10 py-4 rounded-full text-black border">
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="lg:w-[50%] bg-[#00a4e0] text-white p-10 shadow-2xl">
            <div className="flex items-center h-96">
              <div className="space-y-6">
                <div className="lg:flex gap-4 items-center">
                  <button className="text-2xl"><IoLocationSharp></IoLocationSharp></button>
                  <div className="lg:mt-10 mt-5">
                    <h2 className="font-bold text-xl">Address</h2>
                    <p>Shantibag, Malotinagar, Bogura, <br /> Rajshahi, Bangladesh</p>
                  </div>
                </div>
                <div className="lg:flex gap-4 items-center">
                  <button className="text-2xl"><RiWhatsappFill></RiWhatsappFill></button>
                  <div className="lg:mt-5 mt-5">
                    <h2 className="font-bold text-xl">Lets Talk</h2>
                    <p>+880 1310870388</p>
                  </div>
                </div>
                <div className="lg:flex gap-4 items-center">
                  <button className="text-2xl"><MdEmail></MdEmail></button>
                  <div className="lg:mt-5 mt-5">
                    <h2 className="font-bold text-xl">General Support</h2>
                    <p>walid.official8@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
