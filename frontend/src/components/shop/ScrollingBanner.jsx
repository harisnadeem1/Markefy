import React from "react";

const ScrollingBanner = () => {
  const bannerItems = [
    "Clean and professional HTML & CSS blocks",
    "Instant downloads",
    "Copy, paste, and launch your store faster",
    "High-quality, reusable code components",
  ];

  return (
    <div className="bg-blue-600 text-white py-2 overflow-hidden relative z-50">
      <style>
        {`
          .scrolling-wrapper {
            display: inline-flex;
            white-space: nowrap;
            animation: scroll-left 18s linear infinite;
          }

          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
        `}
      </style>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="scrolling-wrapper">
          {Array(3).fill(null).map((_, copyIndex) => (
            <div key={copyIndex} className="flex">
              {bannerItems.map((item, idx) => (
                <span
                  key={`${copyIndex}-${idx}`}
                  className="px-6 sm:px-10 md:px-16 text-sm font-normal whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingBanner;