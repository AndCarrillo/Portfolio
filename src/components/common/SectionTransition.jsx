// src/components/SectionTransition.jsx
import React from "react";

function SectionTransition({ direction = "down" }) {
  const gradient =
    direction === "down"
      ? "bg-gradient-to-b from-transparent to-[#fffaf0] dark:to-[#1e1f26]"
      : "bg-gradient-to-t from-transparent to-[#fffaf0] dark:to-[#1e1f26]";

  return <div className={`h-16 w-full ${gradient} pointer-events-none`} />;
}

export default SectionTransition;
