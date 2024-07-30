"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import TitleUnderline from "@/components/TitleUnderline";
import ProjectCard from "@/components/ProjectCard";
import GradientButton from "@/components/GradientButton";
import waveRider1 from "@/assets/img/wave-rider/wr-1.png";
import waveRider2 from "@/assets/img/wave-rider/wr-2.png";
import waveRider3 from "@/assets/img/wave-rider/wr-3.png";
import waveRider4 from "@/assets/img/wave-rider/wr-4.png";
import waveRider5 from "@/assets/img/wave-rider/wr-5.png";
import waveRider6 from "@/assets/img/wave-rider/wr-6.png";
import waveRider7 from "@/assets/img/wave-rider/wr-7.png";
import waveRider8 from "@/assets/img/wave-rider/wr-8.png";
import waveRider9 from "@/assets/img/wave-rider/wr-9.png";
import waveRider10 from "@/assets/img/wave-rider/wr-10.png";
import waveRider11 from "@/assets/img/wave-rider/wr-11.png";
import cmd1 from "@/assets/img/cmdurand/cmd-1.png";
import cmd2 from "@/assets/img/cmdurand/cmd-2.png";
import cmd3 from "@/assets/img/cmdurand/cmd-3.png";
import cmd4 from "@/assets/img/cmdurand/cmd-4.png";
import cmd5 from "@/assets/img/cmdurand/cmd-5.png";
import cmd6 from "@/assets/img/cmdurand/cmd-6.png";
import cmd7 from "@/assets/img/cmdurand/cmd-7.png";
import cmd8 from "@/assets/img/cmdurand/cmd-8.png";
import cmd9 from "@/assets/img/cmdurand/cmd-9.png";
import cmd10 from "@/assets/img/cmdurand/cmd-10.png";
import farmhouse1 from "@/assets/img/farmhouse/fht-1.png";
import farmhouse2 from "@/assets/img/farmhouse/fth-2.png";
import farmhouse3 from "@/assets/img/farmhouse/fth-3.png";
import farmhouse4 from "@/assets/img/farmhouse/fth-4.png";
import farmhouse5 from "@/assets/img/farmhouse/fth-5.png";
import farmhouse6 from "@/assets/img/farmhouse/fth-6.png";
import farmhouse7 from "@/assets/img/farmhouse/fth-7.png";
import farmhouse8 from "@/assets/img/farmhouse/fth-8.png";

const projects = [
  {
    title: "Wave Rider Surf Shop",
    description:
      "A fully functional E-commerce website I built inspired by the island I call home: Fuerteventura.",
    techStack: [
      "Next.JS",
      "Typescript",
      "SCSS",
      "Redux",
      "Framer Motion",
      "EmailJS",
      "Google Maps API",
      "Stripe API",
      "Supabase",
    ],
    images: [
      waveRider1,
      waveRider2,
      waveRider3,
      waveRider4,
      waveRider5,
      waveRider6,
      waveRider7,
      waveRider8,
      waveRider9,
      waveRider10,
      waveRider11,
      waveRider1,
    ],
    githubLink: "https://github.com/thomasaugot/wave-rider-ecommerce",
    liveLink: "https://wave-riders-ecommerce.vercel.app/",
  },
  {
    title: "Charpente Menuiserie Durand",
    description:
      "A website I designed and built for a French construction company",
    techStack: ["Next.JS", "Tailwind CSS", "Framer Motion", "EmailJS"],
    images: [
      cmd1,
      cmd2,
      cmd3,
      cmd4,
      cmd5,
      cmd6,
      cmd7,
      cmd8,
      cmd9,
      cmd10,
      cmd1,
      cmd2,
    ],
    githubLink: "https://github.com/thomasaugot/charpente-menuiserie-durand",
    liveLink: "https://www.cmdurand.fr/",
  },
  {
    title: "Farmhouse Table",
    description:
      "A restaurant website integrating Google Maps API and a reservation form",
    techStack: [
      "ReactJS",
      "SCSS",
      "Typescript",
      "Bootstrap",
      "Google Maps API",
    ],
    images: [
      farmhouse1,
      farmhouse2,
      farmhouse3,
      farmhouse4,
      farmhouse5,
      farmhouse6,
      farmhouse7,
      farmhouse8,
      farmhouse1,
      farmhouse2,
      farmhouse3,
      farmhouse4,
    ],
    githubLink: "https://github.com/thomasaugot/farmhouse-table-website",
    liveLink: "https://farmhouse-table.netlify.app/",
  },
];

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
          <motion.p
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.5,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            className="text-lg font-sm mb-16 font-roboto text-white px-auto text-center px-4"
          >
            A selection of my finest personal work, each project a testament to
            my passion and skills as a developer. These are the creations where
            I had complete creative control and ownership, reflecting my unique
            vision and expertise. From concept to completion, these projects are
            truly mine, accurately representing my experience, creativity, and
            technical proficiency.
          </motion.p>
        </div>
        <div className="w-full mb-24">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <GradientButton>More projects</GradientButton>
      </main>
      <Footer />
    </>
  );
};

export default Projects;
