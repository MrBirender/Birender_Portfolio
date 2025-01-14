import React, { useEffect, useState } from "react";
import ThemeItem from "./ThemeItem";
import { themes } from "../data";
import { FaCog } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";



const getStorageColor = ()=> {
  let color = "	hsl(4, 93%, 54%)"
  if(localStorage.getItem("color")){
    color = localStorage.getItem("color") 
  } 
  return color  
}

const getStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
}
const Theme = () => {
  const [showSwitcher, setShowSwither] = useState(false);
  const [color, setColor] = useState(getStorageColor());
  const [theme, setTheme] = useState(getStorageTheme());

  const changeColor = (newColor) => {
    setColor(newColor);
    
  };

  const changeTheme = (newTheme) => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
    }else{
      setTheme('light-theme')
    }
  };

  useEffect(() => {
    // Update the CSS variable whenever `color` changes
    document.documentElement.style.setProperty("--first-color", color);
    localStorage.setItem("color", color);
  }, [color]); 

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div
        className={`fixed top-[10%] left-0 bg-text-white z-10 w-[220px] p-4 rounded-[0_5px_5px_0] shadow-[0_0_4px_hsl(0,0%,80%)] ${
          showSwitcher
            ? "transform translate-x-0"
            : "transform -translate-x-full"
        } transition-all duration-300 ease-in`}
        id="styleSwither"
      >
        <div
          onClick={() => setShowSwither(!showSwitcher)}
          className={`rounded-[0_5px_5px_0] text-[hsl(0_0%_40%)] top-[10%] absolute ${
            showSwitcher ? "left-[-100%]" : "left-[100%]"
          } bg-text-white h-[50px] w-[50px] text-large cursor-pointer grid place-items-center shadow-[0_0_2px_hsl(0_0%_60%)]`}
          id="styleSwitherToggler"
        >
          <FaCog />
        </div>
        <div
        onClick={changeTheme}
          className={`rounded-[0_5px_5px_0] text-[hsl(0_0%_40%)] bottom-[10%]  absolute ${
            showSwitcher ? "left-[-100%]" : "left-[100%]"
          } bg-text-white h-[50px] w-[50px] text-large cursor-pointer grid place-items-center shadow-[0_0_2px_hsl(0_0%_60%)]`}
          id="themeToggler"
        >
          {theme === "light-theme" ? <BsMoon /> : <BsSun />}
        </div>
        <h2
          className="text-title-color text-[16px] font-bold  border-b border-[hsl(0_0%_80%)] mb-4 pb-1 tracking-wider"
          id="styleSwitherTitle"
        >
          Style Switcher
        </h2>
        <div
          className="grid grid-cols-[1fr_1fr_1fr_1fr_1fr] gap-x-2 gap-y-1 "
          id="styleSwitherContent"
        >
          {themes.map((theme, index) => {
            return (
              <ThemeItem key={index} {...theme} changeColor={changeColor} />
            );
          })}
        </div>
        <div
          onClick={() => setShowSwither(!showSwitcher)}
          className="text-[hsl(0_0%_40%)] absolute top-[2%] right-[15px] text-h2 cursor-pointer"
          id="styleSwitherClose"
        >
          &times;
        </div>
      </div>
    </div>
  );
};

export default Theme;
