import { useEffect, useState, useRef } from "react";
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
  const isFirstRender = useRef(true);

  // Effect to reset text when the language changes
  useEffect(() => {
    if (!isFirstRender.current) {
      setTypedText(new Array(lines.length).fill(""));
      setCurrentLine(0);
    }
  }, [i18n.language]);

  // Typing effect for each line
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Prevent the effect from running on the first render
      return;
    }

    let isCancelled = false;

    const typeLine = async (index: number) => {
      if (index >= lines.length || isCancelled) return;

      const text = lines[index];
      let currentText = "";

      // Type out each character of the current line
      for (let i = 0; i <= text.length; i++) {
        if (isCancelled) return;
        currentText = text.slice(0, i);
        setTypedText((prev) => {
          const newText = [...prev];
          newText[index] = currentText;
          return newText;
        });
        await new Promise((resolve) => setTimeout(resolve, 100)); // Typing speed
      }

      await new Promise((resolve) => setTimeout(resolve, 600)); // Pause after typing

      // Move to the next line if available
      if (!isCancelled && index < lines.length - 1) {
        setCurrentLine(index + 1);
      }
    };

    typeLine(currentLine);

    return () => {
      isCancelled = true;
    };
  }, [currentLine]);

  return (
    <div className="relative flex flex-col items-center text-center w-auto">
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
            <span className="absolute right-0 bottom-0 w-1 h-12 bg-white animate-blink ml-2 hidden md:block" />
          )}
        </div>
      ))}
    </div>
  );
};

export default TypewriterEffect;
