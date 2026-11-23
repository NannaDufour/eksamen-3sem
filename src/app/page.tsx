import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import GallerySection from "@/components/GallerySection";
import FeaturedEventsSection from "@/components/FeaturedEventsSection";
import { Suspense } from "react";
import FallbackAnimation from "@/components/FallbackAnimation";

export default function Home() {
  return (
    <>
      <Suspense fallback={<FallbackAnimation />}>
        <Hero />
        <NavBar />
        <WelcomeSection />
        <FeaturedEventsSection />
        <GallerySection />
      </Suspense>
    </>
  );
}
