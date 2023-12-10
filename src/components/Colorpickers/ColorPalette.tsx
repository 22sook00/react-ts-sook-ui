import React, { useMemo } from "react";
import { Color } from "react-color-palette";
import { OnChangeCallback } from "react-color-palette/lib/interfaces/ColorPicker.interface";
import { InteractiveOnChangeProps } from "../../interface/colorpicker";
import { getColorCoordinates } from "../../utils/coordinate";
import { toColor } from "../../utils/toColor";

import ColorInteractive from "./ColorInteractive";

export interface SaturationProps {
  width: number;
  height: number;
  color: Color;
  onChange: OnChangeCallback;
  onChangeComplete?: OnChangeCallback;
}

const ColorPalette = ({
  width,
  height,
  color,
  onChange,
  onChangeComplete,
}: SaturationProps): JSX.Element => {
  const position = useMemo(() => {
    const [x, y] = getColorCoordinates(color, width, height);

    return { x, y };
  }, [color, width, height]);

  const updateColor = ({
    x,
    y,
    complete = false,
  }: InteractiveOnChangeProps): void => {
    const newColor = toColor("hsv", {
      ...color.hsv,
      s: (x / width) * 100,
      v: 100 - (y / height) * 100,
    });

    onChange(newColor);

    if (complete && onChangeComplete) onChangeComplete(newColor);
  };
  return (
    <ColorInteractive
      className={` bg-colorpickerDefaultGradient relative select-none rounded-lg`}
      style={{
        width,
        height,
        backgroundColor: `hsl(${color.hsv.h}, 100%, 50%)`,
      }}
      onChange={updateColor}
    >
      <div
        className="rcp-saturation-cursor"
        style={{
          left: position.x,
          top: position.y,
          backgroundColor: color.hex,
        }}
      />
    </ColorInteractive>
  );
};
export default ColorPalette;
