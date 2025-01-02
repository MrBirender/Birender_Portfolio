import React from "react";
import { FaDownload } from "react-icons/fa6";
import CV from "../assets/steve-Cv.pdf";
import Info from "../components/Info";
import Stats from "../components/Stats";
import Skill from "../components/Skill";

const About = () => {
  return (
    <main className="py-[70px] max-w-[1140px] mx-auto px-8  ">
      {/* presonal info */}
      <section >
        {/* about me */}
        <h2 className="text-big font-800 text-center ">About <span className="text-first-color">Me</span></h2>
        <div className="about_container grid gap-[30px]  grid-cols-1 md:grid-cols-2 mt-[50px]">
          <div>
            <h3 className="text-h3 font-600 ">Personal Infos</h3>
            <ul className="grid gap-[10px] grid-cols-1 md:grid-cols-2 mt-5">
              <Info />
            </ul>
            <a
              href={CV}
              className="group mt-8 inline-flex overflow-hidden rounded-[35px] items-center font-second text-small font-500 relative gap-2 py-4 pl-9 pr-16 text-title-color border border-first-color hover:text-text-white"
            >
              <span className="absolute inset-0 rounded-[35px] bg-first-color -z-10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              Download CV{" "}
              <span className="absolute flex items-center justify-center bg-first-color right-0 w-[60px] inset-y-[-1px] rounded-full text-text-white text-large leading-[60px]">
                <FaDownload />
              </span>
            </a>
          </div>

          {/* stats */}
          <div className="grid gap-[30px] grid-cols-2 border border-border-color pt-5 rounded-lg px-7 pb-6">
            <Stats />
          </div>
        </div>
      </section>

       {/* seperator */}
       <div className="h-[1px] border border-t-2 bg-border-color max-w-[40%] mx-auto mt-[72px] mb-[56px]"></div>

       {/* skills */}
        <section>
          <h3 className="text-h3 font-600 ">My Skills</h3>
          <div className="grid grid-cols-2 gap-[30px] md:grid-cols-4 mt-5 ">
            <Skill/>
          </div>
        </section>
    </main>
  );
};

export default About;
