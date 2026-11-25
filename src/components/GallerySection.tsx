import GallerySlider from "./GallerySlider";
import SectionTitles from "./SectionTitles";

const GallerySection = async () => {
  const response = await fetch("http://localhost:4000/gallery", {
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
