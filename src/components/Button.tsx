import React from "react";
import { LucideIcon } from "lucide-react";

type ButtonProps = {
  variant?: "first" | "second" | "third";
  children: React.ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  width?: number
};

const Button: React.FC<ButtonProps> = ({
  variant = "first",
  children,
  onClick,
  icon: Icon,
  width,
}) => {
  let className = "";

  switch (variant) {
    case "first":
      className = "bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "second":
      className = "bg-gray-500 text-white hover:bg-gray-600 ";
      break;
    case "third":
      className = "bg-red-500 text-black border hover:bg-gray-900";
      break;
  }

  return (
    <button 
      style={{width}}

      className={`p-4 rounded-full shadow-lg flex justify-center ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className=" inline-block mx-2" />}
      {children}
    </button>
  );
};

export default Button;
