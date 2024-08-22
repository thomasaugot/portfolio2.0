import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  title: string;
  company: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  place,
  startDate,
  endDate,
  description,
  logo,
}) => {
  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 40,
        delay: 0.9,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
    >
      <li className="mb-10 ms-12 font-roboto">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-3 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
          <Image
            src={logo}
            alt={`${company} Logo`}
            width={48}
            height={48}
            className="rounded-full"
          />
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
          {title}
        </h3>
        <h3 className="flex items-center mb-2 text-lg font-semibold text-white">
          {company} - {place}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400">
          {startDate} - {endDate}
        </time>
        <p className="mb-4 text-base font-normal text-gray-500 ">
          {description}
        </p>
      </li>
    </motion.div>
  );
};

export default ExperienceCard;
