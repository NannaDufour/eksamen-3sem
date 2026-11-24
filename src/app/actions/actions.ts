"use server";

const createReservation = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const table = formData.get("table");
  const guests = formData.get("guests");
  const eventId = formData.get("eventId");
  const phone = formData.get("phone");
};

export default createReservation;
