import React from "react";

const CustomScrollingBanner = ({
  items = [], // just text strings or { text, fontFamily, color }
  backgroundColor = "#0071bc",
  textColor = "#ffffff",
  fontFamily = "'Inconsolata', monospace",
  fontSize = "1.25rem", // ~20px
  speed = 18, // seconds
  spacing = "4rem", // space between items
}) => {
  return (
    <div
      className="py-2 overflow-hidden relative z-50"
      style={{
        fontFamily,
        backgroundColor,
        color: textColor,
      }}
    >
      <style>
        {`
          .scrolling-wrapper {
            display: inline-flex;
            white-space: nowrap;
            animation: scroll-left ${speed}s linear infinite;
          }

          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}
      </style>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="scrolling-wrapper">
          {/* Repeat 3x for infinite scroll */}
          {Array(3).fill(null).map((_, copyIndex) => (
            <div key={copyIndex} className="flex items-center">
              {items.map((item, idx) => {
                const textItem =
                  typeof item === "string" ? { text: item } : item;
                return (
                  <span
                    key={`${copyIndex}-${idx}`}
                    className="font-normal whitespace-nowrap"
                    style={{
                      fontFamily: textItem.fontFamily || fontFamily,
                      color: textItem.color || textColor,
                      fontSize,
                      marginRight: spacing,
                    }}
                  >
                    {textItem.text}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomScrollingBanner;
