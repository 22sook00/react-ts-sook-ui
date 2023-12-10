import { hex2rgb, hsv2rgb, rgb2hex, rgb2hsv, toHex } from "./convert";

/**
 * Converts the color from HEX model to [Color](https://github.com/Wondermarin/react-color-palette#color).
 * @param model HEX.
 * @param color Color in HEX model (3-6 digit) or [HTML Color Names](https://www.w3.org/wiki/CSS/Properties/color/keywords).
 */
export function toColor(model: "hex", color: any["hex"]): any;
/**
 * Converts the color from RGB model to [Color](https://github.com/Wondermarin/react-color-palette#color).
 * @param model RGB.
 * @param color Color in RGB model.
 */
export function toColor(model: "rgb", color: any["rgb"]): any;
/**
 * Converts the color from HSV model to [Color](https://github.com/Wondermarin/react-color-palette#color).
 * @param model HSV.
 * @param color Color in HSV model.
 */
export function toColor(model: "hsv", color: any): any;
export function toColor<M extends keyof any, C extends any[M]>(
  model: M,
  color: C
): any {
  let hex = toHex("#121212");
  let rgb = hex2rgb(hex);
  let hsv = rgb2hsv(rgb);

  if (model === "hex") {
    const value = color;

    hex = toHex(value as any);
    rgb = hex2rgb(hex);
    hsv = rgb2hsv(rgb);
  } else if (model === "rgb") {
    const value = color;

    rgb = value as any;
    hex = rgb2hex(rgb);
    hsv = rgb2hsv(rgb);
  } else if (model === "hsv") {
    const value = color;

    hsv = value as any;
    rgb = hsv2rgb(hsv);
    hex = rgb2hex(rgb);
  }

  return { hex, rgb, hsv };
}
