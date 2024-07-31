import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TitleUnderline from "./TitleUnderline";
import ExperienceCard from "./ExperienceCard";
import frigateLogo from "@/assets/img/frigate.webp";
import oslyLogo from "@/assets/img/osly.png";
import eurafriqueLogo from "@/assets/img/eurafrique.jpeg";
import upworkLogo from "@/assets/img/upwork.png";
import qualentumLogo from "@/assets/img/ironhack.png";
import ironhackLogo from "@/assets/img/ironhack.png";

interface ExperienceProps {
  title: string;
  company: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: any;
}

const experiences: ExperienceProps[] = [
  {
    title: "Software Developer",
    company: "Frigate",
    place: "London, remote",
    startDate: "Dec 2023",
    endDate: "Present",
    description:
      "Developing web & mobile applications in React, React Native, Tailwind, Vite, Flutterflow, Firebase and PostgreSQL",
    logo: frigateLogo,
  },
  {
    title: "Frontend Developer - React",
    company: "Qualentum",
    place: "Madrid, remote",
    startDate: "Apr 2024",
    endDate: "Aug 2024",
    description:
      "Bootcamp specializing in core frontend development - React.JS",
    logo: qualentumLogo,
  },
  {
    title: "React Native Developer",
    company: "Osly Solutions",
    place: "Nantes, remote",
    startDate: "Jul 2023",
    endDate: "Dec 2023",
    description:
      "Developed a mobile app using React Native, Typescript and Supabase",
    logo: oslyLogo,
  },
  {
    title: "Web Developer",
    company: "Eurafrique",
    place: "Strasbourg, remote",
    startDate: "Apr 2023",
    endDate: "Nov 2023",
    description:
      "Developed a mutilingual website using React, Scss and Supabase",
    logo: eurafriqueLogo,
  },
  {
    title: "Freelance Web Developer",
    company: "Upwork",
    place: "Remote",
    startDate: "Feb 2023",
    endDate: "Present",
    description:
      "Provided freelance web development services using React, NextJS, Typescript, Tailwind and more",
    logo: upworkLogo,
  },
  {
    title: "Fullstack Developer - MERN",
    company: "Ironhack",
    place: "Paris, remote",
    startDate: "Nov 2022",
    endDate: "Feb 2023",
    description: "Bootcamp specializing in fullstack development - MERN",
    logo: ironhackLogo,
  },
];

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <motion.div
        whileInView={{ y: 0, opacity: 1 }}
        initial={{ y: 100, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 0.5,
          ease: "easeOut",
        }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-8 font-orbitron text-white px-4 my-24"
      >
        <h1 className="my-4">{t("Certified, experienced & passionate")}</h1>
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
        With nearly two years of experience, I’ve had the opportunity to
        contribute to and complete over 15 projects of varying sizes. These
        projects range from personal endeavors to startup initiatives. Through
        these experiences, I have developed the ability to work effectively both
        independently and as part of a team.
      </motion.p>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
            place={exp.place}
            startDate={exp.startDate}
            endDate={exp.endDate}
            description={exp.description}
            logo={exp.logo}
          />
        ))}
      </ol>
    </>
  );
};

export default Experience;
