import React, { useState } from "react";
import Close from "../assets/close.svg";
const PortfolioItems = ({ img, title, details }) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div
      id="portfolio item"
      className="relative rounded-[10px] cursor-pointer overflow-hidden"
    >
      <img className="h-[250px] w-full object-cover " src={img} alt="img" />

      {/* portfolio hover */}
      <div
        className="group bg-first-color absolute inset-0 grid items-center justify-center opacity-0 hover:transition-all hover:duration-500 hover:opacity-100 hover:ease-in-out"
        id="portfolio hover"
        onClick={toggleModal}
      >
        <h3 className=" text-white text-large font-500 transform -translate-y-20 transition-all duration-700 ease-in-out group-hover:translate-y-0">
          {title}
        </h3>
      </div>

      {/* portfolio model */}

      {modal && (
        <div id="modal" className="fixed inset-0 bg-[hsla(0,0%,0%,0.7)]  z-50 grid items-center justify-center px-4 py-4">
          <div id="modalcontent" className="bg-container-color max-w-[650px] w-full px-10 py-10nnnp rounded-[10px] relative">
            <img
            onClick={toggleModal}
              className="w-[50px] height-[50px] absolute -top-[3.5%] invert-[0.8] -right-[8.5%] cursor-pointer text-white"
              src={Close}
              alt="modal-close"
            />
            <h3 className="text-first-color text-h3 font-600 text-center mb-6 tracking-[2px]">{title}</h3>

            {/* modal list grid */}
            <ul className="grid gap-[20px]  md:grid-cols-2 mb-8">
              {details.map(({ icon, title, desc }, index) => {
                return (
                  <li id="modal item" className="flex items-center gap-4" key={index}>
                    <span>{icon}</span>
                    <div>
                      <span className="text-title-color text-small ">{title}</span>
                      <span className="text-title-color text-small font-600">{desc}</span>
                    </div>
                  </li>
                );
              })}
            </ul>

            <img src={img} className="w-full h-[350px] object-cover" alt="modal img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItems;
