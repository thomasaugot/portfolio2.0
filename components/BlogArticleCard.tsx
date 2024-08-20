import React from "react";
import { FaMedium } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";

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
      className="relative w-full border-b-2 border-gray-200 p-6 flex flex-col md:flex-row items-start gap-4"
    >
      <div className="flex-shrink-0 w-full md:w-1/3 max-w-xs">
        <div className="relative h-[200px]">
          <Image
            src={image}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="w-full md:w-2/3 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">{title}</h2>
          <p className="text-gray-500 mb-4">{content}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-500">{date}</span>
        </div>
        <a
          href={mediumLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-6 right-6 text-transparent bg-clip-text bg-gradient flex items-center"
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
          Read on Medium
        </a>
      </div>
    </motion.div>
  );
};

export default BlogArticleCard;
