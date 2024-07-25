"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navItems = [
    { id: 1, text: "About", target: "about" },
    { id: 2, text: "Projects", target: "projects" },
    { id: 3, text: "Blog", target: "blog" },
    { id: 4, text: "Contact", target: "contact" },
  ];

  return (
    <div>
      {isMobile ? (
        // Mobile Navigation
        <div>
          {/* Mobile Navigation Icon */}
          <div
            onClick={handleClick}
            className="fixed flex flex-col justify-center items-center z-50 mr-2 top-10 right-4 lg:hidden"
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out h-1 w-10 md:w-12 lg:10 rounded-sm ${
                isOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-1 w-10 md:w-12 lg:10 rounded-sm my-1 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-1 w-10 md:w-12 lg:10 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-2" : "translate-y-1"
              }`}
            ></span>
          </div>
          {/* Mobile Navigation Menu */}
          <ul
            className={
              isOpen
                ? "fixed z-40 lg:hidden left-0 top-0 w-[100%] h-full brick-bg ease-in-out duration-500"
                : "mt-24 z-40 ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
            }
          >
            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <li
                key={item.id}
                style={{ userSelect: "none" }}
                className={`tracking-wider p-4 md:p-6 rounded-xl ml-6 font-medium duration-300 text-white cursor-pointer text-3xl md:text-4xl`}
              >
                <Link href={item.target} onClick={handleClick}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Desktop Navigation
        <div
          className={`z-50 bg-transparent flex justify-between items-center h-[12vh] w-[100vw]  text-primary ${
            isMobile ? "relative" : "fixed"
          } top-9 2xl:top-6 lg:h-[20vh]`}
        >
          {/* Logo */}
          <div className="hidden lg:flex justify-evenly ml-8 gap-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.target}
                className={`py-1 text-white font-regular relative m-1 cursor-pointer hover:scale-110 text-lg tracking-wide font-semibold`}
              >
                {item.text}
                <span
                  className={`absolute inset-x-0 inset-y-8 h-1 bg-primary transition-all duration-300 ease-in-out ${
                    activeLink === item.target ? "w-full" : "w-0"
                  }`}
                ></span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
