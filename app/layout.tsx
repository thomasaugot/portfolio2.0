import type { Metadata } from "next";
import { Inter, Roboto, Orbitron } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import ClientSideWrapper from "@/components/ClientSideWrapper";
import Navbar from "@/components/Navbar";
import { orbitron, roboto } from "./fonts";
import ShootingStars from "@/components/ShootingStars";
import StarsBackground from "@/components/StarsBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thomas Augot | Portfolio",
  description: "Generated by create next app",
  keywords: [
    "web developer",
    "mobile developer",
    "react",
    "javascript",
    "next",
    "css",
    "nantes",
    "france",
    "spain",
    "html",
    "website",
    "development",
    "web design",
    "loire-atlantique",
    "44",
    "service",
    "freelance",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${roboto.variable}`}>
      <Head>
        <link rel="icon" href="./icon.png" sizes="any" />
      </Head>
      <body className={`${inter.className} bg-primary-bg`}>
        <ClientSideWrapper>
          <div className="relative min-h-screen flex flex-col">
            <ShootingStars />
            <StarsBackground />
            <Navbar />
            <main className="flex-1">{children}</main>
          </div>
        </ClientSideWrapper>
      </body>
    </html>
  );
}
