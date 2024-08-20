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
  const [isI18nInitialized, setIsI18nInitialized] = useState(false);

  useEffect(() => {
    i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources: {
          en: { translation: enTranslation },
          fr: { translation: frTranslation },
          es: { translation: esTranslation },
        },
        fallbackLng: "en",
        detection: {
          order: ["localStorage", "navigator"],
          caches: ["localStorage"],
        },
        react: {
          useSuspense: false,
        },
      })
      .then(() => {
        setIsI18nInitialized(true);
      });

    const handleResize = () => {};
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isI18nInitialized) {
    return (
      <div className="w-screen h-screen bg-gray-900">
        <Loading />
      </div>
    );
  }

  return <>{children}</>;
};

export default ClientSideWrapper;
