import React, { FC, SetStateAction, useRef, useState } from "react";

import { ColorPickerProps } from "react-color-palette/lib/interfaces/ColorPicker.interface";
import ColorHue from "./ColorHue";
import ColorPalette from "./ColorPalette";
import ColorField from "./ColorField";
import ColorAlpha from "./ColorAlpha";
import ColorEyedropper from "./ColorEyedropper";
import { ColorpickerType } from "./Colorpicker";
import useClickOutside from "../../hook/useClickOutside";
import { ThemeProps } from "../../interface/theme";

interface ExtendColorPickerProps
  extends ColorpickerType,
    ColorPickerProps,
    ThemeProps {
  setIsOpenColor: React.Dispatch<SetStateAction<boolean>>;
}

const ColorpickerContainer: FC<ExtendColorPickerProps> = ({
  width = 200,
  height = width,
  color,
  onChange,
  onChangeComplete,
  hideHEX = false,
  hideRGB = false,
  hideHSV = false,
  alpha = true,
  dark = false,
  setIsOpenColor,
  isEyedropper = true,
  withInput = false,
  theme,
}) => {
  const colorpickerRef = useRef<HTMLDivElement | null>(null);
  const handleClickOutside = () => {
    setIsOpenColor(false);
  };
  useClickOutside(colorpickerRef, handleClickOutside);
  //padding 값 16픽셀 *2 를 더해준다.
  const colorpickerWidth =
    width === 160
      ? "w-[200px] p-3 top-9"
      : width === 200
      ? `w-[254px] p-4 top-12 `
      : "w-[280px] p-4 top-14 ";
  return (
    <div
      ref={colorpickerRef}
      className={`${colorpickerWidth} ${
        withInput && "absolute left-0"
      } border z-50 flex flex-col gap-2 h-fit rounded-lg shadow-sm drop-shadow-sm 
      ${dark ? "bg-primary-dark text-gray-light" : "bg-gray-light"}`}
    >
      <section className={`flex gap-2 items-center rounded-lg `}>
        <ColorPalette
          width={width}
          height={height}
          color={color}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />
        <ColorHue
          width={width - 40}
          height={height}
          color={color}
          onChange={onChange}
          onChangeComplete={onChangeComplete}
        />
      </section>
      <section className="">
        {alpha && (
          <ColorAlpha
            width={width - 40}
            color={color}
            onChange={onChange}
            onChangeComplete={onChangeComplete}
          />
        )}
      </section>
      {isEyedropper && (
        <section>
          <ColorEyedropper onChange={onChange} width={width} theme={theme} />
        </section>
      )}

      <section
        className={`mt-1 flex flex-col items-center justify-center box-border w-full`}
      >
        <ColorField
          color={color}
          hideHEX={hideHEX}
          hideRGB={hideRGB}
          hideHSV={hideHSV}
          alpha={alpha}
          onChange={onChange}
        />
      </section>
    </div>
  );
};

export default ColorpickerContainer;
