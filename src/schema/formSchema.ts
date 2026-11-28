import * as z from "zod";
export const contactSchema = z.object({
  name: z
    .string()
    .regex(/^[\p{L}' -]+$/u, {
      message: "Brug kun bogstaver, mellemrum, - og '",
    })
    .trim()
    .min(1, {
      message: "Feltet må ikke være tomt",
    }),

  email: z.email({ message: "Indtast en gyldig e-mail" }).trim(),

  content: z
    .string()
    .trim()
    .min(1, { message: "Feltet må ikke være tomt" })
    .max(2000, "Maks 2.000 tegn"),
});

export const reserveTableSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Feltet må ikke være tomt" })
    .regex(/^[\p{L}' -]+$/u, "Brug kun bogstaver, mellemrum, - og '"),

  email: z.email({ message: "Indtast en gyldig e-mail" }).trim(),

  eventId: z.number({ message: "Vælg event" }),

  content: z.string().trim().max(2000, "Maks 2.000 tegn"),

  tablenumber: z
    .number({ message: "vælg et bord" })
    .min(1, "Bordnummer skal være mindst 1"),

  guests: z
    .number({ message: "Angiv antal gæster" })
    .min(1, "Mindst 1 gæst")
    .max(8, "Maks 8 gæster"),

  phone: z
    .string()
    .trim()
    .regex(/^\d{8}$/, { message: "Telefonnummer skal være 8 cifre" }),
});
export type BookForm = z.infer<typeof reserveTableSchema>;

export const commentSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Feltet må ikke være tomt" })
    .regex(/^[\p{L}' -]+$/u, "Brug kun bogstaver, mellemrum, - og '"),

  email: z.email({ message: "Indtast en gyldig e-mail" }).trim(),

  content: z
    .string()
    .trim()
    .min(1, { message: "Feltet må ikke være tomt" })
    .max(2000, "Maks 2.000 tegn"),
});
