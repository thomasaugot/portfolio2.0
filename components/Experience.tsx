import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TitleUnderline from "./TitleUnderline";

interface ExperienceProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
}

const experiences: ExperienceProps[] = [
  {
    title: "Full Stack Developer",
    company: "Tech Solutions",
    startDate: "Jan 2021",
    endDate: "Present",
    description: "Developing web applications using React and Node.js.",
    logo: "/path/to/tech-solutions-logo.png",
  },
  {
    title: "Frontend Developer",
    company: "Web Innovations",
    startDate: "Jul 2018",
    endDate: "Dec 2020",
    description: "Building responsive UIs with React and Tailwind CSS.",
    logo: "/path/to/web-innovations-logo.png",
  },
  // More experiences...
];

const Experience: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto py-16">
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
        className="text-4xl font-bold mb-8 font-orbitron text-white px-4"
      >
        <h1 className="my-4">{t("My Experience")}</h1>
        <TitleUnderline />
      </motion.div>

      <div className="relative flex flex-col items-center">
        <div className="absolute w-1 bg-gray-200 h-full top-0 left-1/2 transform -translate-x-1/2"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`flex w-full mb-16 ${
              index % 2 === 0 ? "flex-row-reverse" : "flex-row"
            } items-center`}
          >
            <div className="w-1/2 flex justify-end pr-8">
              <div className="w-12 h-12 flex-shrink-0">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="w-1/2 flex justify-center">
              <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center z-10">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              </div>
            </div>
            <div className="w-1/2 flex justify-start pl-8 text-left">
              <div className="text-right">
                <h3 className="text-xl font-semibold text-white">
                  {exp.title}
                </h3>
                <p className="text-sm text-gray-300">{exp.company}</p>
                <p className="text-sm text-gray-400">
                  {exp.startDate} - {exp.endDate}
                </p>
                <p className="text-gray-200">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
