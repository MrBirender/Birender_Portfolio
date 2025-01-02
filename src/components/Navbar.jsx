import { NavLink } from "react-router-dom";
import { links } from "../data";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav md:fixed md:top-0 md:bottom-0 md:right-7 md:flex md:flex-col md:justify-center">
      {/* Backdrop for mobile menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 ${
          showMenu ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden z-[999]`}
        onClick={() => setShowMenu(false)} // Close menu when clicking outside
      ></div>

      {/* Mobile menu */}
      <div
        className={`nav-menu fixed top-0 bottom-0 transition-all duration-500 ease-[cubic-bezier(0.77,_0.2,_0.05,_1)] ${
          showMenu ? "left-0" : "-left-[100%]"
        } bg-container-color w-full py-[60px] px-[30px] md:hidden z-[1000]`}
      >
        <button
          onClick={() => setShowMenu(false)}
          className="absolute top-[30px] right-[30px] text-2xl text-title-color cursor-pointer"
        >
          <RxCross2 />
        </button>
        <ul className="nav-list">
          {links.map(({ name, icon, path }, index) => (
            <li
              onClick={() => setShowMenu(false)}
              key={index}
              className="nav-item"
            >
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "nav_link text-first-color flex items-center gap-[24px] border-b-[1px] border-border-color py-[14px] text-[20px]"
                    : "nav_link text-title-color flex items-center gap-[24px] border-b-[1px] border-border-color py-[14px] text-[20px]"
                }
              >
                <p className="nav-icon">{icon}</p>
                <h3 className="nav-text font-500">{name}</h3>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Toggle button for mobile displays */}
      <div
        onClick={() => setShowMenu(!showMenu)}
        className="nav_toggle md:hidden flex items-center text-title-color justify-center text-2xl fixed top-[30px] right-[30px] cursor-pointer w-[40px] h-[40px] rounded-lg bg-container-color z-[1001]"
      >
        {showMenu ? <RxCross2 /> : <RxHamburgerMenu />}
      </div>

      {/* Desktop navigation */}
      <div className="hidden md:block flex-col items-center">
        {links.map(({ name, icon, path }, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              isActive
                ? "text-first-color bg-container-color flex items-center gap-4 my-4 text-[24px] w-[50px] h-[50px] rounded-full relative hover:bg-first-color  hover:text-text-white group"
                : "bg-container-color flex items-center gap-4 my-4 text-[24px] w-[50px] h-[50px] rounded-full relative hover:bg-first-color  hover:text-text-white group"
            }
          >
            <p className="nav-icon mx-auto">{icon}</p>
            <h3 className="nav-text group-hover:-z-10 flex items-center justify-center font-500 absolute top-0 right-0 bg-first-color h-full leading-10 text-small rounded-[30px] pl-[30px] pr-[25px] text-text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:transition-all group-hover:duration-500 group-hover:ease-in-out group-hover:right-[27px] group-hover:rounded-[30px_0_0_30px]">
              {name}
            </h3>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
