import { headerMenuData } from "@/src/constant";
import React, { useState } from "react";
import HeaderMenu from "./HeaderMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const redirectToPage = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header className="fixed h-[90px] w-full top-0 px-4 bg-[#110328] md:static md:px-[50px] md:bg-transparent z-50">
        <div className="flex justify-between items-center">
          <h1 className="w-[260px] h-[94px] uppercase text-5xl leading-[94px] text-center font-bold">
            icon
          </h1>
          <div className="tracking-[1.2px]">
            <div
              className="relative w-[60px] h-[85px] p-[10px] flex flex-col justify-evenly items-center md:hidden"
              onClick={handleClick}
            >
              {!isOpen ? (
                <>
                  <div className="w-full h-1 bg-[#f4f4f4] rounded-lg transition-all duration-300"></div>
                  <div className="w-[80%] h-1 bg-[#f4f4f4] rounded-lg transition-all duration-300"></div>
                  <div className="w-full h-1 bg-[#f4f4f4] rounded-lg transition-all duration-300"></div>
                </>
              ) : (
                <>
                  <div className="absolute w-[70%] h-1 bg-[#f4f4f4] rounded-lg rotate-45 transition-all duration-300"></div>
                  <div className=""></div>
                  <div className="absolute w-full h-1 bg-[#f4f4f4] rounded-lg -rotate-45 transition-all duration-300"></div>
                </>
              )}
            </div>
            <div className="hidden md:flex md:flex-row-reverse md:justify-between md:items-center gap-1 font-semibold select-none">
              {headerMenuData.map((item) => (
                <div
                  key={item.id}
                  className={`py-[11px] px-[13px] cursor-pointer hover:shadow-[0_0_0px_3px_rgb(255,255,255,0.1)] rounded-2xl ${
                    item.id === 1 &&
                    "bg-[#23d3d3] shadow-[0px_9px_33px_#1a7474]"
                  }`}
                  onClick={redirectToPage}
                >
                  {item.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>
      {isOpen && <HeaderMenu />}
    </>
  );
};

export default Navbar;
