"use client";

import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import TitleUnderline from "@/components/TitleUnderline";
import ProjectCard from "@/components/ProjectCard";
import GradientButton from "@/components/GradientButton";
import { projects } from "@/data/projects";

const Projects: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState(2);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [i18n.language]);

  const handleLoadMore = () => {
    setVisibleProjects((prevCount) => Math.min(prevCount + 2, projects.length));
  };

  const translatedProjects = projects.map((project) => ({
    ...project,
    description: t(project.descriptionKey),
  }));

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
            <h1 className="my-4">{t("Check out my work")}</h1>
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
              "A selection of my finest personal work, each project a testament to my passion and skills as a developer. These are the creations where I had complete creative control and ownership, reflecting my unique vision and expertise. From concept to completion, these projects are truly mine, accurately representing my experience, creativity, and technical proficiency."
            )}
          </motion.p>
        </div>
        <div className="w-full mb-8">
          {translatedProjects
            .slice(0, visibleProjects)
            .map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
        </div>
        {visibleProjects < translatedProjects.length && (
          <div className="min-h-[100px] flex items-center justify-center mt-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <GradientButton onClick={handleLoadMore}>
                {t("Load More Projects")}
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
