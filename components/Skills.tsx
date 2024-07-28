import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import reactLogo from "@/assets/img/react-logo.png";
import muiLogo from "@/assets/img/MUI.png";
import typescriptLogo from "@/assets/img/typescript-logo.png";
import nextjsLogo from "@/assets/img/nextjs.png";
import reduxLogo from "@/assets/img/redux.png";
import tailwindLogo from "@/assets/img/Tailwind_CSS.png";
import jestLogo from "@/assets/img/jest.png";
import firebaseLogo from "@/assets/img/firebase.png";
import supabaseLogo from "@/assets/img/supabase.png";
import reactNativeLogo from "@/assets/img/react-native.png";
import expoLogo from "@/assets/img/expo.png";
import xcodeLogo from "@/assets/img/Xcode_14_icon.png";
import androidStudioLogo from "@/assets/img/new-studio-logo-1.png";
import flutterflowLogo from "@/assets/img/flutterflow.png";
import figmaLogo from "@/assets/img/figma.png";
import TitleUnderline from "./TitleUnderline";

interface SkillImageProps {
  src: string;
  alt: string;
  title: string;
}

const SkillImage: React.FC<SkillImageProps> = ({ src, alt, title }) => (
  <div className="flex flex-col items-center mx-4">
    <div className="h-16">
      <img
        src={src}
        alt={alt}
        title={title}
        className="h-full object-contain"
      />
    </div>
    <div className="subtitle pt-2 text-center text-white">{title}</div>
  </div>
);

const Skills: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
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
        className="text-4xl font-bold mb-8 font-orbitron text-white px-4 my-20"
      >
        <h1 className="my-4">{t("My Skills")}</h1>
        <TitleUnderline />
      </motion.div>
      <div className="flex flex-col items-center gap-8 max-w-[80vw]">
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 50,
            delay: 0.4,
            ease: "linear",
          }}
          className="relative w-full md:w-[60%] p-4 rounded-lg shadow-lg text-center overflow-hidden flex flex-col justify-center bg-black/10 transition-all duration-1000 text-white md:mr-auto"
        >
          <h2 className="text-2xl font-semibold">
            {t("Frontend Development")}
          </h2>
          <p className="mt-4">
            {t(
              "Crafting user interfaces from scratch with the most performant technologies such as React.js or Next.js for a seamless user experience."
            )}
          </p>
          <Marquee speed={40} className="mt-4" autoFill={true}>
            <SkillImage
              src="https://user-images.githubusercontent.com/25181517/192158954-f88b5814-d510-4564-b285-dff7d6400dad.png"
              alt="HTML"
              title="HTML"
            />
            <SkillImage
              src="https://user-images.githubusercontent.com/25181517/183898674-75a4a1b1-f960-4ea9-abcb-637170a00a75.png"
              alt="CSS"
              title="CSS"
            />
            <SkillImage
              src="https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png"
              alt="JavaScript"
              title="JavaScript"
            />
            <SkillImage
              src="https://avatars.githubusercontent.com/u/317889?s=200&v=4"
              alt="SCSS"
              title="SCSS"
            />
            <SkillImage src={reactLogo.src} alt="React" title="React" />
            <SkillImage
              src={muiLogo.src}
              alt="Material UI"
              title="Material UI"
            />
            <SkillImage
              src={typescriptLogo.src}
              alt="Typescript"
              title="Typescript"
            />
            <SkillImage src={nextjsLogo.src} alt="Next JS" title="Next JS" />
            <SkillImage src={reduxLogo.src} alt="Redux" title="Redux" />
            <SkillImage
              src="https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png"
              alt="Bootstrap"
              title="Bootstrap"
            />
            <SkillImage
              src={tailwindLogo.src}
              alt="Tailwind CSS"
              title="Tailwind CSS"
            />
            <SkillImage src={jestLogo.src} alt="Jest Testing" title="Jest" />
            <SkillImage src={figmaLogo.src} alt="Figma" title="Figma" />
          </Marquee>
        </motion.div>
        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 50,
            delay: 0.4,
            ease: "linear",
          }}
          className="relative w-full md:w-[60%] p-4 rounded-lg shadow-lg text-center overflow-hidden flex flex-col justify-center bg-black/10 transition-all duration-1000 text-white md:ml-auto"
        >
          <h2 className="text-2xl font-semibold">{t("Backend Development")}</h2>
          <p className="mt-4">
            {t(
              "Building robust server-side applications using technologies like Node.js, Express, SQL, noSQL databases and cloud services."
            )}
          </p>
          <Marquee
            speed={40}
            className="mt-4"
            direction={"right"}
            autoFill={true}
          >
            <SkillImage
              src="https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png"
              alt="Node.js"
              title="Node.js"
            />
            <SkillImage
              src="https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png"
              alt="Express"
              title="Express"
            />
            <SkillImage
              src="https://user-images.githubusercontent.com/25181517/182884177-d48a8579-2cd0-447a-b9a6-ffc7cb02560e.png"
              alt="mongoDB"
              title="MongoDB"
            />
            <SkillImage
              src="https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png"
              alt="REST"
              title="REST API"
            />
            <SkillImage
              src={firebaseLogo.src}
              alt="Firebase"
              title="Firebase"
            />
            <SkillImage
              src={supabaseLogo.src}
              alt="Supabase"
              title="Supabase"
            />
          </Marquee>
        </motion.div>

        <motion.div
          whileInView={{ scale: 1, opacity: 1 }}
          initial={{ scale: 0.8, opacity: 0 }}
          viewport={{ once: true }}
          transition={{
            type: "tween",
            stiffness: 50,
            delay: 0.4,
            ease: "linear",
          }}
          className="relative w-full md:w-[60%] p-4 rounded-lg shadow-lg text-center overflow-hidden flex flex-col justify-center bg-black/10 transition-all duration-1000 text-white md:mr-auto"
        >
          <h2 className="text-2xl font-semibold">
            {t("Mobile App Development")}
          </h2>
          <p className="mt-4">
            {t(
              "Developing intuitive mobile applications for iOS and Android using native development tools."
            )}
          </p>
          <Marquee speed={40} className="mt-4" autoFill={true}>
            <SkillImage
              src={reactNativeLogo.src}
              alt="React Native"
              title="React Native"
            />
            <SkillImage src={expoLogo.src} alt="Expo" title="Expo" />
            <SkillImage src={xcodeLogo.src} alt="Xcode" title="Xcode" />
            <SkillImage
              src={androidStudioLogo.src}
              alt="Android Studio"
              title="Android Studio"
            />
            <SkillImage
              src={flutterflowLogo.src}
              alt="FlutterFlow"
              title="FlutterFlow"
            />
          </Marquee>
        </motion.div>
      </div>
    </>
  );
};

export default Skills;
