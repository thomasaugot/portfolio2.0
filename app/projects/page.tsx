"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import TitleUnderline from "@/components/TitleUnderline";
import ProjectCard from "@/components/ProjectCard";
import GradientButton from "@/components/GradientButton";
import waveRider1 from "@/assets/img/wave-rider/wr-1.webp";
import waveRider2 from "@/assets/img/wave-rider/wr-2.webp";
import waveRider3 from "@/assets/img/wave-rider/wr-3.webp";
import waveRider4 from "@/assets/img/wave-rider/wr-4.webp";
import waveRider5 from "@/assets/img/wave-rider/wr-5.webp";
import waveRider6 from "@/assets/img/wave-rider/wr-6.webp";
import waveRider7 from "@/assets/img/wave-rider/wr-7.webp";
import waveRider8 from "@/assets/img/wave-rider/wr-8.webp";
import waveRider9 from "@/assets/img/wave-rider/wr-9.webp";
import waveRider10 from "@/assets/img/wave-rider/wr-10.webp";
import waveRider11 from "@/assets/img/wave-rider/wr-11.webp";
import cmd1 from "@/assets/img/cmdurand/cmd-1.webp";
import cmd2 from "@/assets/img/cmdurand/cmd-2.webp";
import cmd3 from "@/assets/img/cmdurand/cmd-3.webp";
import cmd4 from "@/assets/img/cmdurand/cmd-4.webp";
import cmd5 from "@/assets/img/cmdurand/cmd-5.webp";
import cmd6 from "@/assets/img/cmdurand/cmd-6.webp";
import cmd7 from "@/assets/img/cmdurand/cmd-7.webp";
import cmd8 from "@/assets/img/cmdurand/cmd-8.webp";
import cmd9 from "@/assets/img/cmdurand/cmd-9.webp";
import cmd10 from "@/assets/img/cmdurand/cmd-10.webp";
import farmhouse1 from "@/assets/img/farmhouse/fht-1.webp";
import farmhouse2 from "@/assets/img/farmhouse/fth-2.webp";
import farmhouse3 from "@/assets/img/farmhouse/fth-3.webp";
import farmhouse4 from "@/assets/img/farmhouse/fth-4.webp";
import farmhouse5 from "@/assets/img/farmhouse/fth-5.webp";
import farmhouse6 from "@/assets/img/farmhouse/fth-6.webp";
import farmhouse7 from "@/assets/img/farmhouse/fth-7.webp";
import farmhouse8 from "@/assets/img/farmhouse/fth-8.webp";
import kingpad1 from "@/assets/img/kingpad/kp-1.webp";
import kingpad2 from "@/assets/img/kingpad/kp-2.webp";
import kingpad3 from "@/assets/img/kingpad/kp-3.webp";
import kingpad4 from "@/assets/img/kingpad/kp-4.webp";
import kingpad5 from "@/assets/img/kingpad/kp-5.webp";
import kingpad6 from "@/assets/img/kingpad/kp-6.webp";
import attorneyster1 from "@/assets/img/attorneyster/at-1.webp";
import attorneyster2 from "@/assets/img/attorneyster/at-2.webp";
import attorneyster3 from "@/assets/img/attorneyster/at-3.webp";
import attorneyster4 from "@/assets/img/attorneyster/at-4.webp";
import attorneyster5 from "@/assets/img/attorneyster/at-5.webp";
import attorneyster6 from "@/assets/img/attorneyster/at-6.webp";
import attorneyster7 from "@/assets/img/attorneyster/at-7.webp";
import attorneyster8 from "@/assets/img/attorneyster/at-8.webp";
import attorneyster9 from "@/assets/img/attorneyster/at-9.webp";
import todayzzz1 from "@/assets/img/todayzztodos/tt-1.webp";
import todayzzz2 from "@/assets/img/todayzztodos/tt-2.webp";
import todayzzz3 from "@/assets/img/todayzztodos/tt-3.webp";
import todayzzz4 from "@/assets/img/todayzztodos/tt-4.webp";
import pickleRickGame1 from "@/assets/img/rick&morty-game/pr-1.webp";
import pickleRickGame2 from "@/assets/img/rick&morty-game/pr-2.webp";
import pickleRickGame3 from "@/assets/img/rick&morty-game/pr-3.webp";

