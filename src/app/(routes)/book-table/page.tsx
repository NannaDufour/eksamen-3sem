import NavBar from "@/components/NavBar";
import SubpageHero from "@/components/SubpageHero";
import SectionSubTitle from "@/components/SectionSubTitle";
import TableOverview from "@/components/TableOverview";
import BookATableForm from "@/components/BookATableForm";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import {createReservation} from "@/app/actions/actions";

interface NightclubEvent {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isFeatured: boolean;
  asset: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

interface ReservationType {
  name: string;
  email: string;
  table: string;
  guests: string;
  date: string;
  phone: string;
  eventId: number;
  id: number;
}

export default async function BookTable({ searchParams }: { searchParams: Promise<{ eventId?: string; table?: string }> }) {
  const { eventId, table } = await searchParams;

  const getEvents = await fetch("http://localhost:4000/events", {
    method: "GET",
  });
  const events: NightclubEvent[] = await getEvents.json();

  let bookings: ReservationType[] = [];

  if (eventId) {
    const getBookings = await fetch(`http://localhost:4000/reservations?eventId=${eventId}`, {
      method: "GET",
    });
    bookings = await getBookings.json();
  }

  const bookedTables = bookings.map((booking) => booking.table);

  const hasEvent = Boolean(eventId);

  return (
    <section className="bg-background">
      <NavBar />
      <SubpageHero title="BOOK TABLE" />
      <Form action={createReservation}>
        <TableOverview hasEvent={hasEvent} bookedTables={bookedTables} />
        <SectionSubTitle title="BOOK A TABLE" />
        <BookATableForm events={events} eventId={eventId} table={table} />
        <Button variant="formButton" size="formButton">
          Reserve
        </Button>
      </Form>
    </section>
  );
}
