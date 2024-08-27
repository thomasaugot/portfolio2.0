import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import TitleUnderline from "./TitleUnderline";
import { frontendSkills, backendSkills, mobileSkills } from "@/data/skills";
import Image from "next/image";

const SkillImage: React.FC<{ src: string; alt: string; title: string }> = ({
  src,
  alt,
  title,
}) => (
  <div className="flex flex-col items-center mx-4">
    <div className="h-16">
      <Image
        src={src}
        alt={alt}
        title={title}
        width={150}
        height={150}
        className="h-full object-contain w-auto"
      />
    </div>
    <div className="subtitle pt-2 text-center text-white">{title}</div>
  </div>
);

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
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
        className="text-center text-4xl font-bold mb-8 font-orbitron text-white px-4 my-20"
      >
        <h1 className="my-4">{t("Always expanding my horizons")}</h1>
        <TitleUnderline />
      </motion.div>
      <div className="flex flex-col items-center gap-8 max-w-[80vw]">
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 40,
            delay: 0.7,
            ease: "easeOut",
          }}
          className="relative w-full md:w-[60%] p-4 rounded-lg shadow-lg text-center overflow-hidden flex flex-col justify-center bg-black/10 transition-all duration-1000 text-white md:mr-auto"
        >
          <h2 className="text-2xl font-semibold font-orbitron">
            {t("Frontend Development")}
          </h2>
          <p className="mt-4">
            {t(
              "Crafting user interfaces from scratch with the most performant technologies such as React.js or Next.js for a seamless user experience."
            )}
          </p>
          <Marquee speed={40} className="mt-4" autoFill={true}>
            {frontendSkills.map((skill) => (
              <SkillImage key={skill.title} {...skill} />
            ))}
          </Marquee>
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 40,
            delay: 0.7,
            ease: "easeOut",
          }}
          className="relative w-full md:w-[60%] p-4 rounded-lg shadow-lg text-center overflow-hidden flex flex-col justify-center bg-black/10 transition-all duration-1000 text-white md:ml-auto"
        >
          <h2 className="text-2xl font-semibold font-orbitron">
            {t("Backend Development")}
          </h2>
          <p className="mt-4">
            {t(
              "Building robust server-side applications using technologies like Node.js, Express, SQL, noSQL databases and cloud services."
            )}
          </p>
          <Marquee
            speed={40}
            className="mt-4"
            direction={"right"}
            autoFill={true}
          >
            {backendSkills.map((skill) => (
              <SkillImage key={skill.title} {...skill} />
            ))}
          </Marquee>
        </motion.div>
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 40,
            delay: 0.7,
            ease: "easeOut",
          }}
          className="relative w-full md:w-[60%] p-4 rounded-lg shadow-lg text-center overflow-hidden flex flex-col justify-center bg-black/10 transition-all duration-1000 text-white md:mr-auto"
        >
          <h2 className="text-2xl font-semibold font-orbitron">
            {t("Mobile App Development")}
          </h2>
          <p className="mt-4">
            {t(
              "Developing intuitive mobile applications for iOS and Android using native development tools."
            )}
          </p>
          <Marquee speed={40} className="mt-4" autoFill={true}>
            {mobileSkills.map((skill) => (
              <SkillImage key={skill.title} {...skill} />
            ))}
          </Marquee>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
