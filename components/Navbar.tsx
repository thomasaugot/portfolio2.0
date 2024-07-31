"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import TitleUnderline from "./TitleUnderline";
import { FaHome } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    // Set the active link based on the current path
    setActiveLink(window.location.pathname);

    // Handle scroll event
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // For Mobile or negative scrolling
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  const navItems = [
    { id: 1, text: "About", target: "/about" },
    { id: 2, text: "Projects", target: "/projects" },
    { id: 3, text: "Blog", target: "/blog" },
    { id: 4, text: "Contact", target: "/contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 bg-secondary-bg/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-[-100%]"
      } flex justify-between items-center h-[10vh] w-full text-primary`}
    >
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
            {activeLink !== "/" && (
              <div className="hidden lg:flex items-center mr-8 z-10">
                <Link href="/" onClick={() => setActiveLink("/")}>
                  <FaHome className="text-white text-2xl cursor-pointer hover:text-gray-300" />
                </Link>
              </div>
            )}
            {navItems.map((item) => (
              <li
                key={item.id}
                className="font-orbitron z-50 tracking-wider p-4 md:p-6 rounded-xl font-medium text-white text-3xl md:text-4xl text-center cursor-pointer"
                onClick={() => {
                  setActiveLink(item.target);
                  setIsOpen(false);
                  window.location.href = item.target;
                }}
              >
                {item.text}
                {activeLink === item.target && <TitleUnderline />}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Desktop Navigation
        <div className="hidden lg:flex justify-evenly ml-auto gap-8 mr-4">
          {activeLink !== "/" && (
            <div className="hidden lg:flex items-center mr-8 z-10">
              <Link href="/" onClick={() => setActiveLink("/")}>
                <FaHome className="text-white text-2xl cursor-pointer hover:text-gray-300" />
              </Link>
            </div>
          )}
          {navItems.map((item) => (
            <div key={item.id} className="relative">
              <Link
                href={item.target}
                className={`py-1 text-white font-regular cursor-pointer hover:scale-110 relative m-1 text-lg tracking-wide font-regular font-orbitron`}
                onClick={() => setActiveLink(item.target)}
              >
                {item.text}
              </Link>
              {activeLink === item.target && (
                <div className="absolute w-full left-0 -bottom-4">
                  <TitleUnderline />
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
