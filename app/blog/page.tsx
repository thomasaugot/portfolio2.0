"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import TitleUnderline from "@/components/TitleUnderline";
import GradientButton from "@/components/GradientButton";
import BlogArticleCard from "@/components/BlogArticleCard";
import { blogs } from "@/data/blogs";
import StarsBackground from "@/components/StarsBackground";

const Blog: React.FC = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);
  const { t } = useTranslation();

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 4);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col p-8 my-20">
        <StarsBackground />
        <div className="w-full text-center mt-8 md:mb-16">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="text-4xl font-bold mb-8 font-orbitron text-white"
          >
            <h1 className="my-4">{t("Blog articles")}</h1>
            <TitleUnderline />
          </motion.div>
          <motion.p
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.7,
              ease: "easeOut",
            }}
            className="text-lg font-sm mb-6 font-roboto px-auto text-center text-white"
          >
            {t(
              "As much as coding itself, I love sharing the result of my research. We all face challenges when working on a project, and so I wish to contribute to the vast community of devs by sharing my solutions to various problems I encountered. Here is a collection of my latest writings on technology and development, all available on Medium."
            )}
          </motion.p>
        </div>
        <div className="w-full mb-8">
          {blogs.slice(0, visibleBlogs).map((blog, index) => (
            <BlogArticleCard
              key={index}
              title={t(blog.title)}
              content={t(blog.content)}
              image={blog.image.src}
              mediumLink={blog.mediumLink}
              date={t(blog.date)}
            />
          ))}
        </div>
        {visibleBlogs < blogs.length && (
          <div className="min-h-[100px] flex items-center justify-center mt-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <GradientButton onClick={handleLoadMore}>
                {t("Load More Articles")}
              </GradientButton>
            </motion.div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default Blog;
