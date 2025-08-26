import React from "react";
import { Link } from "react-router-dom";

const ShopAboutPage = () => {
  return (
    <div className="font-sans bg-white text-gray-700">
      {/* ---------- HERO SECTION ---------- */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 lg:px-12 py-20">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: "#0071bc" }}>
            About Markefy
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 max-w-xl">
            At Markefy, we create premium, pre-built website sections designed
            to make building modern websites faster, easier, and more affordable.
            Whether you’re running an online store, a portfolio, or a business
            site, our snippets give you the flexibility of custom code without
            the complexity or cost.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full h-full">
          <img
            src="/shop/about/hero1.webp"
            alt="About Markefy"
            className="w-full h-full object-cover rounded-lg shadow-lg"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* ---------- ABOUT CONTENT ---------- */}
      <section className="max-w-5xl mx-auto px-6 lg:px-12 py-16 space-y-12">
        {/* Who We Are */}
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0071bc" }}>
            Who We Are
          </h2>
          <p className="text-lg leading-relaxed">
            Markefy is a digital product studio dedicated to helping businesses
            and creators achieve professional results without the traditional
            barriers of time, cost, and complexity. We know the struggles of
            working with rigid themes, expensive developers, and bulky third-party
            apps. That’s why we’ve built a library of ready-to-use, lightweight
            code snippets — so you can create polished websites without compromise.
          </p>
        </div>

        {/* What We Offer */}
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0071bc" }}>
            What We Offer
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            From hero sections and testimonials to sliders, conversion blocks,
            and content layouts — our collection covers every essential element
            a modern website needs. Each snippet is:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Built with clean, responsive HTML, CSS, and JavaScript</li>
            <li>Lightweight, fast-loading, and free of unnecessary bloat</li>
            <li>Customizable to match your brand identity</li>
            <li>Compatible with Shopify, WordPress, and custom websites</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0071bc" }}>
            Why Choose Markefy
          </h2>
          <p className="text-lg leading-relaxed mb-4">
            Unlike standard templates or third-party apps, our snippets are
            designed to give you maximum flexibility with minimal effort.
            Everything is optimized for performance, accessibility, and
            consistency — so you can focus on your content and customers instead
            of worrying about code.
          </p>
          <p className="text-lg leading-relaxed">
            With Markefy, you don’t have to choose between expensive custom
            development and generic themes. You get modern, professional designs
            you can implement in minutes.
          </p>
        </div>

        {/* Vision */}
        <div>
          <h2 className="text-3xl font-bold mb-4" style={{ color: "#0071bc" }}>
            Our Vision
          </h2>
          <p className="text-lg leading-relaxed">
            We believe great design should be accessible to everyone. Our vision
            is to empower businesses of all sizes — from startups to established
            brands — with tools that save time, reduce costs, and deliver
            websites that stand out. Markefy is here to make professional web
            design achievable for all.
          </p>
        </div>

        {/* CTA */}
        <div className="pt-6">
          <Link
            to="/shop/collection"
            className="inline-block px-10 py-4 text-lg font-semibold bg-[#0071bc] text-white rounded-md shadow hover:bg-[#005fa3] transition"
          >
            Explore Our Collection →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ShopAboutPage;
