export function getColorCoordinates(
  color: any,
  width: number,
  height: number
): [number, number] {
  const { s, v } = color.hsv;

  const x = (s / 100) * width;
  const y = ((100 - v) / 100) * height;

  return [x, y];
}

export function getHueCoordinates(h: number, height: number) {
  //const x = (h / 360) * width;
  const y = (h / 360) * height;

  return y;
}

export function getAlphaCoordinates(a: number, width: number): number {
  const x = a * width;

  return x;
}
