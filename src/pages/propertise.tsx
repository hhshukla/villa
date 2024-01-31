import CommonBanner from "@/components/CommonBanner/CommonBanner";
import ContentBlockTestimonial from "@/components/ContentBlockTestimonial/ContentBlockTestimonial";
import MainHeader from "@/components/MainHeader/MainHeader";
import TabFilter from "@/components/TabFilter/TabFilter";
import React from "react";

const propertise = () => {
  return (
    <>
      <MainHeader />
      <CommonBanner />
      <ContentBlockTestimonial />
      <TabFilter />
    </>
  );
};

export default propertise;
