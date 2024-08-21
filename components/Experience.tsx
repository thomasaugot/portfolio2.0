import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TitleUnderline from "./TitleUnderline";
import ExperienceCard from "./ExperienceCard";
import frigateLogo from "@/assets/img/frigate.webp";
import oslyLogo from "@/assets/img/osly.webp";
import eurafriqueLogo from "@/assets/img/eurafrique.webp";
import upworkLogo from "@/assets/img/upwork.webp";
import qualentumLogo from "@/assets/img/qualentum.webp";
import ironhackLogo from "@/assets/img/ironhack.webp";

interface ExperienceProps {
  title: any;
  company: any;
  place: any;
  startDate: any;
  endDate: any;
  description: any;
  logo: any;
}

const Experience: React.FC = () => {
  const { t } = useTranslation();

  const experiences: ExperienceProps[] = [
    {
      title: t("Software Developer"),
      company: t("Frigate"),
      place: t("London, remote"),
      startDate: t("Dec 2023"),
      endDate: t("Present"),
      description: t(
        "Developing web & mobile applications in React, React Native, Tailwind, Vite, Flutterflow, Firebase and PostgreSQL"
      ),
      logo: frigateLogo,
    },
    {
      title: t("Frontend Developer - React"),
      company: t("Qualentum"),
      place: t("Madrid, remote"),
      startDate: t("Apr 2024"),
      endDate: t("Aug 2024"),
      description: t(
        "Bootcamp specializing in core frontend development - React.JS"
      ),
      logo: qualentumLogo,
    },
    {
      title: t("React Native Developer"),
      company: t("Osly Solutions"),
      place: t("Nantes, remote"),
      startDate: t("Jul 2023"),
      endDate: t("Dec 2023"),
      description: t(
        "Developed a mobile app using React Native, Typescript and Supabase"
      ),
      logo: oslyLogo,
    },
    {
      title: t("Web Developer"),
      company: t("Eurafrique"),
      place: t("Strasbourg, remote"),
      startDate: t("Apr 2023"),
      endDate: t("Nov 2023"),
      description: t(
        "Developed a multilingual website using React, Scss and Supabase"
      ),
      logo: eurafriqueLogo,
    },
    {
      title: t("Freelance Web Developer"),
      company: t("Upwork"),
      place: t("Remote"),
      startDate: t("Feb 2023"),
      endDate: t("Present"),
      description: t(
        "Provided freelance web development services using React, NextJS, Typescript, Tailwind and more"
      ),
      logo: upworkLogo,
    },
    {
      title: t("Fullstack Developer - MERN"),
      company: t("Ironhack"),
      place: t("Paris, remote"),
      startDate: t("Nov 2022"),
      endDate: t("Feb 2023"),
      description: t("Bootcamp specializing in fullstack development - MERN"),
      logo: ironhackLogo,
    },
  ];

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
        {t(
          "With nearly two years of experience, I’ve had the opportunity to contribute to and complete over 15 projects of varying sizes. These projects range from personal endeavors to startup initiatives. Through these experiences, I have developed the ability to work effectively both independently and as part of a team."
        )}
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
