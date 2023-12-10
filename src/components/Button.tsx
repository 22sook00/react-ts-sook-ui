import React, { useCallback } from "react";
import "../index.css";
import { ThemeProps } from "../interface/theme";

interface ButtonProps extends ThemeProps {
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  isRing?: boolean;
  isOutline?: boolean;
  customStyle?: string;
}

export const Button = ({
  onClick,
  text,
  disabled = false,
  customStyle,
  theme = "primary",
  size = "md",
  isRing = true,
  isOutline = false,
  type = "button",
}: ButtonProps) => {
  const sizeProps = customStyle
    ? customStyle
    : size === "sm"
    ? "min-w-[80px] w-fit py-2 px-2 text-xs"
    : size === "md"
    ? "min-w-[100px] h-[43px] text-sm"
    : size === "lg"
    ? "min-w-[130px] h-[50px] text-default"
    : "";

  const themeProps =
    theme === "primary"
      ? `btn-primary
      ${
        isOutline &&
        " bg-white hover:bg-white text-sook-primary-default hover:text-sook-primary-default "
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}`
      : theme === "success"
      ? `btn-secondary 
      ${
        isOutline &&
        " bg-white hover:bg-white text-sook-point-blue hover:text-sook-point-blue "
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}`
      : theme === "progress"
      ? `btn-tertiary 
      ${
        isOutline &&
        " bg-white hover:bg-white text-sook-point-indigo hover:text-sook-point-indigo "
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}`
      : theme === "error"
      ? `btn-error 
      ${
        isOutline &&
        " bg-white hover:bg-white text-sook-point-red hover:text-sook-point-red "
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}`
      : theme === "warning"
      ? `btn-warning 
      ${
        isOutline &&
        " bg-white hover:bg-white text-sook-point-yel-dark hover:text-sook-point-yel-dark"
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}`
      : theme === "light"
      ? `btn-light
      ${
        isOutline &&
        " bg-white hover:bg-white text-sook-gray-dark hover:text-sook-gray-dark"
      }
      ${!isRing && "focus:ring-0 focus:ring-opacity-0 ring-offset-0"}
      `
      : customStyle;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${sizeProps ?? customStyle} ${themeProps ?? customStyle} 
      ${
        disabled
          ? "cursor-not-allowed bg-sook-gray-light hover:bg-sook-gray-light border border-sook-gray-light text-sook-gray-dark border-opacity-30"
          : "hover:opacity-90"
      }  font-semibold transition-all flex justify-center items-center py-1 px-2 rounded `}
    >
      {text}
    </button>
  );
};
