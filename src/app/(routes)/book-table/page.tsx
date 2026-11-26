import NavBar from "@/components/NavBar";
import SubpageHero from "@/components/SubpageHero";
import BookingForm from "@/components/BookingForm";

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

  const getEvents = await fetch("https://night-club-api-eksamen.onrender.com/events", {
    method: "GET",
  });
  const events: NightclubEvent[] = await getEvents.json();

  let bookings: ReservationType[] = [];

  if (eventId) {
    const getBookings = await fetch(`https://night-club-api-eksamen.onrender.com/reservations?eventId=${eventId}`, {
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
      <BookingForm hasEvent={hasEvent} events={events} bookedTables={bookedTables} eventId={eventId} table={table} />
    </section>
  );
}
