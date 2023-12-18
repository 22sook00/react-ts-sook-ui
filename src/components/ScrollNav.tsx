import React, { RefObject, useEffect, useRef, useState } from "react";
import { ScrollNavType } from "../App";

const PRODUCT_NAV = [
  { idx: 1, name: "상품상세" },
  { idx: 2, name: "리뷰" },
  { idx: 3, name: "문의" },
  { idx: 4, name: "안내사항" },
];

export const ScrollNav = ({ scrollRef }: ScrollNavType) => {
  const [navIndex, setNavIndex] = useState<number | null>(null);
  const navRef = useRef<any>([]); // 이동할 각각의 컴포넌트에 대응하는 목차 버튼을 저장할 ref 배열
  const [isActive, setIsActive] = useState(false);
  const [clickNavIdx, setClicknavIdx] = useState<number | null>(null);

  useEffect(() => {
    // { behavior: 'smooth' } 속성을 주면 스크롤이 스르륵~ 올라가거나 내려가면서 이동하고, 없으면 아무 애니메이션 없이 바로 목적지를 보여준다.
    if (navIndex) {
      scrollRef.current[navIndex]?.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
      setNavIndex(null);
    }
  }, [scrollRef, navIndex]);

  // 현재 스크롤 위치에 따라 NavBar 버튼 스타일이 바뀌도록 클래스명을 지정한다.
  useEffect(() => {
    const changeNavBtnStyle = () => {
      scrollRef.current.forEach((ref: any, idx: number) => {
        if (ref.offsetTop - innerHeight / 3 < window.scrollY) {
          navRef.current.forEach((ref: any) => {
            ref.className = ref.className.replace(" active", "");
          });
          navRef.current[idx].className += " active";
        }
      });
    };

    window.addEventListener("scroll", changeNavBtnStyle);
    return () => {
      window.removeEventListener("scroll", changeNavBtnStyle);
    };
  }, [scrollRef]);

  return (
    <nav
      className="fixed top-0 shadow border-b border-sook-gray-default w-full py-4 px-6 bg-white 
    flex justify-around gap-4 text-xl navContainer z-10"
    >
      {PRODUCT_NAV.map(({ idx, name }) => (
        <span
          key={idx}
          ref={(ref) => (navRef.current[idx] = ref)}
          onClick={() => {
            setNavIndex(idx);
          }}
          //className={`${
          //  navIndex === idx
          //    ? "font-bold text-sook-black-dark"
          //    : " font-thin text-sook-gray-dark"
          //} cursor-pointer`}
          className="font-thin text-sook-gray-dark cursor-pointer"
        >
          {name}
        </span>
      ))}
    </nav>
  );
};
