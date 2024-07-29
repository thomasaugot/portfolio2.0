"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import profileImage from "@/assets/img/profile.webp";
import Image from "next/image";
import TitleUnderline from "@/components/TitleUnderline";
import Skills from "@/components/Skills";

const Projects: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 992);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 my-24">
        <div className="w-full max-w-[80vw] text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="text-4xl font-bold mb-6 font-orbitron text-white"
          >
            <h1 className="my-4">Check out my work</h1>
            <TitleUnderline />
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
