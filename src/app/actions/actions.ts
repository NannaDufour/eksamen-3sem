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

  const postContact = await fetch("http://localhost:4000/contact_messages", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ name, email, content }),
  });
};

export default createReservation;
