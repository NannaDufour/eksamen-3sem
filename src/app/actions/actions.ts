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
  if (!result.success) {
    return { success: false, message: "Invalid information" };
  }

  const { tablenumber, guests, ...reservation } = result.data;

  const getEvent = await fetch(
    `https://night-club-api-eksamen.onrender.com/events/${reservation.eventId}`,
  );
  if (!getEvent.ok) {
    return { success: false, message: "Event not found" };
  }
  const event: NightclubEvent = await getEvent.json();
  const date = event.doorsOpen;

  const postReservation = await fetch(
    "https://night-club-api-eksamen.onrender.com/reservations",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        ...reservation,
        table: String(tablenumber),
        guests: String(guests),
        date,
      }),
    },
  );
  if (!postReservation.ok) {
    return { success: false, message: "Something went wrong, try again" };
  }

  revalidatePath("/book-table");
  return { success: true, message: "Table booked!" };
};

// Contact Us - Post

export const sendContactInfo = async (data: unknown) => {
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    return { success: false, message: "invaldd informations" };
  }

  const date = new Date().toISOString();

  const postContact = await fetch(
    "https://night-club-api-eksamen.onrender.com/contact_messages",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ ...result.data, date }),
    },
  );

  if (!postContact.ok) {
    return { success: false, message: "Something went wrong, try again" };
  }

  return { success: true, message: "Message sent!" };
};
