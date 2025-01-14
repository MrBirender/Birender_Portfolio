import React from "react";
import Profile1 from "../assets/Home_img.png";
import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Profile2 from "../assets/bg-removed.jpg";

const Home = () => {
  return (
    <section className="grid grid-cols-1 gap-[30px] md:grid-cols-[4.32fr_7.68fr] items-center p-[16px] md:p-[40px] md:min-h-screen mt-16 md:mt-0 md:py-[20px] overflow-hidden">
      {/* Profile Image */}
      <img
        className="w-[60%] md:h-[90%] md:w-[90%] object-cover rounded-full md:rounded-[30px] shadow-[0_0_8px_rgba(0,_0,_0,_0.3)]"
        src={Profile1}
        alt="profile_image"
      />

      {/* Home Page Text Content */}
      <div className="mx-auto w-full text-center md:text-left md:max-w-[600px] -mt-2">
        <h1 className="text-h2 md:text-h1 md:pl-[70px] md:leading-[1.24] relative">
          <span className="hidden md:inline-block absolute left-0 top-[22%] w-[40px] h-[5px] rounded-[10px] bg-first-color"></span>
          <span className="text-first-color "> I'm Birender.</span>
          <br />
         <p className="-mt-2"> Web Developer</p>
        </h1>
        <p className="md:leading-[2.125] mt-4 mb-8 text-justify max-w-[300px] md:max-w-none mx-auto md:mx-0">
          I'm a Bangalore based MERN stack developer, passionate about creating
          dynamic and user-friendly web applications. Let's bring your ideas to
          life with smooth design and robust functionality.
        </p>

        <Link
          to="/about"
          className="group inline-flex overflow-hidden rounded-[35px] items-center font-second text-small font-500 relative gap-2 py-4 pl-9 pr-16 text-title-color border border-first-color hover:text-text-white"
        >
          <span className="absolute inset-0 rounded-[35px] bg-first-color -z-10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
          More About Me{" "}
          <span className="absolute flex items-center justify-center bg-first-color right-0 w-[60px] inset-y-[-1px] rounded-full text-text-white text-large leading-[60px]">
            <FaArrowRight />
          </span>
        </Link>
      </div>

      {/* Color Bar Behind the Image */}
      <div className="hidden md:flex fixed bg-first-color h-[200%] w-[100%] -top-[50%] -left-[83%] -rotate-[15deg] -z-10"></div>
    </section>
  );
};

export default Home;
