export interface InteractiveOnChangeProps {
  readonly x: number;
  readonly y: number;
  readonly complete?: boolean;
}

export interface InteractiveProps {
  readonly className: string;
  readonly style?: React.CSSProperties;
  readonly onChange: ({ x, y, complete }: InteractiveOnChangeProps) => void;
  readonly children: React.ReactNode;
}
export interface Color {
  readonly hex: string;
  readonly rgb: ColorRGB;
  readonly hsv: ColorHSV;
}

interface ColorRGB {
  readonly r: number;
  readonly g: number;
  readonly b: number;
  readonly a?: number;
}

interface ColorHSV {
  readonly h: number;
  readonly s: number;
  readonly v: number;
  readonly a?: number;
}

export type OnChangeCallback = (color: Color) => void;

export interface ColorPickerProps {
  /**
   * The width of the color picker.
   */
  readonly width: number;
  /**
   * The height of the color picker.
   */
  readonly height?: number;
  /**
   * The current [Color](https://github.com/Wondermarin/react-color-palette#color).
   */
  readonly color: Color;
  /**
   * The function that accepts the updated [Color](https://github.com/Wondermarin/react-color-palette#color) as a single argument.
   */
  readonly onChange: OnChangeCallback;
  /**
   * .
   */
  readonly onChangeComplete?: OnChangeCallback;
  /**
   * Hide HEX field.
   */
  readonly hideHEX?: boolean;
  /**
   * Hide RGB field.
   */
  readonly hideRGB?: boolean;
  /**
   * Hide HSV field.
   */
  readonly hideHSV?: boolean;
  /**
   * Enable alpha channel.
   */
  readonly alpha?: boolean;
  /**
   * Color theme.
   */
  readonly dark?: boolean;
}

//alpha
export interface AlphaProps {
  readonly width: number;
  readonly color: Color;
  readonly onChange: OnChangeCallback;
  readonly onChangeComplete?: OnChangeCallback;
}
//field
export interface UpperFloorProps {
  readonly color: Color;
  readonly hideHEX: boolean;
  readonly onChange: OnChangeCallback;
}

export interface LowerFloorProps {
  readonly color: Color;
  readonly hideRGB: boolean;
  readonly hideHSV: boolean;
  readonly alpha: boolean;
  readonly onChange: OnChangeCallback;
}

export interface FieldsProps {
  readonly color: Color;
  readonly hideHEX: boolean;
  readonly hideRGB: boolean;
  readonly hideHSV: boolean;
  readonly alpha: boolean;
  readonly onChange: OnChangeCallback;
}
//hue
export interface HueProps {
  readonly width: number | any;
  readonly height: number;
  readonly vertical?: boolean;
  readonly color: Color;
  readonly onChange: OnChangeCallback;
  readonly onChangeComplete?: OnChangeCallback;
}

//interactive
export interface InteractiveOnChangeProps {
  readonly x: number;
  readonly y: number;
  readonly complete?: boolean;
}

export interface InteractiveProps {
  readonly className: string;
  readonly style?: React.CSSProperties;
  readonly onChange: ({ x, y, complete }: InteractiveOnChangeProps) => void;
  readonly children: React.ReactNode;
}

//satu
export interface SaturationProps {
  readonly width: number;
  readonly height: number;
  readonly color: Color;
  readonly onChange: OnChangeCallback;
  readonly onChangeComplete?: OnChangeCallback;
}
