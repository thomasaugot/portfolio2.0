import localFont from "next/font/local";

export const orbitron = localFont({
  src: [
    {
      path: "../public/assets/fonts/Orbitron-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-orbitron",
});

export const roboto = localFont({
  src: [
    {
      path: "../public/assets/fonts/Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-roboto",
});
