import NavBar from "@/components/NavBar";
import SubpageHero from "@/components/SubpageHero";
import SectionSubTitle from "@/components/SectionSubTitle";
import TableOverview from "@/components/TableOverview";
import BookATableForm from "@/components/BookATableForm";
import Form from "next/form";

export default function Home() {
  return (
    <section className="bg-background">
      <NavBar />
      <SubpageHero title="BOOK TABLE" />
      <Form action="/book-table">
        <TableOverview />
        <SectionSubTitle title="BOOK A TABLE" />
        <BookATableForm />
      </Form>
    </section>
  );
}
