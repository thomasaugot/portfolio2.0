"use client";

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";
import TitleUnderline from "@/components/TitleUnderline";
import GradientButton from "@/components/GradientButton";
import BlogArticleCard from "@/components/BlogArticleCard";
import article1 from "@/assets/img/blog-articles/article-1.webp";
import article2 from "@/assets/img/blog-articles/article-2.webp";
import article3 from "@/assets/img/blog-articles/article-3.webp";
import article4 from "@/assets/img/blog-articles/article-4.webp";
import article5 from "@/assets/img/blog-articles/article-5.webp";
import article6 from "@/assets/img/blog-articles/article-6.webp";
import article7 from "@/assets/img/blog-articles/article-7.webp";
import article8 from "@/assets/img/blog-articles/article-8.webp";
import article9 from "@/assets/img/blog-articles/article-9.webp";
import article10 from "@/assets/img/blog-articles/article-10.webp";
import article11 from "@/assets/img/blog-articles/article-11.webp";
import article12 from "@/assets/img/blog-articles/article-12.webp";
import article13 from "@/assets/img/blog-articles/article-13.webp";
import article14 from "@/assets/img/blog-articles/article-14.webp";
import article15 from "@/assets/img/blog-articles/article-15.webp";
import article16 from "@/assets/img/blog-articles/article-16.webp";

