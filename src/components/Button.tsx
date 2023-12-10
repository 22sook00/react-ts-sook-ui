import React, { useCallback } from "react";
import "../index.css";

interface ButtonProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  text: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  theme?: "primary" | "success" | "proress" | "error" | "warning";
  isRing?: boolean;
  isOutline?: boolean;
  customStyle?: string | number;
}

export const Button = ({
  onClick,
  text,
  disabled = false,
  customStyle,
  theme = "primary",
  size = "sm",
  isRing = true,
  isOutline = false,
}: ButtonProps) => {
  const sizeProps =
    !customStyle && size === "sm"
      ? "min-w-[80px] w-fit py-2 px-2 text-xs"
      : size === "md"
      ? "min-w-[100px] h-[43px] text-sm"
      : size === "lg"
      ? "min-w-[130px] h-[50px] text-default"
      : customStyle;

  const themeProps =
    theme === "primary"
      ? `btn-primary
      ${
        isOutline &&
        " bg-white hover:bg-white text-primary-default hover:text-primary-default "
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}`
      : theme === "success"
      ? `btn-secondary 
      ${
        isOutline &&
        " bg-white hover:bg-white text-point-blue hover:text-point-blue "
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}`
      : theme === "proress"
      ? `btn-tertiary 
      ${
        isOutline &&
        " bg-white hover:bg-white text-point-indigo hover:text-point-indigo "
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}`
      : theme === "error"
      ? `btn-error 
      ${
        isOutline &&
        " bg-white hover:bg-white text-point-red hover:text-point-red "
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}`
      : theme === "warning"
      ? `btn-warning 
      ${
        isOutline &&
        " bg-white hover:bg-white text-point-yel-dark hover:text-point-yel-dark"
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}`
      : customStyle;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${sizeProps ?? customStyle} ${themeProps ?? customStyle} 
      ${
        disabled
          ? "cursor-not-allowed bg-gray-200 hover:bg-gray-200 border border-gray-200 text-gray-dark border-opacity-30"
          : "hover:opacity-90"
      }  font-semibold transition-all flex justify-center items-center py-1 px-2 rounded `}
    >
      {text}
    </button>
  );
};
