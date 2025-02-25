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
  const [showFinalGlow, setShowFinalGlow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
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

  // Handle the sequence of animations with faster timing
  useEffect(() => {
    let laserTimeout: NodeJS.Timeout | undefined;
    let glowTimeout: NodeJS.Timeout | undefined;
    let menuTimeout: NodeJS.Timeout | undefined;

    if (isOpen) {
      setShowFinalGlow(false);
      setShowMenu(false);
      
      // After laser animation completes, show the final glow (faster timing)
      laserTimeout = setTimeout(() => {
        setShowFinalGlow(true);
      }, 600); // reduced from 1000ms
      
      // After glow animation completes, show the menu (faster timing)
      glowTimeout = setTimeout(() => {
        setShowMenu(true);
      }, 1000); // reduced from 1600ms
    } else {
      setShowFinalGlow(false);
      setShowMenu(false);
    }

    return () => {
      clearTimeout(laserTimeout);
      clearTimeout(glowTimeout);
      clearTimeout(menuTimeout);
    };
  }, [isOpen]);

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
      className="z-50 relative"
      style={{
        // Apply pointer-events: none only when mobile and menu is closed
        pointerEvents: isMobile && !isOpen ? "none" : "auto",
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
                className="object-left z-40"
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
                className="object-right z-40"
                priority
              />
              <div className="absolute inset-y-0 left-0 w-px" />
            </motion.div>
            
            {/* Top Laser Effect - FASTER ANIMATION */}
            <AnimatePresence>
              {isOpen && !showFinalGlow && (
                <motion.div
                  className="fixed top-1/2 bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-500 z-[960] pointer-events-none"
                  initial={{ 
                    height: "0%", 
                    top: "50%", 
                    bottom: "50%" 
                  }}
                  animate={{ 
                    height: "50%",
                    top: "0%",
                    bottom: "50%",
                    opacity: 1,
                    boxShadow: "0 0 8px rgba(59, 130, 246, 0.9), 0 0 16px rgba(59, 130, 246, 0.5)"
                  }}
                  exit={{ 
                    height: "0%",
                    top: "50%",
                    bottom: "50%",
                    opacity: 0,
                    boxShadow: "none",
                    transition: { duration: 0.2 }
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2 
                  }}
                />
              )}
            </AnimatePresence>
            
            {/* Bottom Laser Effect */}
            <AnimatePresence>
              {isOpen && !showFinalGlow && (
                <motion.div
                  className="fixed top-0 bottom-1/2 left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-500 z-[960] pointer-events-none"
                  initial={{ 
                    height: "0%", 
                    top: "50%", 
                    bottom: "50%" 
                  }}
                  animate={{ 
                    height: "50%",
                    top: "50%",
                    bottom: "0%",
                    opacity: 1,
                    boxShadow: "0 0 8px rgba(59, 130, 246, 0.9), 0 0 16px rgba(59, 130, 246, 0.5)"
                  }}
                  exit={{ 
                    height: "0%",
                    top: "50%",
                    bottom: "50%",
                    opacity: 0,
                    boxShadow: "none",
                    transition: { duration: 0.2 }
                  }}
                  transition={{ 
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.2 
                  }}
                />
              )}
            </AnimatePresence>
            
            {/* Final Glow Effect */}
            <AnimatePresence>
              {showFinalGlow && (
                <motion.div
                  className="fixed inset-0 z-[960] pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.8, 0],
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    times: [0, 0.4, 1],
                    ease: "easeOut"
                  }}
                >
                  <div className="absolute inset-0 bg-blue-500 opacity-5"></div>
                  <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 bg-blue-500"
                       style={{ boxShadow: "0 0 20px rgba(59, 130, 246, 0.9), 0 0 40px rgba(59, 130, 246, 0.7), 0 0 60px rgba(59, 130, 246, 0.5)" }}></div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Center flash effect  */}
            <AnimatePresence>
              {isOpen && !showFinalGlow && (
                <motion.div
                  className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-400 backdrop-blur-lg z-[961] pointer-events-none"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 10, 5, 2, 0],
                    opacity: [0, 1, 0.8, 0.4, 0],
                    boxShadow: [
                      "none", 
                      "0 0 20px rgba(59, 130, 246, 1), 0 0 40px rgba(59, 130, 246, 0.8)", 
                      "0 0 15px rgba(59, 130, 246, 0.7), 0 0 30px rgba(59, 130, 246, 0.5)", 
                      "0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)",
                      "none"
                    ]
                  }}
                  exit={{ 
                    scale: 0,
                    opacity: 0
                  }}
                  transition={{ 
                    duration: 0.4, // Reduced from 0.7
                    times: [0, 0.2, 0.4, 0.7, 1],
                    ease: "easeOut"
                  }}
                />
              )}
            </AnimatePresence>

            {/* Navigation Menu - shows after final glow */}
            <AnimatePresence mode="wait">
              {showMenu && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
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