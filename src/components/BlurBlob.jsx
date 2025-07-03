import React from "react";

const BlurBlob = ({ position, size, className = "" }) => {
  const { top, left } = position;
  const { width, height } = size;

  return (
    <div
      className={`absolute animate-floatingBlob ${className}`}
      style={{
        top,
        left,
        width,
        height,
        transform: "translate(-50%, -50%)",
        zIndex: 0,
      }}
    />
  );
};

export default BlurBlob;
