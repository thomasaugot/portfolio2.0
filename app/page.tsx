"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/GradientButton";
import TypewriterEffect from "@/components/TypewriterEffect";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [showButton, setShowButton] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setShowButton(false);
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, [i18n.language]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-white">
      <div className="mt-[10vh] max-w-[90vw]">
        <TypewriterEffect
          lines={[t("Hi there! I am Thomas,"), t("Web & Mobile Developer")]}
        />
        <div className="min-h-[100px] flex items-center justify-center mt-4">
          {showButton && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <GradientButton href="/about">{t("Explore")}</GradientButton>
            </motion.div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
