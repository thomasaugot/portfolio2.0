import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import TitleUnderline from "./TitleUnderline";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "@/data/experience";

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
        className="text-center text-4xl font-bold mb-8 font-orbitron text-white px-4 my-24"
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
          delay: 0.7,
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
            title={t(exp.title)}
            company={t(exp.company)}
            place={t(exp.place)}
            startDate={t(exp.startDate)}
            endDate={t(exp.endDate)}
            description={t(exp.description)}
            logo={exp.logo}
            delay={index * 0.2}
          />
        ))}
      </ol>
    </>
  );
};

export default Experience;
