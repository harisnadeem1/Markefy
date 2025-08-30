import React, { useState } from "react";
import { PlayCircle } from "lucide-react";

const ProductVideoSection = ({ videoUrl }) => {
  if (!videoUrl) return null; // 🔹 don't render if no video

  const API_BASE = import.meta.env.VITE_API_BASE_URL.replace("/api", "");
  const fullVideoUrl = `${API_BASE}${videoUrl}`;

  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="w-[80%] mx-auto py-16">
      <h2 className="text-4xl font-bold mb-8 text-center text-blue-600">
        How this section is customized
      </h2>

      <div className="bg-white rounded-3xl shadow-xl p-6 flex justify-center">
        {!showVideo ? (
          <div
            className="relative w-full max-w-4xl h-[500px] flex items-center justify-center rounded-2xl cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 overflow-hidden"
            onClick={() => setShowVideo(true)}
          >
            {/* Overlay Text */}
            <h3 className="text-white text-3xl md:text-4xl font-bold z-10 text-center px-4">
              Customizing your section
            </h3>

            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <PlayCircle
                className="w-28 h-28 text-white opacity-80 hover:opacity-100 transition"
                strokeWidth={1.5}
              />
            </div>

            {/* Decorative blur glow */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/20 rounded-full blur-3xl"></div>
          </div>
        ) : (
          <video
            src={fullVideoUrl}
            controls
            autoPlay
            className="rounded-2xl max-w-4xl w-full h-[500px] object-contain shadow-md"
          />
        )}
      </div>
    </section>
  );
};

export default ProductVideoSection;
