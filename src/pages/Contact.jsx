import React from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
const Contact = () => {
  return (
    <section className="py-[70px] max-w-[1140px] mx-auto px-4 md:px-8">
      <h2 className="text-big font-800 text-left md:text-center ">
        Get In <span className="text-first-color">Touch</span>
      </h2>

      {/* contact container */}
      <div className="grid  grid-cols-[4fr_8fr] mt-[50px] ">
        {/* contact data */}
        <div id="continer_data" className=" ">
          <h3 className="text-h3 font-600 mb-4">
            Don't be shy, drop me a message!
          </h3>
          <p className="text-small leading-[1.6] mb-5">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div id="contact-info">
            <div className="flex items-center gap-4 mb-5 font-body text-small font-500">
              <FaEnvelopeOpen className="text-h2 text-first-color" />
              <div className="flex flex-col text-[17px]">
                <span>Email me:</span>
                <h4>dev.birender@gmail.com</h4>
              </div>
            </div>

            <div className="flex items-center gap-4 mb-5 font-body text-small font-500`">
              <FaPhoneSquareAlt className="text-h2 text-first-color" />
              <div className="flex flex-col text-large">
                <span>Call me:</span>
                <h4>+91 9991239813</h4>
              </div>
            </div>

            {/* social contacts */}
            <div className="flex gap-4">
              <a
                className=" bg-container-color text-xl  text-title-color w-10 h-10 rounded-full flex items-center justify-center hover:bg-first-color hover:text-text-white transition-all duration-300 ease-in "
                href="https://www.linkedin.com/in/devbirender/"
              >
                <FaLinkedin />
              </a>
              <a
                className=" bg-container-color text-xl text-title-color w-10 h-10 rounded-full flex items-center justify-center hover:bg-first-color hover:text-text-white transition-all duration-300 ease-in "
                href="https://github.com/MrBirender"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* form data */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ml-10 w-full">
            <div className="mb-5 ">
              <input
                className="bg-container-color border border-gray-300 focus:border-first-color outline-none w-full py-2 px-4 rounded-md transition-all duration-300 ease-in"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-5">
              <input
                className="bg-container-color border border-gray-300 focus:border-first-color outline-none w-full py-2 px-4 rounded-md transition-all duration-300 ease-in"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-5">
              <input
                className="bg-container-color border border-gray-300 focus:border-first-color outline-none w-full py-2 px-4 rounded-md transition-all duration-300 ease-in"
                type="text"
                placeholder="Your Subject"
              />
            </div>
            <div className="mb-5 col-span-3">
              <textarea
                className="bg-container-color border border-gray-300 focus:border-first-color outline-none w-full py-2 px-4 rounded-md resize-none h-[160px] transition-all duration-300 ease-in"
                placeholder="Your Message"
              />
            </div>

            <Link className="group inline-flex overflow-hidden rounded-[35px] items-center font-second text-small font-500 relative gap-2 py-4 pl-9 pr-16 text-title-color border border-first-color hover:text-text-white">
              <span className="absolute inset-0 rounded-[35px] bg-first-color -z-10 transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></span>
              Send Message{" "}
              <span className="absolute flex items-center justify-center bg-first-color right-0 w-[60px] inset-y-[-1px] rounded-full text-text-white text-large leading-[60px]">
                <FiSend />
              </span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
