import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(3, "Imię musi składać się z  co najmniej 3 znaków"),
  email: z.string().email("Podaj poprawny adres email"),
  message: z.string().min(10, "Wiadomość musi zwierać co najmniej 10 znaków"),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
