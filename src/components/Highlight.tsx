import React from "react";
import { ThemeProps } from "../interface/theme";

interface HighlightProps extends ThemeProps {
  text: string;
  customColor?: string;
}

export const Highlight = ({
  text,
  theme = "primary",
  customColor,
}: HighlightProps) => {
  const themeProps =
    theme === "primary"
      ? `from-primary to-primary  dark:from-primary-dark/50 dark:to-primary-dark/50 
      `
      : theme === "success"
      ? `from-point-blue to-point-blue  dark:from-point-blue-dark/50 dark:to-point-blue-dark/50 
      `
      : theme === "progress"
      ? `from-point-indigo to-point-indigo  dark:from-point-indigo-dark/50 dark:to-point-indigo-dark/50 
      `
      : theme === "error"
      ? `from-point-red to-point-red  dark:from-point-red-dark/50 dark:to-point-red-dark/50 
   `
      : theme === "warning"
      ? `from-point-yel to-point-yel  dark:from-point-yel-dark/50 dark:to-point-yel-dark/50 
  `
      : customColor;

  return (
    <div className="group">
      <div className="w-full p-4 xs:p-6 sm:p-10 z-20">
        <h2 className=" whitespace-pre font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
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
