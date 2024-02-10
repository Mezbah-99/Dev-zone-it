import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Home/Hero/Hero";
import PopularCourses from "@/components/Courses/PopularCourses";
import Services from "@/components/Services/Services";
import AdmissionServices from "@/components/Services/AdmissionServices";
import IncludedServices from "@/components/Services/IncludedServices";
import Brands from "@/components/Brands/Brands";
import TrendingCourses from "@/components/Courses/TrendingCourses";
import AboutUs from "@/components/AboutUs/Testimonials";
import Testimonials from "@/components/AboutUs/Testimonials";

export default function Home() {
  
  return (
    <div>
      <Hero/>
      <PopularCourses/>
      <Services/>
      <AdmissionServices/>
      <IncludedServices/>
      <TrendingCourses/>
      <Brands/>
      <Testimonials/>
    </div>
  );
}
