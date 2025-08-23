import React from "react";

const ScrollingBanner = () => {
  const bannerItems = [
    "Clean and professional HTML & CSS blocks",
    "Instant downloads",
    "Copy, paste, and launch your store faster",
    "High-quality, reusable code components",
  ];

  return (
    <div
      className="text-white py-2 overflow-hidden relative z-50 uppercase"
      style={{ fontFamily: "'Inconsolata', sans-serif", backgroundColor: "#0071bc" }}
    >
      <style>
        {`
          .scrolling-wrapper {
            display: inline-flex;
            white-space: nowrap;
            animation: scroll-left 18s linear infinite;
          }

          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); } /* only 1 copy scrolls out */
          }
        `}
      </style>

      <div className="overflow-hidden whitespace-nowrap">
        <div className="scrolling-wrapper">
          {/* render 3 copies */}
          {Array(3).fill(null).map((_, copyIndex) => (
            <div key={copyIndex} className="flex">
              {bannerItems.map((item, idx) => (
                <span
                  key={`${copyIndex}-${idx}`}
                  className="px-6 sm:px-10 md:px-16 text-sm sm:text-sm font-normal whitespace-nowrap"
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
