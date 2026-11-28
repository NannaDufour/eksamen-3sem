"use client";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import EventSelect from "./EventSelect";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import type { BookForm } from "@/schema/formSchema";

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

type Props = {
  events: NightclubEvent[];
  register: UseFormRegister<BookForm>;
  errors: FieldErrors<BookForm>;
};

const BookATableForm = ({ events, register, errors }: Props) => {
  return (
    <div>
      <div className="md:grid md:grid-cols-2 flex flex-col gap-5">
        <div className="flex flex-col">
          <FormInput
            {...register("name")}
            type="text"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div className="flex flex-col">
          <FormInput
            {...register("email")}
            type="email"
            placeholder="Your Email"
          />
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <FormInput
            {...register("tablenumber", { valueAsNumber: true })}
            type="number"
            placeholder="Table Number"
            readOnly
          />
          {errors.tablenumber && (
            <div className="text-red-500">{errors.tablenumber.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <FormInput
            {...register("guests", { valueAsNumber: true })}
            type="number"
            placeholder="Number of Guest"
          />
          {errors.guests && (
            <div className="text-red-500">{errors.guests.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <EventSelect
            events={events}
            {...register("eventId", { valueAsNumber: true })}
          />
          {errors.eventId && (
            <div className="text-red-500">{errors.eventId.message}</div>
          )}
        </div>
        <div className="flex flex-col">
          <FormInput
            {...register("phone")}
            type="tel"
            placeholder="Your Contact Number"
          />
          {errors.phone && (
            <div className="text-red-500">{errors.phone.message}</div>
          )}
        </div>
      </div>
      <FormTextArea {...register("content")} placeholder="Your Comment" />
      {errors.content && (
        <div className="text-red-500">{errors.content.message}</div>
      )}
    </div>
  );
};

export default BookATableForm;
