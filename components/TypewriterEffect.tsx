import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface TypewriterEffectProps {
  lines: string[];
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ lines }) => {
  const { i18n } = useTranslation();
  const [typedText, setTypedText] = useState<string[]>(
    new Array(lines.length).fill("")
  );
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    setTypedText(new Array(lines.length).fill(""));
    setCurrentLine(0);
  }, [i18n.language]);

  useEffect(() => {
    const typeLine = async (index: number) => {
      if (index >= lines.length) return;

      const text = lines[index];
      let currentText = "";

      for (let i = 0; i <= text.length; i++) {
        currentText = text.slice(0, i);
        setTypedText((prev) => {
          const newText = [...prev];
          newText[index] = currentText;
          return newText;
        });
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 600));
      setCurrentLine(index + 1);
    };

    typeLine(currentLine);
  }, [currentLine]);

  return (
    <div className="relative flex flex-col items-center text-center ">
      {lines.map((line, index) => (
        <div
          key={index}
          className={`relative text-4xl lg:text-5xl font-bold font-orbitron mb-4 leading-relaxed
            ${
              index === lines.length - 1
                ? "text-transparent bg-clip-text bg-gradient"
                : "text-white"
            }`}
        >
          {typedText[index]}
          {index === currentLine && (
            <span className="absolute right-0 bottom-0 w-1 h-12 bg-white animate-blink ml-2" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TypewriterEffect;
