import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/Home/HeroSection";
import AboutSection from "../Components/Home/AboutSection";
import EventsSection from "../Components/Home/EventsSection";
import CollabSection from "../Components/Home/CollabSection";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <CollabSection />
      <Footer />
    </div>
  );
}
