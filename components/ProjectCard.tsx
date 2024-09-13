"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { InfiniteMovingImg } from "@/components/InfiniteMovingImg";

type ProjectCardProps = {
  title: string;
  description: string;
  techStack: string[];
  images: { src: string }[];
  githubLink: string;
  liveLink: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  images,
  githubLink,
  liveLink,
}) => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 40,
        delay: 0.7,
        ease: "easeOut",
      }}
      className="w-full border-b-2 border-gray-200 p-6 flex flex-col gap-3 md:flex-row items-center md:items-start relative"
    >
      <div className="w-full md:w-1/2 text-center md:text-left z-10 my-auto">
        <h1 className="text-white text-2xl font-orbitron mb-4">{title}</h1>
        <p className="text-gray-400 font-roboto mb-4">{description}</p>
        <p className="text-gray-500 font-roboto mb-4">
          Tech Stack: {techStack.join(", ")}
        </p>
        <div className="flex justify-center md:justify-start space-x-4 z-10">
          <Link
            href={githubLink}
            passHref
            target="_blank"
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <FaGithub size={28} />
          </Link>
          <Link
            href={liveLink}
            passHref
            target="_blank"
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <FaExternalLinkAlt size={28} />
          </Link>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-full z-0">
        <InfiniteMovingImg items={images.reverse() as { src: string }[]} />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