const blogs = [
  {
    title: "How to Start Scroll at Bottom in React",
    content:
      "Today, I want to share a neat trick I recently discovered while working on a chat component in a React project. It’s all about ensuring...",
    image: article1,
    mediumLink:
      "https://medium.com/@thomasaugot/how-to-start-scroll-at-bottom-in-react-901ba21cd720",
    date: "Jun 13, 2024",
  },
  {
    title: ".dotenv Environment Variables in Next.JS Not Found: The Solution",
    content:
      "Next.js is awesome for building React apps, but sometimes, dealing with environment variables can be a headache. Picture this: you’re...",
    image: article2,
    mediumLink:
      "https://medium.com/javascript-in-plain-english/dotenv-environment-variables-in-next-js-not-found-the-solution-7edf248c06be",
    date: "May 8, 2024",
  },
  {
    title: "Adding Zoom Functionality to an Image Viewer in React/Next.JS",
    content:
      "In this tutorial, we’ll explore how to enhance an image viewer in React/NextJS by integrating zoom functionality. With this feature, users...",
    image: article3,
    mediumLink:
      "https://medium.com/@thomasaugot/adding-zoom-functionality-to-an-image-viewer-in-react-next-js-4621be8eb770",
    date: "Apr 15, 2024",
  },
  {
    title: "Make your website Multilingual with react-i18next",
    content:
      "Ever wanted to take your React website global and cater to a wider audience speaking different languages? Well, fret no more, because today...",
    image: article4,
    mediumLink:
      "https://medium.com/@thomasaugot/make-your-website-multilingual-with-react-i18next-4b247bb651a0",
    date: "Mar 6, 2024",
  },
  {
    title:
      "Adding Personality with Custom Fonts: Using Local Fonts in Next.js and Tailwind CSS",
    content:
      "In the world of web development, typography plays a crucial role in shaping user experience and brand identity. While readily available...",
    image: article5,
    mediumLink:
      "https://medium.com/towardsdev/adding-personality-with-custom-fonts-using-local-fonts-in-next-js-and-tailwind-css-ea9b30bb6099",
    date: "Feb 16, 2024",
  },
  {
    title:
      "Effortless Project Launch: Cut Coding Time with this Next.js & Tailwind CSS Boilerplate",
    content: "A Time-Saving Blueprint for Faster Website Development...",
    image: article6,
    mediumLink:
      "https://medium.com/@thomasaugot/effortless-project-launch-cut-coding-time-with-thisnext-js-tailwind-css-boilerplate-0c7cbda64f60",
    date: "Jan 22, 2024",
  },
  {
    title: "Implement a Dark Mode in React & SCSS using Context API",
    content:
      "Today, let’s delve into the fascinating realm of implementing dark mode in a React app using SCSS. By the end of this guide, your app will...",
    image: article16,
    mediumLink:
      "https://medium.com/@thomasaugot/crafting-a-stylish-dark-mode-in-react-scss-using-context-api-code-included-4868ff358e94",
    date: "Nov 17, 2023",
  },
  {
    title: "Offline Mode in React Native with AsyncStorage",
    content:
      "In today’s hyper-connected world, developing apps that work seamlessly in offline mode is becoming increasingly essential. Imagine a...",
    image: article7,
    mediumLink:
      "https://medium.com/stackademic/offline-mode-in-react-native-with-asyncstorage-8140532212d9",
    date: "Nov 5, 2023",
  },
  {
    title: "Making My React Native App More Secure in 2023",
    content:
      "Even more nowadays, it’s essential to grasp the fundamental aspects of securing your React Native application. We’ll explore some common...",
    image: article8,
    mediumLink:
      "https://medium.com/@thomasaugot/making-my-react-native-app-more-secure-in-2023-47a92fed2a49",
    date: "Nov 1, 2023",
  },
  {
    title: "Supabase in React/React-Native for Beginners: The Basics",
    content:
      "Supabase is an open-source platform that streamlines modern application development by providing a comprehensive development stack. It...",
    image: article9,
    mediumLink:
      "https://medium.com/@thomasaugot/supabase-in-react-react-native-for-beginners-the-basics-16f7554dae39",
    date: "Nov 1, 2023",
  },
  {
    title: "Optimizing Performance in React Native",
    content:
      "React Native is an excellent choice for building cross-platform mobile applications. However, as your app grows and evolves, it’s easy to...",
    image: article10,
    mediumLink:
      "https://medium.com/@thomasaugot/optimizing-performance-in-react-native-7b5d80730984",
    date: "Nov 1, 2023",
  },
  {
    title: "Create a React Contact Form with Email.js",
    content:
      "In this tutorial, I’ll walk you through creating a contact form in a React application and integrating Email.js to send emails with the...",
    image: article11,
    mediumLink:
      "https://medium.com/@thomasaugot/create-a-react-contact-form-with-email-js-cad2c8606f33",
    date: "Nov 1, 2023",
  },
  {
    title: "Build A Responsive React Navbar Component with SCSS",
    content:
      "In this article, we will explore how to create a responsive and functional navigation bar using ReactJS with SCSS for styling, including a...",
    image: article12,
    mediumLink:
      "https://medium.com/stackademic/build-a-responsive-react-navbar-component-with-scss-0628ccabde1f",
    date: "Nov 1, 2023",
  },
  {
    title: "Save yourself hours of coding with these CSS generators",
    content:
      "In the fast-paced world of web development, efficiency is key. Writing CSS from scratch can be time-consuming and repetitive. Thankfully...",
    image: article13,
    mediumLink:
      "https://medium.com/@thomasaugot/save-yourself-hours-of-coding-with-these-css-generators-0a153dfd2059",
    date: "Nov 1, 2023",
  },
  {
    title:
      "Releasing a new version of a React Native mobile app on the Apple App Store",
    content:
      "Deploying a new version of a React Native mobile app on the Apple App Store involves several crucial steps to ensure a successful update...",
    image: article14,
    mediumLink:
      "https://medium.com/@thomasaugot/releasing-a-new-version-of-a-react-native-mobile-app-on-the-apple-app-store-5b13dbca729b",
    date: "Nov 1, 2023",
  },
  {
    title: "Which BaaS (Backend as a Service) to choose in 2023?",
    content:
      "In today’s rapidly evolving tech landscape, choosing the right Backend as a Service (BaaS) is crucial for any application’s success. BaaS...",
    image: article15,
    mediumLink:
      "https://medium.com/@thomasaugot/which-baas-backend-as-a-service-to-choose-in-2023-587302ff4fcd",
    date: "Oct 31, 2023",
  },
];

const Blog: React.FC = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(4);
  const { t } = useTranslation();

  const handleLoadMore = () => {
    setVisibleBlogs((prev) => prev + 4);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col p-8 my-20">
        <div className="w-full text-center mt-8 mb-16">
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
            <h1 className="my-4">Blog articles</h1>
            <TitleUnderline />
          </motion.div>
          <motion.p
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 100, opacity: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.5,
              ease: "easeOut",
            }}
            className="text-lg font-sm mb-6 font-roboto px-auto text-center px-4 text-white"
          >
            As much as coding itself, I love sharing the result of my research.
            We all face challenges when working on a project, and so I wish to
            contribute the vast community of devs by sharing my solutions to
            various problems I encountered. Here is a collection of my latest
            writings on technology and development, all available on Medium.
          </motion.p>
        </div>
        <div className="w-full mb-8">
          {blogs.slice(0, visibleBlogs).map((blog, index) => (
            <BlogArticleCard
              key={index}
              title={blog.title}
              content={blog.content}
              image={blog.image.src}
              mediumLink={blog.mediumLink}
              date={blog.date}
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
                Load More Articles
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
