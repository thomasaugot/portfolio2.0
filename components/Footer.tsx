"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import { IoHeart } from "react-icons/io5";
import BackToTop from "./BackToTop";

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const { t } = useTranslation();

  return (
    <div
      ref={ref}
      className="relative flex flex-col items-center text-center py-8 bg-primary-bg mb-4"
    >
      <BackToTop />
      <p className="text-white mb-4 flex items-center justify-center">
        {t("Crafted with")}
        <span className="ml-2 animate-pulse">
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient
                id="heartGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#6D28D9" />
                <stop offset="100%" stopColor="#14B8A6" />
              </linearGradient>
            </defs>
            <IoHeart className="w-full h-full" fill="url(#heartGradient)" />
          </svg>
        </span>
        {t("by")}
        <a
          href="https://www.linkedin.com/in/thomas-augot/"
          className="ml-1 hover:text-transparent hover:bg-clip-text hover:bg-gradient"
        >
          {" "}
          Thomas Augot
        </a>
      </p>
    </div>
  );
};

export default Footer;
