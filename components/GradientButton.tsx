import React from "react";

interface GradientButtonProps {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const GradientButton: React.FC<GradientButtonProps> = ({
  href,
  onClick,
  className = "",
  children,
  type = "button",
}) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    if (href) {
      window.location.href = href;
    } else if (onClick) {
      onClick(event);
    }
  };

  return (
    <div className={`z-10 relative inline-flex group ${className}`}>
      <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
      <button
        type={type}
        onClick={handleClick}
        className="font-roboto relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
      >
        {children}
      </button>
    </div>
  );
};

export default GradientButton;
