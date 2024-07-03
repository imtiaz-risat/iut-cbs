import React from "react";
import Navbar from "../Components/Navbar";
import HeroSection from "../Components/HeroSection";
import AboutSection from "../Components/AboutSection";
import EventsSection from "../Components/EventsSection";
import CollabSection from "../Components/CollabSection";
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
