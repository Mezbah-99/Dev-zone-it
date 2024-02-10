import Testimonials from "@/components/AboutUs/Testimonials";
import CDSupport from "@/components/CourseDetails/CDSupport";
import CDetailsCurriculum from "@/components/CourseDetails/CDetailsCurriculum";
import DetailsBanner from "@/components/CourseDetails/DetailsBanner";
import DetailsBannerThree from "@/components/CourseDetails/DetailsBannerThree";
import DetailsBannerTwo from "@/components/CourseDetails/DetailsBannerTwo";
import React from "react";

const page = () => {
  return (
    <div>
      <DetailsBanner />
      <DetailsBannerTwo />
      <CDetailsCurriculum />
      <DetailsBannerThree />
      <CDSupport />

      <Testimonials />
      
    </div>
  );
};

export default page;
