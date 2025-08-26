import React from "react";
import HeroSection from "@/components/shop/HeroSection"; // 🔹 import your existing hero section
import ShopifySection from "@/components/shop/HomeFirstSection"; // 🔹 import your existing hero section
import CustomScrollingBanner from "@/components/shop/CustomScrollingBanner"; // 🔹 import the new customizable banner
import InstallSteps from "@/components/shop/InstallSteps"; // 🔹 import the install steps section
import FeaturedProducts from "@/components/shop/ProductSlider"; // 🔹 import the product slider
import ReviewsSection from "@/components/shop/ReviewsSection"; // 🔹 import the reviews section

const ShopHome = () => {
  return (
    <div className="w-full">
      {/* 🔹 Reuse your existing hero section */}
      <HeroSection />
      <ShopifySection />
      <CustomScrollingBanner
        items={[
          "No code. Just add",
          "Drag & drop ready",
          "Edit in minutes",
        ]}
        backgroundColor="#000000"
        textColor="#fff"
        fontFamily="'Nunito Sans', sans-serif"
        fontSize="2.5rem"
        speed={20}
        spacing="10rem"
      />

      <InstallSteps />

      <FeaturedProducts />
      <ReviewsSection />

       




      {/* You can add more shop-specific sections below later if needed */}
    </div>
  );
};

export default ShopHome;
