import React from "react";
import CollectionComponent from "../../components/shop/CollectionComponent";
import StepsSection from "../../components/shop/CollectionStepsSection";
import ReviewsSection from "@/components/shop/ReviewsSection"; // 🔹 import the reviews section
import CustomSectionRequest from "@/components/shop/CustomSectionRequest"; // 🔹 import the reviews section
import ComingSoonSection from "@/components/shop/CommingSoonSection"; // 🔹 import the reviews section

const CollectionPage = () => {
  return (
    <div className="w-full">
      <CollectionComponent />
     <StepsSection />


            <ReviewsSection />
            <CustomSectionRequest />
            <ComingSoonSection />


      
    </div>
  );
};

export default CollectionPage;
