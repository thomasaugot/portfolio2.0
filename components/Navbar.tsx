"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import TitleUnderline from "./TitleUnderline";
import { IoEarthOutline } from "react-icons/io5";
import LanguageSelector from "./LanguageSelector";
import { useTranslation } from "react-i18next";
import ShootingStars from "./ShootingStars";
import StarsBackground from "./StarsBackground";
import { MdOutlineRocketLaunch } from "react-icons/md";
import Logo from "./Logo";
import spaceshipDoor from "@/public/assets/img/spaceship-bg.jpg";
import doorRight from "@/public/assets/img/door-right.jpg";
import doorLeft from "@/public/assets/img/door-left.jpg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [showHomeButton, setShowHomeButton] = useState(false);
  const { t } = useTranslation();

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

  const handleNavigation = (target: string) => {
    setActiveLink(target);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div
      className="z-[999] relative"
      style={{
        // Ensure this doesn't block touch events
        pointerEvents: isOpen ? "auto" : "none",
      }}
    >
      {isMobile ? (
        <>
          {/* Mobile Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed z-[1000] flex flex-col justify-center gap-1 items-center mr-4 top-4 right-4 w-12 h-14"
            whileTap={{ scale: 0.9 }}
            style={{ pointerEvents: "auto" }}
          >
            <motion.span
              className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full"
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -12 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="absolute top-1/2 left-0 w-full h-0.5 bg-white rounded-full"
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 12 }}
              transition={{ duration: 0.2 }}
            />
          </motion.button>

          {/* Black Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 bg-black z-[900]"
            // Ensure this doesn't interfere with other interactions
            style={{
              pointerEvents: isOpen ? "auto" : "none",
              display: isOpen ? "block" : "none",
            }}
          />

          {/* Door Effects */}
          <div
            className="fixed inset-0 z-[950] pointer-events-none"
            style={{
              // Explicitly allow pointer events when open
              pointerEvents: isOpen ? "auto" : "none",
            }}
          >
            {/* Left Door */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: isOpen ? "0%" : "-100%" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 left-0 w-1/2 h-full pointer-events-auto overflow-hidden"
            >
              <div className="absolute inset-0 z-50 bg-black/60"></div>
              <Image
                src={doorLeft}
                alt="Door texture"
                fill
                className="object-cover z-40"
                priority
              />
              <div className="absolute inset-y-0 right-0 w-px " />
            </motion.div>

            {/* Right Door */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: isOpen ? "0%" : "100%" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
              className="fixed top-0 right-0 w-1/2 h-full pointer-events-auto overflow-hidden"
            >
              <div className="absolute inset-0 z-50 bg-black/60"></div>
              <Image
                src={doorRight}
                alt="Door texture"
                fill
                className="object-cover z-40"
                priority
              />
              <div className="absolute inset-y-0 left-0 w-px" />
            </motion.div>

            {/* Navigation Menu */}
            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 z-[1000] flex items-center justify-center pointer-events-auto"
                >
                  <nav className="flex flex-col items-center space-y-8">
                    {showHomeButton && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0, transition: { duration: 0.2 } }}
                        className="relative text-white mb-4"
                      >
                        <Link href="/" onClick={() => handleNavigation("/")}>
                          <IoEarthOutline className="text-5xl" />
                          <MdOutlineRocketLaunch className="absolute text-2xl -bottom-3 right-10" />
                        </Link>
                      </motion.div>
                    )}

                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                          opacity: 0,
                          y: -20,
                          transition: { duration: 0.2 },
                        }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                        className="w-full text-center"
                      >
                        <Link
                          href={item.target}
                          className="font-orbitron tracking-wider p-4 text-white text-3xl md:text-4xl hover:text-blue-400 transition-colors inline-block relative"
                          onClick={() => handleNavigation(item.target)}
                        >
                          {item.text}
                          {activeLink === item.target && (
                            <div className="absolute w-full left-0 -bottom-2">
                              <TitleUnderline />
                            </div>
                          )}
                        </Link>
                      </motion.div>
                    ))}

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{
                        opacity: 0,
                        y: -20,
                        transition: { duration: 0.2 },
                      }}
                      transition={{ delay: 0.5 }}
                      className="pt-4"
                    >
                      <LanguageSelector />
                    </motion.div>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Stars Effects */}
          <ShootingStars />
          <StarsBackground />
        </>
      ) : (
        // Desktop Navigation
        <div
          className={`relative top-0 left-0 right-0 z-50 bg-secondary-bg backdrop-blur-sm transition-all duration-300 ease-in-out ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-100%]"
          } flex justify-between items-center h-[10vh] w-full text-primary`}
        >
          <div className="ml-4 z-50">
            <Logo />
          </div>
          <div className="fixed lg:absolute z-40 lg:z-0 w-[100vw] h-[14vh] bg-clip-padding backdrop-blur-sm px-10"></div>
          <div className="hidden lg:flex justify-evenly ml-auto gap-8 mr-4">
            {showHomeButton && (
              <div className="hidden lg:flex items-center z-10 relative text-white cursor-pointer hover:text-gray-300">
                <Link href="/" onClick={() => setActiveLink("/")}>
                  <IoEarthOutline className="text-3xl" />
                  <MdOutlineRocketLaunch className="absolute text-lg -bottom-1 right-[29px]" />
                </Link>
              </div>
            )}
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                <Link
                  href={item.target}
                  className="py-1 text-white font-regular cursor-pointer hover:scale-110 relative m-1 text-lg tracking-wide font-regular font-orbitron"
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
