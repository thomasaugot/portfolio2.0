import frigateLogo from "@/public/assets/img/frigate.webp";
import oslyLogo from "@/public/assets/img/osly.webp";
import eurafriqueLogo from "@/public/assets/img/eurafrique.webp";
import upworkLogo from "@/public/assets/img/upwork.webp";
import qualentumLogo from "@/public/assets/img/qualentum.webp";
import ironhackLogo from "@/public/assets/img/ironhack.webp";
import dosxdosLogo from "@/public/assets/img/dosxdos-logo.webp";

export interface ExperienceProps {
  title: string;
  company: string;
  place: string;
  startDate: string;
  endDate: string;
  description: string;
  logo: any;
}

export const experiences: ExperienceProps[] = [
  {
    title: "Full Stack Developer",
    company: "Dos x Dos Grupo Imagen",
    place: "Telde, Spain, on-site",
    startDate: "Sept. 2024",
    endDate: "Now",
    description:
      "Developed progressive web applications in React, Next.JS, Tailwind, MySQL, PHP and AWS cloud services",
    logo: dosxdosLogo,
  },
  {
    title: "Software Developer",
    company: "Frigate",
    place: "London, remote",
    startDate: "Dec 2023",
    endDate: "Aug 2024",
    description:
      "Developed web & mobile applications in React, React Native, Tailwind, Vite, Flutterflow, Firebase and PostgreSQL",
    logo: frigateLogo,
  },
  {
    title: "Frontend Developer - React",
    company: "Qualentum",
    place: "Madrid, remote",
    startDate: "Apr 2024",
    endDate: "Aug 2024",
    description:
      "Bootcamp specializing in core frontend development - React.JS",
    logo: qualentumLogo,
  },
  {
    title: "React Native Developer",
    company: "Osly Solutions",
    place: "Nantes, remote",
    startDate: "Jul 2023",
    endDate: "Dec 2023",
    description:
      "Developed a mobile app using React Native, Typescript and Supabase",
    logo: oslyLogo,
  },
  {
    title: "Web Developer",
    company: "Eurafrique",
    place: "Strasbourg, remote",
    startDate: "Apr 2023",
    endDate: "Nov 2023",
    description:
      "Developed a multilingual website using React, Scss and Supabase",
    logo: eurafriqueLogo,
  },
  {
    title: "Freelance Web Developer",
    company: "Upwork",
    place: "Remote",
    startDate: "Feb 2023",
    endDate: "Present",
    description:
      "Provided freelance web development services using React, NextJS, Typescript, Tailwind and more",
    logo: upworkLogo,
  },
  {
    title: "Fullstack Developer - MERN",
    company: "Ironhack",
    place: "Paris, remote",
    startDate: "Nov 2022",
    endDate: "Feb 2023",
    description: "Bootcamp specializing in fullstack development - MERN",
    logo: ironhackLogo,
  },
];
