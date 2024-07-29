import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TitleUnderline from "./TitleUnderline";
import ExperienceCard from "./ExperienceCard";
import frigateLogo from "@/assets/img/frigate.webp";
import oslyLogo from "@/assets/img/osly.png";

interface ExperienceProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: any;
}

const experiences: ExperienceProps[] = [
  {
    title: "Software Developer",
    company: "Frigate",
    startDate: "Dec 2023",
    endDate: "Present",
    description:
      "Developing web & mobile applications in React, React Native, Vite, Flutterflow and PostgreSQL",
    logo: frigateLogo,
  },
  {
    title: "React Native Developer",
    company: "Osly Solutions",
    startDate: "Jul 2023",
    endDate: "Dec 2023",
    description: "Developing a mobile app using React Native and Supabase",
    logo: oslyLogo,
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
        className="text-4xl font-bold mb-8 font-orbitron text-white px-4 my-20"
      >
        <h1 className="my-4">{t("My Experience")}</h1>
        <TitleUnderline />
      </motion.div>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={index}
            title={exp.title}
            company={exp.company}
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
