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
          <div
            onClick={handleClick}
            className="fixed flex flex-col justify-center items-center z-50 mr-2 top-10 right-4 lg:hidden"
          >
            <span
              className={`bg-white block transition-all duration-300 ease-out h-1 w-10 md:w-12 rounded-sm ${
                isOpen ? "rotate-45 translate-y-2" : "-translate-y-1"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-1 w-10 md:w-12 rounded-sm my-1 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`bg-white block transition-all duration-300 ease-out h-1 w-10 md:w-12 rounded-sm ${
                isOpen ? "-rotate-45 -translate-y-2" : "translate-y-1"
              }`}
            ></span>
          </div>
          <ul
            className={`fixed z-40 lg:hidden left-0 top-0 w-full h-full bg-secondary-bg flex flex-col items-center justify-center transition-transform duration-500 ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {navItems.map((item) => (
              <li
                key={item.id}
                className="font-orbitron z-50 tracking-wider p-4 md:p-6 rounded-xl font-medium text-white text-3xl md:text-4xl text-center cursor-pointer"
                onClick={() => {
                  setActiveLink(item.target);
                  handleClick();
                }}
              >
                <Link href={item.target}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Desktop Navigation
        <div
          className={`z-50 bg-secondary-bg/50 flex justify-between items-center h-[10vh] w-full text-primary ${
            isMobile ? "relative" : "fixed"
          } top-6 2xl:top-4`}
        >
          <div className="fixed lg:absolute z-40 lg:z-0 w-[100vw] h-[14vh] bg-clip-padding backdrop-blur-sm px-10"></div>
          {/* Logo */}
          <div className="hidden lg:flex justify-evenly ml-auto gap-8 mr-24">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.target}
                className={`py-1 text-white font-regular relative m-1 cursor-pointer hover:scale-110 text-lg tracking-wide font-regular font-orbitron`}
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
