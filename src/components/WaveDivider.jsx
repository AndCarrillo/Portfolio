import React from "react";

const WaveDivider = ({
  flip = false,
  className = "",
  color = "currentColor",
}) => (
  <div className={`relative overflow-hidden ${flip ? "rotate-180" : ""}`}>
    {/* Onda trasera */}
    <svg
      className="absolute top-0 left-0 w-[200%] h-20 animate-waveReverse opacity-70"
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
    >
      <path
        d="M0,30 C400,150 900,-50 1200,0 L1200,70 L0,0 Z"
        fill={color}
        className="transition-colors duration-700 ease-in-out dark:fill-surface-dark"
      />
    </svg>

    {/* Onda delantera */}
    <svg
      className={`relative block w-[200%] h-20 animate-wave ${className}`}
      viewBox="0 0 1200 100"
      preserveAspectRatio="none"
    >
      <path
        d="M0,40 C400,150 900,-50 1200,70 L1200,0 L0,0 Z"
        fill={color}
        className="transition-colors duration-700 ease-in-out dark:fill-surface-dark"
      />
    </svg>
  </div>
);

export default WaveDivider;
