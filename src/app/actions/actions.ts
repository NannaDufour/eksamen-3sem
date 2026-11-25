"use server";
import { revalidatePath } from "next/cache";
import { contactSchema, reserveTableSchema } from "@/schema/formSchema";

interface NightclubEvent {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  isFeatured: boolean;
  doorsOpen: string;
  asset: {
    url: string;
    width: number;
    height: number;
    alt: string;
  };
}

export const createReservation = async (data: unknown) => {
  const result = reserveTableSchema.safeParse(data);
  const getEvent = await fetch(`http://localhost:4000/events/${eventId}`, {
    method: "GET",
  });
  const event: NightclubEvent = await getEvent.json();

  const date = event.doorsOpen;

  const postReservation = await fetch("http://localhost:4000/reservations", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...result.data, date }),
  });
  revalidatePath("/book-table");
};

export const sendContactInfo = async (data: unknown) => {
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return { success: false, message: "invaldd informations" };
  }

  const date = new Date().toISOString();

  const postContact = await fetch("http://localhost:4000/contact_messages", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ ...result.data, date }),
  });

  if (!postContact.ok) {
    return { success: false, message: "Something went wrong, try again" };
  }

  return { success: true, message: "Message sent!" };
};
