import React from "react";
import aboutImg from "../../assets/images/about2.png";
const About = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="boxShadow lg:w-[20%] md:w-[40%] sm:w-[80%] border-l-blue-400 border-r-blue-400 border-2 border-t-0 border-b-0 rounded-full mx-auto p-6">
        <h2 className="font-bold text-4xl text-center text-white">About Me</h2>
      </div>

      <div className="lg:flex py-20">
        <div className="lg:w-[50%] flex justify-center items-center  mask mask-circle">
          <div className="boxShadow">
            <img src={aboutImg} alt="" />
          </div>
        </div>
        <div className="lg:w-[50%] flex justify-start">
          <div className="">
            <ul className="md:timeline hidden md:timeline-vertical">
              <li className="">
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="text-white"
                    className="h-5 w-5 bg-white rounded-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start border-l-2 border-blue-400 shadow-2xl  boxShadow">
                  {/* First Macintosh computer */}
                  <div className="boxShadow rounded-xl bg-[#21242b] shadow-2xl text-white border-none  p-6">
                    I am a passionate Web Developer specializing in React.js
                    with over 1 year of experience in Front-End Development and
                    expertise in the MERN stack (MongoDB, Express.js, React.js,
                    Node.js). My journey in web development is fueled by a
                    strong commitment to crafting efficient, responsive, and
                    user-friendly applications.
                  </div>
                </div>
                <hr className="" />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="text-white"
                    className="h-5 w-5 bg-white rounded-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end border-r-2 border-blue-400 shadow-2xl mr-5 boxShadow">
                  {/* First Macintosh computer */}
                  <p className="boxShadow bg-[#21242b] shadow-2xl text-white border-none  p-6">
                    While my primary focus has been on front-end development,
                    building visually appealing and highly interactive user
                    interfaces, I am equally excited about diving deeper into
                    back-end development. The prospect of designing robust APIs,
                    optimizing server-side logic, and ensuring seamless
                    communication between the front and back ends truly excites
                    me.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="text-white"
                    className="h-5 w-5 bg-white rounded-full"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start border-l-2 border-blue-400 shadow-2xl boxShadow">
                  {/* First Macintosh computer */}
                  <p className="boxShadow   bg-[#21242b] shadow-2xl text-white border-none  p-6">
                    In addition to my expertise in JavaScript and React.js, I am
                    proficient in technologies like TypeScript, Redux, and
                    Next.js, enabling me to develop scalable and maintainable
                    front-end applications. On the back-end side, I am
                    continually expanding my skills with tools such as Mongoose,
                    DBMS, SQL, PostgreSQL, Prisma, and GraphQL to create
                    dynamic, database-driven applications.
                  </p>
                </div>
                <hr />
              </li>
              <li>
                <hr />
              </li>
            </ul>
            <div className="md:hidden flex flex-col py-10">
              <div className="timeline-start border-l-2 border-blue-400 shadow-2xl  boxShadow">
                {/* First Macintosh computer */}
                <div className="boxShadow rounded-xl bg-[#21242b] shadow-2xl text-white border-none  p-6">
                  I am a passionate Web Developer specializing in React.js with
                  over 1 year of experience in Front-End Development and
                  expertise in the MERN stack (MongoDB, Express.js, React.js,
                  Node.js). My journey in web development is fueled by a strong
                  commitment to crafting efficient, responsive, and
                  user-friendly applications.
                </div>
              </div>
              <div className="timeline-start border-l-2 border-blue-400 shadow-2xl  boxShadow">
                {/* First Macintosh computer */}
                <div className="boxShadow rounded-xl bg-[#21242b] shadow-2xl text-white border-none  p-6">
                  While my primary focus has been on front-end development,
                  building visually appealing and highly interactive user
                  interfaces, I am equally excited about diving deeper into
                  back-end development. The prospect of designing robust APIs,
                  optimizing server-side logic, and ensuring seamless
                  communication between the front and back ends truly excites
                  me.
                </div>
              </div>
              <div className="border-l-2 border-blue-400 shadow-2xl  boxShadow">
                {/* First Macintosh computer */}
                <div className="boxShadow rounded-xl bg-[#21242b] shadow-2xl text-white border-none  p-6">
                  In addition to my expertise in JavaScript and React.js, I am
                  proficient in technologies like TypeScript, Redux, and
                  Next.js, enabling me to develop scalable and maintainable
                  front-end applications. On the back-end side, I am continually
                  expanding my skills with tools such as Mongoose, DBMS, SQL,
                  PostgreSQL, Prisma, and GraphQL to create dynamic,
                  database-driven applications.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
