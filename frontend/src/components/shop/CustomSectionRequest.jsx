import React from "react";

const CustomSectionRequest = () => {
  return (
    <section
      className="relative w-screen h-auto md:h-screen bg-fixed bg-center bg-cover flex items-center justify-center md:justify-end py-16"
      style={{ backgroundImage: "url('/shop/collection/request.webp')" }}
    >
      {/* Overlay Card */}
      <div className="bg-white/70 p-8 md:p-12 w-[90%] max-w-xl rounded-lg shadow-lg text-center md:mr-12">
        <h2
          className="text-2xl md:text-3xl font-semibold mb-4"
          style={{ color: "#0071bc", fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Do you need something else?
        </h2>
        <p
          className="text-gray-700 mb-6 text-base"
          style={{ fontFamily: "'Inconsolata', monospace" }}
        >
          We would love to help you with a section built specifically for your
          needs.
        </p>
        <button
          className="px-8 py-3 bg-[#0071bc] text-white uppercase tracking-wide text-base"
          style={{ fontFamily: "'Inconsolata', monospace" }}
        >
          Request a Custom Section
        </button>
      </div>
    </section>
  );
};

export default CustomSectionRequest;
