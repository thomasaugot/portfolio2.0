import React, { useState, useEffect } from "react";
import englishFlag from "@/assets/img/en.png";
import frenchFlag from "@/assets/img/fr.png";
import spanishFlag from "@/assets/img/es.png";
import { useTranslation } from "react-i18next";
import Image from "next/image";

interface Language {
  code: string;
  flag: any;
  alt: string;
}

const languages: Language[] = [
  { code: "fr", flag: frenchFlag, alt: "French Flag" },
  { code: "en", flag: englishFlag, alt: "English Flag" },
  { code: "es", flag: spanishFlag, alt: "Spanish Flag" },
];

interface LanguageButtonProps {
  code: string;
  flag: string;
  alt: string;
  isActive: boolean;
  onClick: () => void;
}

function LanguageButton({
  code,
  flag,
  alt,
  isActive,
  onClick,
}: LanguageButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`border-none bg-transparent cursor-pointer p-0 relative transition-transform transition-filter duration-300 mx-4 lg:mx-2 my-7 lg:my-0 ${
        isActive ? "scale-150" : ""
      }`}
    >
      <Image
        src={flag}
        alt={alt}
        className="w-8 lg:w-5 h-8 lg:h-5 rounded-full object-cover shadow-[0_0_7px_rgba(255,255,255,0.5)] transition-filter duration-300"
      />
    </button>
  );
}

function LanguageSelector() {
  const { i18n } = useTranslation();
  const [activeLanguage, setActiveLanguage] = useState<string>(i18n.language);

  useEffect(() => {
    setActiveLanguage(i18n.language);
  }, [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        {languages.map(({ code, flag, alt }) => (
          <LanguageButton
            key={code}
            code={code}
            flag={flag}
            alt={alt}
            isActive={activeLanguage === code}
            onClick={() => changeLanguage(code)}
          />
        ))}
      </div>
    </div>
  );
}

export default LanguageSelector;
