import React from "react";

const TitleUnderline: React.FC = () => {
  return (
    <div className="relative w-full h-1">
      <div className="absolute inset-x-0 bottom-0 h-[2px] w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm mx-auto" />
      <div className="absolute inset-x-0 bottom-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent mx-auto" />
    </div>
  );
};

export default TitleUnderline;
