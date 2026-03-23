import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your full name.').max(100),
  email: z.string().email('Please enter a valid email address.').max(150),
  phone: z
    .string()
    .min(7, 'Please enter a valid phone number.')
    .max(30, 'Phone number is too long.'),
  subject: z.string().min(3, 'Please enter a subject.').max(120),
  message: z.string().min(10, 'Please enter a more detailed message.').max(1500),
});

export type ContactInput = z.infer<typeof contactSchema>;