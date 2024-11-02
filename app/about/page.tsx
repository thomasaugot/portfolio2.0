"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import profileImage from "@/public/assets/img/profile.webp";
import Image from "next/image";
import TitleUnderline from "@/components/TitleUnderline";
import dynamic from "next/dynamic";
import { debounce } from "lodash";
import StarsBackground from "@/components/StarsBackground";

// Lazy load components for performance
const Skills = dynamic(() => import("@/components/Skills"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), {
  ssr: false,
});
const GradientButton = dynamic(() => import("@/components/GradientButton"), {
  ssr: false,
});

const About: React.FC = () => {
  const { t } = useTranslation();
  const [x, setX] = useState(0);

  // Debounced resize handler to reduce load
  const handleResize = useCallback(
    debounce(() => {
      setX(window.innerWidth >= 992 ? 0 : 30);
    }, 200),
    []
  );

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 my-24">
        <StarsBackground />

        <div className="w-full max-w-[80vw] text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 60, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-6 font-orbitron text-white"
          >
            <h1 className="my-4">
              {t("Coding my path: a world traveler's digital journey")}
            </h1>
            <TitleUnderline />
          </motion.div>

          <div className="flex flex-col-reverse gap-12 lg:flex-row items-center lg:justify-between mt-16 lg:mt-10 w-full mx-auto">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: -50, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 30,
                duration: 0.7,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="text-white w-full md:w-[60vw]"
            >
              <p className="text-base mb-4 font-roboto">
                {t(
                  "Hi there! I am Thomas, a passionate developer hailing from Nantes, France and currently based in Las Palmas de Gran Canaria. As an ex-globetrotter, I bring a global perspective and an insatiable appetite for challenges to the world of web and mobile development."
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
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ x: 50, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 30,
                duration: 0.9,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <Image
                src={profileImage}
                alt="profile"
                className="rounded-full bg-white border-2 border-white shadow-lg object-cover mx-auto w-full md:w-[20vw]"
                placeholder="blur"
                priority
              />
            </motion.div>
          </div>
        </div>

        <Skills />
        <Experience />

        <div className="min-h-[100px] flex items-center justify-center mt-12">
          <motion.div
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
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
