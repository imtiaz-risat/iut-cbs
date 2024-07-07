import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import InternBanner from "../Components/Intern/InternBanner";
import WinnersSection from "../Components/Intern/WinnersSection";
import DetailsAndVideo from "../Components/Intern/DetailsAndVideo";
import ImageCarousel from "../Components/Intern/ImageCarousel";

export default function Intern() {
  return (
    <>
      <Navbar />
      <InternBanner />
      <DetailsAndVideo />
      <ImageCarousel />
      <WinnersSection />
      <Footer />
    </>
  );
}
