"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SectionSubTitle from "@/components/SectionSubTitle";
import TableOverview from "@/components/TableOverview";
import BookATableForm from "@/components/BookATableForm";
import { Button } from "@/components/ui/button";
import { createReservation } from "@/app/actions/actions";
import { reserveTableSchema, type BookForm } from "@/schema/formSchema";
import { useState } from "react";
import { useRouter } from "next/navigation";

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

const BookingForm = ({
  events,
  bookedTables,
  eventId,
  table,
  hasEvent,
}: BookingFormPropsType) => {
  const [serverMessage, setServerMessage] = useState("");

  const router = useRouter();

  const defaultValues = {
    name: "",
    email: "",
    phone: "",
    content: "",
    guests: "",
    tablenumber: table ? Number(table) : undefined,
    eventId: eventId ? Number(eventId) : undefined,
  } as unknown as BookForm;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookForm>({
    resolver: zodResolver(reserveTableSchema),
    mode: "onBlur",
    values: defaultValues,
  });

  const onSubmit: SubmitHandler<BookForm> = async (data) => {
    const result = await createReservation(data);
    setServerMessage(result.message);
    if (result.success) reset(defaultValues);
    router.replace("/book-table", { scroll: false });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TableOverview hasEvent={hasEvent} bookedTables={bookedTables} />
      <SectionSubTitle title="BOOK A TABLE" />
      <BookATableForm events={events} register={register} errors={errors} />
      <Button
        disabled={isSubmitting}
        variant="formButton"
        size="formButton"
        type="submit"
      >
        {isSubmitting ? "Reserving" : "RESERVE"}
      </Button>
      {serverMessage && <p className="text-white mt-3">{serverMessage}</p>}
    </form>
  );
};

export default BookingForm;
