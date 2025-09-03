import React from "react";
import WaveDivider from "../layout/WaveDivider";
import SectionTransition from "./SectionTransition";

const Section = ({
  id,
  children,
  withWave = false,
  flipWave = false,
  withTransition = false,
  bgColor = "",
  className = "",
  contentClassName = "",
}) => {
  return (
    <section
      id={id}
      className={`relative scroll-mt-10 ${
        withWave || withTransition ? "-mt-[1px]" : ""
      } ${bgColor} ${className}`}
    >
      <div className={`relative z-0 py-10 md:py-0 ${contentClassName}`}>
        {children}
      </div>
      {withWave && (
        <WaveDivider
          flip={flipWave}
          className="h-30 text-pastel1 dark:text-gray-900"
        />
      )}

      {withTransition && (
        <SectionTransition direction={flipWave ? "up" : "down"} />
      )}
    </section>
  );
};

export default Section;
