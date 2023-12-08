import React, { useCallback } from "react";
import "../index.css";

interface ButtonProps {
  onClick: () => void;
  disabled?: boolean;
  text: string;
}

export const Button = ({ onClick, text, disabled = false }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${
        disabled
          ? "bg-gray-200 hover:bg-gray-200 text-gray-400"
          : "bg-blue-500 hover:bg-blue-700 text-white"
      } font-bold py-2 px-4 rounded`}
    >
      {text}
    </button>
  );
};
