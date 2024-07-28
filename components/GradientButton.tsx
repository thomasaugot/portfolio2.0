import React from "react";

interface GradientButtonProps {
  href?: string;
  className?: string;
  children?: React.ReactNode;
  type?: any;
}

const GradientButton: React.FC<GradientButtonProps> = ({
  href,
  className = "",
  children,
  type,
}) => {
  return (
    <div className={`relative inline-flex group ${className}`}>
      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-button rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      {href ? (
        <a
          href={href}
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          role="button"
        >
          {children}
        </a>
      ) : (
        <button
          type={type}
          className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
        >
          {children}
        </button>
      )}
    </div>
  );
};

export default GradientButton;
