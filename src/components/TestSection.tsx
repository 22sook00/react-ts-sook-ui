import React, { forwardRef } from "react";

type TestType = {
  idx?: number;
  ref: any;
};

export const TestSection = forwardRef((props: any, ref: any) => {
  const bgColor = [
    "bg-sook-primary-light",
    "bg-sook-point-red-light",
    "bg-sook-point-blue-light",
    "bg-sook-point-indigo-light",
  ];

  const sectionHeight = ["h-[80vh]", "h-[40vh]", "h-[50vh]", "h-[30vh]"];

  return (
    <section
      id={`nav-${props.idx}`}
      ref={(reviewRef) => (ref.current[props.idx] = reviewRef)}
      className={` text-4xl font-extrabold default-flex w-full  ${
        sectionHeight[props.idx - 1]
      } ${bgColor[props.idx - 1]}`}
    >
      TestSection {props.idx}
    </section>
  );
});
