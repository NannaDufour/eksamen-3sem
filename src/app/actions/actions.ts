"use server";
import { revalidatePath } from "next/cache";

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

const createReservation = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const table = formData.get("table");
  const guests = formData.get("guests");
  const eventId = formData.get("eventId");
  const phone = formData.get("phone");

  const getEvent = await fetch(`https://night-club-api-eksamen.onrender.com/events/${eventId}`, {
    method: "GET",
  });
  const event: NightclubEvent = await getEvent.json();

  const date = event.doorsOpen;

  const postReservation = await fetch("https://night-club-api-eksamen.onrender.com/reservations", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      table,
      guests,
      eventId: Number(eventId),
      phone,
      date,
    }),
  });
  revalidatePath("/book-table");
};

const sendContactInfo = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const content = formData.get("content");

  const postContact = await fetch("https://night-club-api-eksamen.onrender.com/contact_messages", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name, email, content }),
  });
};

export default createReservation;
