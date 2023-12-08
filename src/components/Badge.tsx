import React, { FC, useEffect, useState } from "react";

type TagProps = {
  text: string;
  color?: string;
  background?: string;
  size?: "sm" | "md" | "lg";
};

export const Badge: FC<TagProps> = ({
  text,
  color = "#4263EB",
  size = "sm",
  background = "unset",
}) => {
  const [bgColor, setBgColor] = useState<string>("");
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
    hexToRGB(color, 0.2);
  }, [color]);

  const badgeSize =
    size === "sm"
      ? "px-2 py-1 text-[10px]"
      : size === "md"
      ? "px-3 py-1 text-xs"
      : "px-5 py-1 text-sm";

  return (
    <div
      style={{
        color: color,
        background: bgColor === "" ? background : bgColor,
      }}
      className={`w-fit rounded-md font-bold text-center ${badgeSize} `}
    >
      {text}
    </div>
  );
};
