import React, { SetStateAction, useEffect, useState } from "react";
import { useColor } from "../../hook/useColor";
import ColorpickerContainer from "./ColorpickerContainer";
import "react-color-palette/lib/css/styles.css";
import { ThemeProps } from "../../interface/theme";
import { Color } from "../../interface/colorpicker";

export interface ColorpickerType extends ThemeProps {
  size?: "sm" | "md" | "lg";
  /**clickable한 input가 있으며, 해당 인풋에 선택한 컬러가 표시되어 보인다. */
  withInput?: boolean;
  /** colorpicker input 액션을 비활성화 시킵니다. */
  disabled?: boolean;
  /** Eyedropper 기능을 추가/제외 시킬 수 있다. */
  isEyedropper?: boolean;
  /** 위의 조건이 없을 경우 버튼을 커스터마이징 할 수 있다 */
  customStyle?: string | number;
  getColor?: React.Dispatch<SetStateAction<Color>>;
}

export const Colorpicker = ({
  size = "md",
  disabled = false,
  withInput = true,
  isEyedropper = true,
  customStyle,
  theme,
  getColor,
}: ColorpickerType) => {
  const [color, setColor] = useColor("hex", "#a8b0c6");
  const [isOpenColor, setIsOpenColor] = useState<boolean>(false);

  const sizeProps =
    size === "sm"
      ? ["w-[200px] h-7 grid-cols-[28px_1fr]  gap-2", "  text-xs"]
      : size === "md"
      ? ["w-[254px] h-10 grid-cols-[40px_1fr]  gap-2", " text-sm "]
      : size === "lg"
      ? ["w-[280px] h-12 grid-cols-[48px_1fr]  gap-3", " text-base"]
      : [customStyle];

  useEffect(() => {
    isOpenColor && getColor && getColor(color);
  }, [color, isOpenColor]);

  return (
    <main
      id="colorpickerContainer"
      className={`${withInput ? "relative" : "unset"}`}
    >
      <section
        className={`${sizeProps[0] ?? customStyle} ${
          withInput ? "grid" : "hidden"
        }`}
      >
        <div
          className={`col-span-1 border rounded-lg  h-full border-[${color.hex}] `}
          style={{ background: color.hex }}
        />
        <button
          disabled={disabled}
          onClick={() => setIsOpenColor(!isOpenColor)}
          className={`${sizeProps[1] ?? customStyle} 
      ${
        disabled
          ? "cursor-not-allowed text-gray-dark border-gray-200 "
          : "cursor-pointer border-gray-300 "
      }
           border px-2 h-full flex items-center rounded-md `}
        >
          {color.hex}
        </button>
      </section>
      {!withInput && (
        <ColorpickerContainer
          color={color}
          onChange={setColor}
          setIsOpenColor={setIsOpenColor}
          withInput={withInput}
          isEyedropper={isEyedropper}
          width={size === "sm" ? 160 : size === "md" ? 200 : 280}
          theme={theme}
        />
      )}
      {isOpenColor && (
        <ColorpickerContainer
          color={color}
          onChange={setColor}
          setIsOpenColor={setIsOpenColor}
          withInput={withInput}
          isEyedropper={isEyedropper}
          width={size === "sm" ? 160 : size === "md" ? 200 : 240}
          theme={theme}
        />
      )}
    </main>
  );
};
