import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import { LucideIcon } from "lucide-react";
import { cva, VariantProps } from "class-variance-authority";

const buttonVariants = cva("px-12 py-4 w-auto flex justify-center item-center", {
  variants: {
    variant: {
      primary: "bg-blue-500 rounded-2xl text-white",
      secondary: "bg-red-600 rounded-full text-white",
      third: " text-red-600 bg-white ",
    },

    size: {
      sm: "text-sm px-1 py-0",
      md: "text-md px-12 py-4",
      lg: "text-xl px-4 py-2",
    },
    animation: {
      none: "",
      active: "active:scale-95",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
})

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  Icon?: LucideIcon;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  animation,
  variant,
  size,
  Icon,
  onClick,
  ...props
}) => {
  return (
    <button
    onClick={onClick}
      className={buttonVariants({ variant, size, className, animation })}
      {...props}
    >
      {Icon && <Icon size={20} className="mx-2"/>}
      {children}
    </button>
  );
};

export default Button;
