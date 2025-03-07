"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import GradientButton from "@/components/GradientButton";
import TypewriterEffect from "@/components/TypewriterEffect";
import { useTranslation } from "react-i18next";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Moon from "@/components/3DElements/Moon";
import Earth from "@/components/3DElements/Earth";
import TapGesture from "@/components/TapGesture";

const Home: React.FC = () => {
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
    <main className="relative flex h-screen lg:h-[calc(100vh-10vh)] flex-col items-center justify-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <Canvas
          className="w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] cursor-grab"
          camera={{ position: [0, 0, 10], fov: 60 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} />
          <Stars
            radius={100}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
          />
          <Moon />
          <Earth />
          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>
      <div className="z-10 mt-[10vh] max-w-[90vw] text-center select-none">
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
      <TapGesture />
    </main>
  );
};

export default Home;
