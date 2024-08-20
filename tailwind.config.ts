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
        "gradient-start": "#6D28D9",
        "gradient-middle": "#3B82F6",
        "gradient-end": "#14B8A6",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "sans-serif"],
        orbitron: ["var(--font-orbitron)", "sans-serif"],
      },
      backgroundImage: {
        gradient:
          "linear-gradient(266deg, var(--gradient-start), var(--gradient-middle), var(--gradient-end))",
      },
      animation: {
        blink: "blink 0.75s step-end infinite",
        pulse: "pulse 1.5s infinite",
        rotate: "rotate 1s linear",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        pulse: {
          "0%": { transform: "scale(0.9)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(0.9)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
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
      "--gradient": `linear-gradient(266deg, var(--button-gradient-start), var(--button-gradient-middle), var(--button-gradient-end))`,
    },
  });
}

export default config;
