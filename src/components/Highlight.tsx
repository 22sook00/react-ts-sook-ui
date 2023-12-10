import React from "react";
import { ThemeProps } from "../interface/theme";

interface HighlightProps extends ThemeProps {
  text: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  customColor?: string;
}

export const Highlight = ({
  text,
  size = "md",
  theme = "primary",
  customColor,
}: HighlightProps) => {
  const themeProps = customColor
    ? customColor
    : theme === "primary"
    ? `from-sook-primary-default to-sook-primary-default  dark:from-sook-primary-default-dark/50 dark:to-sook-primary-default-dark/50 
      `
    : theme === "success"
    ? `from-sook-point-blue to-sook-point-blue  dark:from-sook-point-blue-dark/50 dark:to-sook-point-blue-dark/50 
      `
    : theme === "progress"
    ? `from-sook-point-indigo to-sook-point-indigo  dark:from-sook-point-indigo-dark/50 dark:to-sook-point-indigo-dark/50 
      `
    : theme === "error"
    ? `from-sook-point-red to-sook-point-red  dark:from-sook-point-red-dark/50 dark:to-sook-point-red-dark/50 
   `
    : theme === "warning"
    ? `from-sook-point-yel to-sook-point-yel  dark:from-sook-point-yel-dark/50 dark:to-sook-point-yel-dark/50 
  `
    : theme === "light"
    ? `from-sook-gray-default to-sook-gray-default  dark:from-sook-gray-default-dark/50 dark:to-sook-gray-default-dark/50`
    : "";
  const sizeProps =
    size === "xs"
      ? "text-xs"
      : size === "sm"
      ? "text-sm "
      : size === "md"
      ? "text-base "
      : size === "lg"
      ? "text-lg "
      : "text-xl";

  return (
    <div className="group">
      <div className="w-full p-1 z-20">
        <h2
          className={`${sizeProps} whitespace-pre font-bold capitalize text-light `}
        >
          <span
            className={`${themeProps ?? customColor} 
            break-keep
            cursor-default
            bg-gradient-to-r 
            bg-[length:0px_6px]
            group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition[background-size] duration-500 `}
          >
            {text}
          </span>
        </h2>
      </div>
    </div>
  );
};
