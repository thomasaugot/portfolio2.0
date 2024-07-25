"use client";

import React, { useEffect, useState } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enTranslation from "@/locales/en.json";
import frTranslation from "@/locales/fr.json";
import esTranslation from "@/locales/es.json";
import Loading from "@/components/Loading";

interface ClientSideWrapperProps {
  children: React.ReactNode;
}

const ClientSideWrapper: React.FC<ClientSideWrapperProps> = ({ children }) => {
  //   const [isI18nInitialized, setIsI18nInitialized] = useState(false);
  //   const [isDesktop, setIsDesktop] = useState(false);
  //   const [loaded, setLoaded] = useState(false);

  //   useEffect(() => {
  //     i18n
  //       .use(LanguageDetector)
  //       .use(initReactI18next)
  //       .init({
  //         resources: {
  //           en: { translation: enTranslation },
  //           fr: { translation: frTranslation },
  //           es: { translation: esTranslation },
  //         },
  //         fallbackLng: "en",
  //         detection: {
  //           order: ["localStorage", "navigator"],
  //           caches: ["localStorage"],
  //         },
  //       })
  //       .then(() => {
  //         setIsI18nInitialized(true);
  //       });

  //     // Scroll to top on mount
  //     window.scrollTo(0, 0);

  //     // Set initial desktop state
  //     setIsDesktop(window.innerWidth >= 1024);

  //     // Handle resize events
  //     const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
  //     window.addEventListener("resize", handleResize);
  //     return () => window.removeEventListener("resize", handleResize);
  //   }, []);

  //   if (!isI18nInitialized || !loaded) {
  //     return (
  //       <div className="w-screen h-screen bg-gray-900">
  //         <Loading />
  //       </div>
  //     );
  //   }

  return <>{children}</>;
};

export default ClientSideWrapper;
