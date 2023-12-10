import React, { FC, useEffect, useState } from "react";
import { toColor } from "react-color-palette";
import { ThemeProps } from "../../interface/theme";
import { Button } from "../Button";

import { SaturationProps } from "./ColorPalette";

declare global {
  interface Window {
    EyeDropper: any | unknown;
  }
}

const ColorEyedropper: FC<
  ThemeProps & Pick<SaturationProps, "onChange" | "width">
> = ({ onChange, width = 160, theme = "primary" }) => {
  const handleOpenEyedropper = () => {
    const eyeDropper = new window.EyeDropper();
    const hasSupport = () => "EyeDropper" in window;

    if (!hasSupport) {
      alert("Your browser does not support the EyeDropper API");
      return;
    }
    eyeDropper
      .open()
      .then((result: { sRGBHex: string }) => {
        onChange(toColor("hex", result.sRGBHex));
      })
      .catch((e: any) => {
        onChange(toColor("hex", "black"));
      });
  };

  return (
    <div>
      <Button
        customStyle={`
        ${width === 160 ? " h-fit text-[10px]" : " h-fit py-2 text-xs"}
        w-full  font-bold`}
        onClick={handleOpenEyedropper}
        theme={theme}
        isRing={false}
        text="Eyedropper"
      />
    </div>
  );
};

export default ColorEyedropper;
