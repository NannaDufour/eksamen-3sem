"use client";

import SectionSubTitle from "@/components/SectionSubTitle";
import TableOverview from "@/components/TableOverview";
import BookATableForm from "@/components/BookATableForm";
import Form from "next/form";
import { Button } from "@/components/ui/button";
import createReservation from "@/app/actions/actions";

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

interface BookingFormPropsType {
  events: NightclubEvent[];
  bookedTables: string[];
  eventId?: string;
  table?: string;
  hasEvent: boolean;
}

const BookingForm = ({ events, bookedTables, eventId, table, hasEvent }: BookingFormPropsType) => {
  return (
    <Form action={createReservation}>
      <TableOverview hasEvent={hasEvent} bookedTables={bookedTables} />
      <SectionSubTitle title="BOOK A TABLE" />
      <BookATableForm events={events} eventId={eventId} table={table} />
      <Button variant="formButton" size="formButton">
        Reserve
      </Button>
    </Form>
  );
};

export default BookingForm;
