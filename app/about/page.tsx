"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import profileImage from "@/public/assets/img/profile.webp";
import Image from "next/image";
import TitleUnderline from "@/components/TitleUnderline";
import dynamic from "next/dynamic";
import { useDebounce } from "use-debounce";
import StarsBackground from "@/components/StarsBackground";
import { debounce } from "lodash";

const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const GradientButton = dynamic(() => import("@/components/GradientButton"), {
  ssr: false,
});

const About: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const { t, i18n } = useTranslation();
  const [x, setX] = useState(0);
  const [debounceX] = useDebounce(x, 150);

  const handleResize = useCallback(
    debounce(() => {
      setIsDesktop(window.innerWidth >= 992);
    }, 200),
    []
  );

  useEffect(() => {
    handleResize(); // Initial call on mount

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize, i18n.language]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 my-24">
        <StarsBackground />

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
            <h1 className="my-4">
              {t("Coding my path: a world traveler's digital journey")}
            </h1>
            <TitleUnderline />
          </motion.div>

          <div className="flex flex-col-reverse gap-12 lg:flex-row items-center lg:justify-between lg:mt-10 w-full">
            <motion.div
              whileInView={{ y: 0, opacity: 1 }}
              initial={{ y: 100, opacity: 0 }}
              viewport={{ once: true }}
              animate={{ x: debounceX }}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: 0.6,
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
              viewport={{ once: true }}
              style={{ transformStyle: "preserve-3d" }}
              initial={{ rotateY: 180 }}
              animate={{ rotateY: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="mb-6 lg:mb-0"
            >
              <Image
                src={profileImage}
                alt="profile"
                className="rounded-full border-2 border-white shadow-lg object-cover mx-auto w-full md:w-[30vw]"
                placeholder="blur"
                priority
              />
            </motion.div>
          </div>
        </div>
        <br />
        <br />
        <Skills />
        <br />
        <br />
        <Experience />
        <br />
        <br />
        <div className="min-h-[100px] flex items-center justify-center mt-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <GradientButton href="/projects">
              {t("Explore my work")}
            </GradientButton>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default About;
