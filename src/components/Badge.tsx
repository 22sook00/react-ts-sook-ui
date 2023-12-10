import React, { FC, useEffect, useState } from "react";
import { ThemeProps } from "../interface/theme";

interface BadgeProps extends ThemeProps {
  text: string;
  size?: "sm" | "md" | "lg";
  customColor?: string;
}

export const Badge: FC<BadgeProps> = ({
  text,
  theme = "primary",
  size = "md",
  customColor,
}) => {
  const [bgColor, setBgColor] = useState<string>("");
  const themeProps = customColor
    ? customColor
    : theme === "primary"
    ? `#1eb7a7`
    : theme === "success"
    ? `#1683db`
    : theme === "progress"
    ? `#5051e6`
    : theme === "error"
    ? `#e11d48`
    : theme === "warning"
    ? `#fbbf24`
    : "#1e293b";

  const hexToRGB = (hex: string, alpha = 1) => {
    let parseString = hex;
    if (hex.startsWith("#")) {
      parseString = hex.slice(1, 7);
    }
    if (parseString.length !== 6) {
      return null;
    }
    const r = parseInt(parseString.slice(0, 2), 16);
    const g = parseInt(parseString.slice(2, 4), 16);
    const b = parseInt(parseString.slice(4, 6), 16);
    if (isNaN(r) || isNaN(g) || isNaN(b)) {
      return null;
    }
    return setBgColor(`rgba(${r}, ${g}, ${b}, ${alpha})`);
  };

  useEffect(() => {
    hexToRGB(themeProps || "#6ed8cd", 0.2);
  }, [themeProps]);

  const badgeSize =
    size === "sm"
      ? "px-2 py-1 text-[10px]"
      : size === "md"
      ? "px-3 py-1 text-xs"
      : "px-4 py-2 text-sm";

  return (
    <div
      style={{
        color: themeProps,
        background: bgColor === "" ? customColor : bgColor,
      }}
      className={`w-fit rounded-lg font-bold text-center ${badgeSize} `}
    >
      {text}
    </div>
  );
};
