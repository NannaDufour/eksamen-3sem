import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import WelcomeSection from "@/components/WelcomeSection";
import GallerySection from "@/components/GallerySection";
import FeaturedEventsSection from "@/components/FeaturedEventsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <NavBar />
      <WelcomeSection />
      <GallerySection />
      <FeaturedEventsSection />
    </>
  );
}
