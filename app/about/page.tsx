"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import profileImage from "@/assets/img/profile.webp";
import Image from "next/image";
import TitleUnderline from "@/components/TitleUnderline";
import BackToTop from "@/components/BackToTop";
import Skills from "@/components/Skills";

const About: React.FC = () => {
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
            <h1 className="my-4">From France to the world</h1>
            <TitleUnderline />
          </motion.div>
          <div className="flex flex-col-reverse gap-12 lg:flex-row items-center lg:justify-between lg:mt-10 w-full">
            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: 0.7,
                ease: "easeOut",
              }}
              className="text-white px-4 lg:px-0"
            >
              <p className="text-base mb-4 font-roboto w-full md:w-[60vw]">
                {t(
                  "Hi there! I am Thomas, a passionate developer hailing from Nantes, France. As an ex-globetrotter, I bring a global perspective and an insatiable appetite for challenges to the world of web and mobile development."
                )}
                <br />
                <br />
                {t(
                  "In today's rapidly changing digital landscape, my mission is clear: to enhance online presence and visibility for both businesses and individuals. While specializing in frontend development, my fullstack experience allows me to craft exceptional digital experiences and address any challenges that arise. By staying abreast of the latest tech trends, I ensure that my work adheres to modern design principles and the best practices in web and mobile development."
                )}
                <br />
                <br />
                {t(
                  "While my playground primarily revolves around JavaScript and its captivating frameworks, I am never confined by boundaries and always seek to expand my skillset!"
                )}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              initial={{ x: "100%", opacity: 0, rotate: 880 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 20,
                delay: 1.0,
                ease: "easeOut",
              }}
              className="mb-6 lg:mb-0"
            >
              <Image
                src={profileImage}
                alt="profile"
                className="rounded-full border-2 border-white shadow-lg object-cover mx-auto w-full md:w-[30vw]"
              />
            </motion.div>
          </div>
        </div>
        <Skills />
      </main>
      <Footer />
    </>
  );
};

export default About;
