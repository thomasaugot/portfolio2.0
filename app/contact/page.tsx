"use client";

import React from "react";
import { motion } from "framer-motion";
import { SlSocialLinkedin } from "react-icons/sl";
import { AiFillGithub } from "react-icons/ai";
import { BsMedium } from "react-icons/bs";
import { IconContext } from "react-icons";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import TitleUnderline from "@/components/TitleUnderline";
import { useTranslation } from "react-i18next";
import StarsBackground from "@/components/StarsBackground";

const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-8 my-20">
        <StarsBackground />
        <div className="w-full max-w-xl text-center">
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
            className="text-4xl font-bold mb-6 font-orbitron text-white"
          >
            <h1 className="mb-2">{t("Get in touch")}</h1>
            <TitleUnderline />
          </motion.div>
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: "-100%", opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 40,
              delay: 0.4,
              ease: "easeOut",
            }}
          >
            <ContactForm />
          </motion.div>
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
            className="text-gradient mt-10 mb-12"
          >
            <h1 className="text-4xl font-bold mb-2 font-orbitron text-white">
              {t("Connect with me")}
            </h1>
            <TitleUnderline />
          </motion.div>
          <div className="flex justify-center space-x-8">
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "110%", opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: 0.4,
                ease: "easeOut",
              }}
              className="text-gradient"
            >
              <a
                href="https://www.linkedin.com/in/thomas-augot"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ color: "white", size: "60px" }}>
                  <SlSocialLinkedin />
                </IconContext.Provider>
              </a>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "110%", opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: 0.6,
                ease: "easeOut",
              }}
              className="text-gradient"
            >
              <a
                href="https://github.com/thomasaugot"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ color: "white", size: "67px" }}>
                  <AiFillGithub />
                </IconContext.Provider>
              </a>
            </motion.div>
            <motion.div
              whileInView={{ x: 0, opacity: 1 }}
              initial={{ x: "110%", opacity: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                stiffness: 40,
                delay: 0.8,
                ease: "easeOut",
              }}
              className="text-gradient"
            >
              <a
                href="https://medium.com/@thomasaugot"
                target="_blank"
                rel="noreferrer"
              >
                <IconContext.Provider value={{ color: "white", size: "67px" }}>
                  <BsMedium />
                </IconContext.Provider>
              </a>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
