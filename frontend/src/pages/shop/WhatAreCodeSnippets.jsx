import React from "react";
import FeaturedProducts from "../../components/shop/ProductSlider";

const WhatAreCodeSnippets = () => {
  return (
    <section>
      <div className="w-[80%] mx-auto py-16">
        {/* TEXT ONLY */}
        <div>
          <h2
            className="text-3xl font-bold mb-6"
            style={{ color: "#0071bc", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            What are code snippets?
          </h2>
          <p className="text-gray-700 text-lg mb-4 leading-relaxed">
            Code snippets are small, reusable pieces of code that solve a specific problem or provide a particular functionality. Instead of reinventing the wheel every time you start a project, snippets act like building blocks that can be quickly integrated into your website, app, or store.

They often include ready-to-use HTML, CSS, JavaScript, React components, or Shopify Liquid sections that follow best practices. For developers, snippets are like a personal toolkit that reduces repetitive work. For non-developers, they offer a plug-and-play solution without having to write everything from scratch.
          </p>

          <h3
            className="text-2xl font-semibold mt-8 mb-3"
            style={{ color: "#0071bc", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            Why use code snippets?
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 text-lg leading-relaxed">
            <li>Speeds up development</li>
            <li>Ensures consistency across your project</li>
            <li>Easy to customize and adapt</li>
            <li>Lets you focus on unique features instead of repeating basics</li>
          </ul>

          <h3
            className="text-2xl font-semibold mt-8 mb-3"
            style={{ color: "#0071bc", fontFamily: "'Nunito Sans', sans-serif" }}
          >
            How Markefy helps you
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            At <span className="font-bold">Markefy</span>, we create premium
            snippets designed for real business needs. Each snippet is{" "}
            <span className="font-semibold">clean, tested, and optimized</span>{" "}
            so you can drop it into your project with confidence. Whether you’re
            building a Shopify store, React app, or static site, our snippets
            make your workflow smoother.
          </p>
        </div>
      </div>

      {/* Featured Products Below */}
      <FeaturedProducts />
    </section>
  );
};

export default WhatAreCodeSnippets;
