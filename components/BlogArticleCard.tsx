import React from "react";
import { FaMedium } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface BlogArticleCardProps {
  title: string;
  content: string;
  image: string;
  mediumLink: string;
  date: string;
}

const BlogArticleCard: React.FC<BlogArticleCardProps> = ({
  title,
  content,
  image,
  mediumLink,
  date,
}) => {
  const { t } = useTranslation();

  return (
    <motion.div
      whileInView={{ y: 0, opacity: 1 }}
      initial={{ y: 100, opacity: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 40,
        delay: 0.8,
        ease: "easeOut",
      }}
      className="flex flex-col gap-4 md:flex-row border-b-2 border-gray-200 p-6 h-full"
    >
      <div className="relative w-full md:w-1/3 h-48">
        <Image
          src={image}
          alt={t(title)}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-between pl-4">
        <div className="flex flex-col flex-grow">
          <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
          <p className="text-gray-500 mb-4">{content}</p>
        </div>
        <div className="flex items-center justify-between gap-2 mt-4 text-gray-500">
          <span>{date}</span>
          <a
            href={mediumLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-transparent bg-clip-text bg-gradient flex items-center text-nowrap"
          >
            <svg
              className="w-7 h-7 mt-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <defs>
                <linearGradient
                  id="heartGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#6D28D9" />
                  <stop offset="100%" stopColor="#14B8A6" />
                </linearGradient>
              </defs>
              <FaMedium fill="url(#heartGradient)" />
            </svg>
            {t("Read on Medium")}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogArticleCard;
