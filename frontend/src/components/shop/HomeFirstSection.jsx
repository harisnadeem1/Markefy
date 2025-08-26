import React from "react";

const ShopifySection = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        
        {/* Top Label with lines */}
        <div className="flex items-center justify-center mb-3">
          <span className="h-[1px] w-10 bg-gray-300 mr-3"></span>
          <p
            className="text-sm tracking-wider text-gray-500 uppercase"
            style={{ fontFamily: "'Inconsolata', monospace" }}
          >
            Do It Yourself
          </p>
          <span className="h-[1px] w-10 bg-gray-300 ml-3"></span>
        </div>

        {/* Heading */}
        <h2
          className="text-3xl md:text-3xl mb-4"
          style={{
            fontFamily: "'Nunito Sans', sans-serif",
            color: "#0071bc",
            fontWeight: "500",
          }}
        >
          Add premium sections to any website
        </h2>

        {/* Subtext */}
        <p
          className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: "'Nunito Sans', sans-serif" }}
        >
          Our premium <span className="font-semibold">section templates</span> 
          are designed to work seamlessly across platforms —{" "}
          <strong>Shopify</strong>, <strong>WordPress</strong>,{" "}
          <strong>WooCommerce</strong>, or even{" "}
          <strong>custom-coded websites</strong>.  
          
          With responsive layouts, clean code, and full flexibility, you can 
          build and customize beautiful pages{" "}
          <span className="italic font-semibold">without hiring a developer.</span>
          <br />
          <br />

          Pay once — use forever.
        </p>
      </div>
    </section>
  );
};

export default ShopifySection;
