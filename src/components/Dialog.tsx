import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Button } from "./Button";

export type DialogProps = {
  size?: "sm" | "md" | "lg";
  handleClosePopup: () => void;
  handleConfirmPopup: () => void;
  handleBackPopup?: () => void;
  children: React.ReactNode;
  bottomChildren?: React.ReactNode;
  cancelText?: string;
  confirmText?: string;
  title?: string;
  type?: "button" | "submit";
  disabled?: boolean;
  isXIcon?: boolean;
  isBack?: boolean;
  isFixedBottom?: boolean;
  isExtraButton?: boolean;
  isLoading?: boolean;
  isDimmed?: boolean;
};
export const Dialog = ({
  size = "md",
  handleClosePopup,
  handleConfirmPopup,
  handleBackPopup,
  children,
  bottomChildren,
  cancelText = "닫기",
  confirmText = "확인",
  title = "타이틀",
  type = "button",
  disabled = false,
  isXIcon = false,
  isBack = false,
  isFixedBottom = true,
  isExtraButton = false,
  isLoading = false,
  isDimmed = false,
  ...props
}: DialogProps) => {
  const ref = useRef<HTMLDivElement | any>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    if (document) {
      const dom = document.getElementById("dialog-root");
      ref.current = dom;
    }
    document.body.classList.add("sook-hidden-scroll");

    return () => {
      // 현재 떠 있는 다이얼로그가 없을 떄 배경 스크롤 막기 해제
      if (document.querySelectorAll("#dialog-root > div").length === 0) {
        document.body.classList.remove("sook-hidden-scroll");
      }
    };
  }, []);

  const modalSize =
    size === "sm"
      ? "w-[400px] min-h-[200px] max-h-[500px]"
      : size === "md"
      ? "w-[620px] min-h-[400px] max-h-[600px]"
      : "w-[800px] min-h-[500px] max-h-[700px]";

  if (ref.current && mounted) {
    return createPortal(
      <div
        className="
      animate-showmodal-bg
      default-fixed flex flex-col justify-center items-center  w-full h-full bg-black-dark/70 text-black-dark overflow-y-scroll z-10"
      >
        <div
          className="absolute top-0 left-0 w-full h-full overflow-hidden"
          onClick={handleClosePopup}
        />
        <div
          className={`relative flex flex-col p-0 bg-white animate-showmodal-box shadow-md overflow-hidden rounded-md ${modalSize}`}
        >
          {/*헤더*/}
          <header>
            <div
              className="flex justify-between items-center w-full bg-white border-b-2
             py-3 px-7 "
            >
              <div className="w-6 h-6" />
              <p className="font-semibold whitespace-nowrap text-ellipsis overflow-hidden w-[80%] text-lg leading-4 text-center">
                {title}
              </p>

              <div
                className="w-6 h-6 cursor-pointer"
                onClick={handleClosePopup}
              >
                <XMarkIcon />
              </div>
            </div>
          </header>

          {/*바디*/}
          <section className="py-5 px-6 m-0 h-full overflow-scroll">
            {children}
          </section>
          <section className="default-flex justify-end p-4">
            {handleClosePopup && (
              <Button
                theme="success"
                isOutline
                text={cancelText}
                onClick={handleClosePopup}
              />
            )}
            {handleConfirmPopup && (
              <Button
                theme="success"
                text={confirmText}
                onClick={handleConfirmPopup}
              />
            )}
          </section>
        </div>
      </div>,
      ref.current
    );
  }

  return null;
};
