"use client";

import React, { useState, useEffect } from "react";
import { FaChevronUp } from "react-icons/fa";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 flex items-center justify-center w-12 h-12 text-white bg-gray-900 rounded-full shadow-lg transition-all duration-300 group"
          aria-label="Scroll to top"
        >
          <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-button rounded-full blur-md group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
          <FaChevronUp className="relative z-10 w-6 h-6" />
        </button>
      )}
    </>
  );
};

export default BackToTop;
