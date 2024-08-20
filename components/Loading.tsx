"use client";

import React, { useEffect } from "react";
import StarsBackground from "./StarsBackground";

const Loading: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative flex h-screen w-screen justify-center items-center overflow-hidden bg-primary-bg">
      <StarsBackground />
      <div className="relative flex gap-4">
        <div className="w-12 h-12 rounded-full bg-primary-bg relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient opacity-70 blur-lg animate-pulse"></div>
          <div className="relative w-9 h-9 rounded-full bg-primary-bg animate-bounce"></div>
        </div>
        <div className="w-12 h-12 rounded-full bg-primary-bg relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient opacity-70 blur-lg animate-pulse"></div>
          <div className="relative w-9 h-9 rounded-full bg-primary-bg animate-bounce [animation-delay:-.3s]"></div>
        </div>
        <div className="w-12 h-12 rounded-full bg-primary-bg relative flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient opacity-70 blur-lg animate-pulse"></div>
          <div className="relative w-9 h-9 rounded-full bg-primary-bg animate-bounce [animation-delay:-.5s]"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
