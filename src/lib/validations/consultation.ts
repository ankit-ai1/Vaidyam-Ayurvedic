import { z } from "zod";

export const consultationSchema = z.object({
  fullName: z.string().min(2, "Enter your full name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit phone number"),
  email: z.string().email("Enter a valid email address"),
  age: z.coerce.number().min(1, "Enter a valid age").max(120, "Enter a valid age"),
  gender: z.enum(["male", "female", "other"], {
    message: "Select a gender",
  }),
  concern: z.string().min(10, "Describe your concern in a bit more detail"),
  preferredDate: z.string().min(1, "Select a preferred date"),
  preferredTime: z.string().min(1, "Select a preferred time"),
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;
export type ConsultationFormInput = z.input<typeof consultationSchema>;
