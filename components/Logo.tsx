import React from "react";

const Logo: React.FC = () => {
  return (
    <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="z-50">
      <defs>
        <linearGradient id="grad1" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#00FFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#7F00FF" stopOpacity="1" />
        </linearGradient>
      </defs>
      <text x="0" y="30" fontFamily="'orbitron', sans-serif" fontSize="24" fill="#ffffff" fontWeight="bold">
        Thomas A.
      </text>
      <text x="0" y="50" fontFamily="'orbitron', sans-serif" fontSize="14" fill="url(#grad1)" fontWeight="bold" >
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; WEB DEVELOPER
      </text>
    </svg>
  );
};

export default Logo;