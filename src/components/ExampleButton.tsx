import { ButtonHTMLAttributes, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";
import {cn} from "../lib/utils";


const buttonVariants = cva("rounded-md border", {
  variants: {
    variant: {
      primary: "border-black text-black px-2 py-1 hover:bg-neutral-500",
      secondary: "border-white bg-black text-white hover:bg-neutral-800",
      danger: "border-none text-white bg-red-500 hover:bg-red-500",
    },

    size: {
      sm: "text-sm px-1 py-0",
      md: "text-base px-2 py-1",
      lg: "text-xl px-4 py-2",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}
export default function Button({ children, className, variant, size, ...props }: ButtonProps) {
  return (
    <>
      <button className={cn(buttonVariants({className, variant, size}))} {...props}>
        {children}
      </button>
    </>
  );
}
