import * as z from "zod";
export const form = z.object({
  name: z
    .string()
    .trim()
    .min(1, "Feltet må ikke være tomt")
    .regex(/^[\p{L}' -]+$/u, "Brug kun bogstaver, mellemrum, - og '"),

  email: z.email("Indtast en gyldig e-mail").trim(),

  comment: z
    .string()
    .trim()
    .min(1, "Feltet må ikke være tomt")
    .max(12000, "Maks 12.000 tegn"),

  tablenumber: z
    .number({ error: "vælg et bord" })
    .min(1, "Bordnummer skal være mindst 1"),

  guests: z.coerce
    .number({ error: "Angiv antal gæster" })
    .min(1, "Mindst 1 gæst")
    .max(8, "Maks 8 gæster"),

  phone: z
    .string()
    .trim()
    .regex(/^\d{8}$/, "Telefonnummer skal være 8 cifre"),
});
