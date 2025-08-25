import React from "react";

const ShopifySection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center"> {/* 🔹 max width applied */}
        
        {/* Top Label */}
        <p
          className="text-sm  tracking-wider text-gray-500 uppercase mb-3"
          style={{ fontFamily: "'Inconsolata', monospace" }}
        >
          Do It Yourself
        </p>

        {/* Heading */}
        <h2
          className="text-3xl md:text-3xl  mb-4"
          style={{ fontFamily: "'Nunito Sans', sans-serif", color:"#0071bc",fontWeight:"500" }}
        >
          Add a section anywhere on your Shopify store
        </h2>

        {/* Subtext */}
        <p
          className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily:"'Nunito Sans', sans-serif" }}
        >
          We create premium Liquid section templates that perfectly fit your
          store and give you the flexibility to customize them{" "}
          <span className="italic font-semibold">without</span> hiring a
          developer to do it for you.
          <br />
          Pay just once – no need for another subscription.
        </p>
      </div>

      {/* Video
      <div className="mt-12 max-w-3xl mx-auto">
        <video
          className="rounded-lg shadow-lg w-full h-auto"
          src="/videos/shopify-section-demo.mp4" // 🔹 replace with your video path
          autoPlay
          loop
          muted
          controls
        />
      </div> */}
    </section>
  );
};

export default ShopifySection;
