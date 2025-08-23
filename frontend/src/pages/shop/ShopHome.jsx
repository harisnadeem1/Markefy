import React from "react";
import HeroSection from "@/components/shop/HeroSection"; // 🔹 import your existing hero section

const ShopHome = () => {
  return (
    <div className="w-full">
      {/* 🔹 Reuse your existing hero section */}
      <HeroSection />

      {/* You can add more shop-specific sections below later if needed */}
    </div>
  );
};

export default ShopHome;
