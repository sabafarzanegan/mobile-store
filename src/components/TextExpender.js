"use client";

import { useState } from "react";

function TextExpender({ children }) {
  const [isExpended, setIsexpended] = useState(false);
  const displayedyext = isExpended
    ? children
    : children.split(" ").slice(0, 40).join(" ") + "...";
  return (
    <span>
      {displayedyext}
      <button
        onClick={() => setIsexpended(!isExpended)}
        className="text-blue-300 border-b border-blue-300 leading-3 pb-1">
        {isExpended ? "بستن" : "بیشتر"}
      </button>
    </span>
  );
}

export default TextExpender;
