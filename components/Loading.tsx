import React, { useEffect } from "react";

const Loading: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex h-screen w-screen justify-center items-center bg-transparent overflow-hidden">
      <div className="flex gap-4">
        <div className="w-9 h-9 rounded-full bg-gray-800 animate-bounce"></div>
        <div className="w-9 h-9 rounded-full bg-gray-800 animate-bounce [animation-delay:-.3s]"></div>
        <div className="w-9 h-9 rounded-full bg-gray-800 animate-bounce [animation-delay:-.5s]"></div>
      </div>
    </div>
  );
};

export default Loading;
