import React from "react";
import Navbar from "../Components/Navbar";
import TeamSection from "../Components/Team/TeamSection";
import TeamCollageBanner from "../Components/Team/TeamCollageBanner";
import Footer from "../Components/Footer";

export default function Team() {
  return (
    <>
      <Navbar />
      <TeamCollageBanner />
      <TeamSection />
      <Footer />
    </>
  );
}
