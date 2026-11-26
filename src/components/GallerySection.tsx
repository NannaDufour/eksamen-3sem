import GallerySlider from "./GallerySlider";
import SectionTitles from "./SectionTitles";

const GallerySection = async () => {
  const response = await fetch("https://night-club-api-eksamen.onrender.com/gallery", {
    method: "GET",
  });

  const images = await response.json();

  return (
    <section className="full-bleed bg-background bg-[url(/bg/pattern_bg.jpg)]">
      <SectionTitles title="NIGHT CLUB GALLERY" />
      <GallerySlider images={images} />
    </section>
  );
};

export default GallerySection;
