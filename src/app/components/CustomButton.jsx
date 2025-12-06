"use client";
import React from "react";
import { hexToRgba } from "../utils/Utilities";

export default function CustomButton({ label, color = "#000000", icon, textColor = "#ffffff", textBold }) {
  return (
    <button
      className="flex items-center gap-3 p-2 hover:opacity-85 rounded-full shadow-lg transition-all"
      style={{ backgroundColor: color, color : textColor }}
    >
      <span className={`  whitespace-nowrap pl-3 ${textBold ? "font-semibold" : "font-normal"}`}>
        {label}
      </span>

      {icon && (
        <span
        style={{background : hexToRgba(textColor, 0.1), borderColor : hexToRgba(textColor, 0.1)}}
          className="p-2 rounded-full border flex items-center justify-center transition-all"
        >
          <span className="text-white">{icon}</span>
        </span>
      )}
    </button>
  );
}
