// tailwind.config.ts
import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-bg": "#121212",
        "secondary-bg": "#282828",
        "primary-text": "#3B82F6",
        "gradient-start": "#3B82F6",
        "gradient-end": "#FF44EC",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-button": "var(--gradient-button)",
      },
      animation: {
        pulse: "pulse 1.5s infinite",
        rotate: "rotate 1s linear",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        pulse: {
          "0%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(0.9)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": {
      ...newVars,
      "--gradient-button": `linear-gradient(266deg, var(--gradient-start), var(--gradient-end))`,
    },
  });
}

export default config;
