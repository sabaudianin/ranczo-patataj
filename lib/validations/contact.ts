import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Imię musi mieć co najmniej 3 znaki"),
  email: z.string().email("Podaj poprawny adres email"),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
