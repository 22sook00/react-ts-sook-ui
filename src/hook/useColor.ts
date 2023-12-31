import { useState } from "react";
import { Color } from "../interface/colorpicker";
import { toColor } from "../utils/toColor";

/**
 * Returns a stateful [Color](https://github.com/Wondermarin/react-color-palette#color), and a function to update it.
 * @param model HEX.
 * @param initColor Color in HEX model (3-6 digit or 4-8 digit with alpha) or [HTML Color Names](https://www.w3.org/wiki/CSS/Properties/color/keywords).
 */
export function useColor(
  model: "hex",
  initColor: Color["hex"]
): [Color, React.Dispatch<React.SetStateAction<Color>>];
/**
 * Returns a stateful [Color](https://github.com/Wondermarin/react-color-palette#color), and a function to update it.
 * @param model RGB.
 * @param initColor Color in RGB model.
 */
export function useColor(
  model: "rgb",
  initColor: Color["rgb"]
): [Color, React.Dispatch<React.SetStateAction<Color>>];
/**
 * Returns a stateful [Color](https://github.com/Wondermarin/react-color-palette#color), and a function to update it.
 * @param model HSV.
 * @param initColor Color in HSV model.
 */
export function useColor(
  model: "hsv",
  initColor: Color["hsv"]
): [Color, React.Dispatch<React.SetStateAction<Color>>];
export function useColor<M extends keyof Color, C extends Color[M]>(
  model: M,
  initColor: C
): [Color, React.Dispatch<React.SetStateAction<Color>>] {
  const [color, setColor] = useState(() => {
    switch (model) {
      case "hex":
        return toColor("hex", initColor as Color["hex"]);
      case "rgb":
        return toColor("rgb", initColor as Color["rgb"]);
      case "hsv":
        return toColor("hsv", initColor as Color["hsv"]);
      default:
        return toColor("hex", "#121212");
    }
  });

  return [color, setColor];
}
