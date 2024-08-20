"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import TitleUnderline from "./TitleUnderline";
import { FaHome } from "react-icons/fa";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showHomeButton, setShowHomeButton] = useState(false);
  const { t } = useTranslation();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    setActiveLink(window.location.pathname);

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  useEffect(() => {
    if (activeLink !== "/") {
      const timer = setTimeout(() => {
        setShowHomeButton(true);
      }, 2000);

      return () => clearTimeout(timer);
    } else {
      setShowHomeButton(false);
    }
  }, [activeLink]);

  const navItems = [
    { id: 1, text: t("About"), target: "/about" },
    { id: 2, text: t("Projects"), target: "/projects" },
    { id: 3, text: t("Blog"), target: "/blog" },
    { id: 4, text: t("Contact"), target: "/contact" },
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
            {showHomeButton && (
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
            <div className="flex justify-center items-center">
              <LanguageSelector />
            </div>
          </ul>
        </div>
      ) : (
        // Desktop Navigation
        <div
          className={`fixed top-0 left-0 right-0 z-50 bg-secondary-bg backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-100%]"
          } flex justify-between items-center h-[10vh] w-full text-primary`}
        >
          <div className="fixed lg:absolute z-40 lg:z-0 w-[100vw] h-[14vh] bg-clip-padding backdrop-blur-sm px-10"></div>
          <div className="hidden lg:flex justify-evenly ml-auto gap-8 mr-4">
            {showHomeButton && (
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
            <div className="flex justify-center items-center">
              <LanguageSelector />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
