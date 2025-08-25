import React, { useState } from "react";
import { PlayCircle } from "lucide-react";

const ProductVideoSection = ({ videoUrl }) => {
  if (!videoUrl) return null; // 🔹 don't render if no video

  const API_BASE = import.meta.env.VITE_API_BASE_URL.replace("/api", "");
  const fullVideoUrl = `${API_BASE}${videoUrl}`;

  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="w-[80%] mx-auto py-16" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      <h2
        className="text-4xl font-bold mb-6 text-center"
        style={{ color: "#0071bc" }}
      >
        How this section is customized
      </h2>

      <div className="bg-gray-100 rounded-lg shadow-lg p-4 flex justify-center">
        {!showVideo ? (
          <div
            className="relative w-full max-w-4xl h-[500px] flex items-center justify-center rounded-lg cursor-pointer"
            style={{ backgroundColor: "#0071bc" }}
            onClick={() => setShowVideo(true)}
          >
            {/* Overlay Text */}
            <h3 className="text-white text-4xl font-bold">
              Customizing your section
            </h3>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle
                className="w-28 h-28 text-white opacity-70 hover:opacity-100 transition"
                strokeWidth={1.5} // 👈 thinner lines
              />
            </div>
          </div>
        ) : (
          <video
            src={fullVideoUrl}
            controls
            autoPlay
            className="rounded-lg max-w-4xl w-full h-[500px] object-contain"
          />
        )}
      </div>
    </section>
  );
};

export default ProductVideoSection;
