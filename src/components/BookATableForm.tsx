"use client";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import EventSelect from "./EventSelect";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { reserveTableSchema } from "@/schema/formSchema";
import * as z from "zod";
import { createReservation } from "@/app/actions/actions";
import { useState } from "react";

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

type EventsType = {
  events: NightclubEvent[];
  eventId?: string;
  table?: string;
};

type BookForm = z.infer<typeof reserveTableSchema>;
const initialState = {
  name: "",
  email: "",
  content: "",
};

const BookATableForm = ({ events, eventId, table }: EventsType) => {
  const [serverMessage, setServerMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<BookForm>({
    resolver: zodResolver(reserveTableSchema),
    mode: "onBlur",
    defaultValues: initialState,
  });

  const onSubmit: SubmitHandler<BookForm> = async (data) => {
    const result = await createReservation(data);
    setServerMessage(result.message);
    if (result.success) reset(initialState);
  };
  return (
    <div>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
        <FormInput {...register("name")} type="text" placeholder="Your Name" />
        <FormInput
          {...register("email")}
          type="email"
          placeholder="Your Email"
        />
        <FormInput
          {...register("tablenumber")}
          type="number"
          placeholder="Table Number"
          value={table ?? ""}
          readOnly
        />
        <FormInput
          {...register("guests")}
          type="number"
          placeholder="Number of Guest"
        />
        <EventSelect events={events} eventId={eventId} />
        <FormInput
          {...register("phone")}
          type="tel"
          placeholder="Your Contact Number"
        />
      </div>
      <FormTextArea {...register("content")} placeholder="Your Comment" />
    </div>
  );
};

export default BookATableForm;