const projects = [
  {
    title: "Wave Rider Surf Shop",
    description:
      "A fully functional E-commerce website I built inspired by the island I call home: Fuerteventura. All your watersports gear in one place.",
    techStack: [
      "Next.JS",
      "Typescript",
      "SCSS",
      "Redux",
      "Framer Motion",
      "Email.JS",
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
    ],
    githubLink: "https://github.com/thomasaugot/wave-rider-ecommerce",
    liveLink: "https://wave-riders-ecommerce.vercel.app/",
  },
  {
    title: "Charpente Menuiserie Durand",
    description:
      "A website I designed and built for a French construction company, integrating a contact form.",
    techStack: ["Next.JS", "Tailwind CSS", "Framer Motion", "Email.JS"],
    images: [cmd1, cmd2, cmd3, cmd4, cmd5, cmd6, cmd7, cmd8, cmd9, cmd10],
    githubLink: "https://github.com/thomasaugot/charpente-menuiserie-durand",
    liveLink: "https://www.cmdurand.fr/",
  },
  {
    title: "Farmhouse Table",
    description:
      "A restaurant website integrating Google Maps API and a reservation form",
    techStack: [
      "React.JS",
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
    ],
    githubLink: "https://github.com/thomasaugot/farmhouse-table-website",
    liveLink: "https://farmhouse-table.netlify.app/",
  },
  {
    title: "Kingpad",
    description:
      "A fully responsive landing page I coded for Kingworld Finance, collaborating with a team of designers & developers, pixel-perfectly duplicating a Figma design.",
    techStack: [
      "Next.JS",
      "Tailwind CSS",
      "Typescript",
      "Material UI",
      "Figma",
    ],
    images: [kingpad1, kingpad2, kingpad3, kingpad4, kingpad5, kingpad6],
    githubLink: "https://github.com/thomasaugot/kp-next.js",
    liveLink: "https://kp-next-js.vercel.app/",
  },
  {
    title: "Attorneyster",
    description:
      "A legal services website's homepage from a frontend challenge I built to practice Next.js and Tailwind CSS.",
    techStack: [
      "Next.JS",
      "Tailwind CSS",
      "Framer motion",
      "Email.JS",
      "Figma",
    ],
    images: [
      attorneyster1,
      attorneyster2,
      attorneyster3,
      attorneyster4,
      attorneyster5,
      attorneyster6,
      attorneyster7,
      attorneyster8,
      attorneyster9,
    ],
    githubLink: "https://github.com/thomasaugot/attorneyster-nextjs",
    liveLink: "https://attorneyster-ta.vercel.app/",
  },
  {
    title: "Todayzzz Todos",
    description:
      "A drag & drop todo app to organize your daily tasks I built to practice PostgrSQL, Typescript, SCSS and Jest. It features a dark/light mode.",
    techStack: [
      "React.JS",
      "SCSS",
      "Typescript",
      "Jest",
      "PostgreSQL",
      "Context API",
    ],
    images: [todayzzz1, todayzzz2, todayzzz3, todayzzz4],
    githubLink: "https://github.com/thomasaugot/kp-next.js",
    liveLink: "https://kp-next-js.vercel.app/",
  },
  {
    title: "Pickle Rick vs Rats - The Game",
    description:
      "My first ever coding project and even though it is basic, for being the first it holds a special place in my heart. A cool Javascript shooting game that you can try on a desktop, kill the angry rats!",
    techStack: ["HTML", "CSS", "Javascript"],
    images: [pickleRickGame1, pickleRickGame2, pickleRickGame3],
    githubLink: "https://github.com/thomasaugot/project-js-shooting-game",
    liveLink: "https://pickle-rick-shooting-game.netlify.app/",
  },
];

const Projects: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(2);
  const { t } = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLoadMore = () => {
    setVisibleProjects((prevCount) => Math.min(prevCount + 2, projects.length));
  };

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
        <div className="w-full mb-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        {visibleProjects < projects.length && (
          <div className="min-h-[100px] flex items-center justify-center mt-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <GradientButton onClick={handleLoadMore}>
                Load More Projects
              </GradientButton>
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Projects;
