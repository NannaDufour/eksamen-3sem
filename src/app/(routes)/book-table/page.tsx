import NavBar from "@/components/NavBar";
import SubpageHero from "@/components/SubpageHero";
import SectionSubTitle from "@/components/SectionSubTitle";
import TableOverview from "@/components/TableOverview";

export default function Home() {
  return (
    <section className="bg-background">
      <NavBar />
      <SubpageHero title="BOOK TABLE" />
      <TableOverview />
      <SectionSubTitle title="BOOK A TABLE" />
    </section>
  );
}
