import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  startDate,
  endDate,
  description,
  logo,
}) => {
  return (
    <li className="mb-10 ms-12">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -start-3 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <Image src={logo} alt={`${company} Logo`} width={48} height={48} />
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
        {title}
      </h3>
      <h3 className="flex items-center mb-2 text-lg font-semibold text-white">
        {company}
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {startDate} - {endDate}
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        {description}
      </p>
    </li>
  );
};

export default ExperienceCard;
