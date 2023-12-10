import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "./Button";

export type DialogProps = {
  title?: string;
  size?: "sm" | "md" | "lg";
  handleClosePopup: () => void;
  handleConfirmPopup: () => void;
  children: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  isXIcon?: boolean;
  isFixedButton?: boolean;
  isOpenModal?: boolean;
};
export const Dialog = ({
  title,
  size = "md",
  handleClosePopup,
  handleConfirmPopup,
  children,
  cancelText = "닫기",
  confirmText = "확인",
  type = "button",
  disabled = false,
  isXIcon = true,
  isFixedButton = true,
}: DialogProps) => {
  const ref = useRef<HTMLDivElement | any>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    let dialogBodyDiv = document.createElement("div");
    dialogBodyDiv.id = "dialog-root";
    document.body.appendChild(dialogBodyDiv);
    if (document) {
      const dom = document.getElementById("dialog-root");
      ref.current = dom;
    }
    document.body.classList.add("sook-hidden-scroll");

    return () => {
      // 현재 떠 있는 다이얼로그가 없을 떄 배경 스크롤 막기 해제
      const dialogToRemove = document.getElementById("dialog-root");
      if (dialogToRemove) {
        document.body.removeChild(dialogToRemove);
      }
      if (document.querySelectorAll("#dialog-root > div").length === 0) {
        document.body.classList.remove("sook-hidden-scroll");
      }
    };
  }, []);

  const modalSize =
    size === "sm"
      ? "w-[400px] min-h-[200px] max-h-[300px]"
      : size === "md"
      ? "w-[620px] min-h-[400px] max-h-[600px]"
      : "w-[800px] min-h-[500px] max-h-[700px]";

  if (ref.current && mounted) {
    return createPortal(
      <div
        className="
      animate-showmodal-bg
      default-fixed flex flex-col justify-center items-center  w-full h-full bg-sook-black-dark/70 text-sook-black-dark overflow-y-scroll z-10"
      >
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          onClick={handleClosePopup}
        />
        <div
          className={`relative flex flex-col p-0 bg-white animate-showmodal-box shadow-md overflow-hidden rounded-md ${modalSize}`}
        >
          {/*헤더*/}
          {title && (
            <header>
              <div
                className="flex justify-between items-center w-full bg-white border-b-2
             py-3 px-7 "
              >
                <div className="w-6 h-6" />
                <p className="default-title w-[80%]">{title}</p>
                {isXIcon ? (
                  <div
                    className="w-6 h-6 cursor-pointer"
                    onClick={handleClosePopup}
                  >
                    <XMarkIcon />
                  </div>
                ) : (
                  <div className="w-6 h-6 cursor-default"></div>
                )}
              </div>
            </header>
          )}

          {/*바디*/}
          <section className="py-5 px-6 m-0 h-full overflow-scroll">
            {children}
          </section>
          {isFixedButton && (
            <section className="default-flex justify-end p-4">
              <Button
                theme="success"
                isOutline
                text={cancelText}
                onClick={handleClosePopup}
              />
              {handleConfirmPopup && (
                <Button
                  type={type}
                  theme="success"
                  text={confirmText}
                  onClick={handleConfirmPopup}
                  disabled={disabled}
                />
              )}
            </section>
          )}
        </div>
      </div>,
      ref.current
    );
  }

  return null;
};
