import React, { useMemo } from "react";
import { toColor } from "react-color-palette";
import { HueProps } from "../../interface/colorpicker";
import { getHueCoordinates } from "../../utils/coordinate";

import ColorInteractive from "./ColorInteractive";

const ColorHue = ({
  width,
  height,
  color,
  vertical = true,
  onChange,
  onChangeComplete,
}: HueProps): JSX.Element => {
  const position = useMemo(() => {
    const hueCoordinate = vertical
      ? getHueCoordinates(color.hsv.h, height)
      : getHueCoordinates(color.hsv.h, width);

    return hueCoordinate;
  }, [color.hsv.h, height, vertical, width]);

  const updateColor = ({ y, x, complete = false }: any): void => {
    const newColor = vertical
      ? toColor("hsv", { ...color.hsv, h: (y / height) * 360 })
      : toColor("hsv", { ...color.hsv, h: (x / width) * 360 });

    onChange(newColor);

    if (complete && onChangeComplete) onChangeComplete(newColor);
  };

  const startPoint = vertical ? { top: position } : { left: position };
  const chkHeight =
    height === 160
      ? "h-[160px]"
      : height === 200
      ? "h-[200px]"
      : height === 240
      ? "h-[240px]"
      : "h-[12px]";

  return (
    <ColorInteractive
      className={`rcp-hue ${vertical ? `w-[12px]` : `w-full`} ${chkHeight}`}
      onChange={updateColor}
    >
      <div
        className={`absolute translate-y-[-5px] translate-x-[-4px] cursor-pointer rounded-full w-5 h-5 border-2 border-gray-300 box-border shadow-secondary-shadow `}
        style={{
          ...startPoint,
          backgroundColor: `hsl(${color.hsv.h}, 100%, 50%)`,
        }}
      />
    </ColorInteractive>
  );
};
export default ColorHue;
