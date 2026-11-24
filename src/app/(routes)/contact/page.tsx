import NavBar from "@/components/NavBar";
import SubpageHero from "@/components/SubpageHero";
import ContactUsSection from "@/components/ContactUsSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <SubpageHero title="CONTACT US" />
      <ContactUsSection />
    </>
  );
}
