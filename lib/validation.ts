import z from 'zod';

export const getInTouchFormSchema = z.object({
  name: z.string().trim().min(3, 'Name must be at least 3 characters long'),
  email: z.string().trim().email('Please enter valid email address'),
  description: z
    .string()
    .trim()
    .min(10, 'Description must be at least 10 characters long!'),
});

export type IGetInTouchFormSchema = z.infer<typeof getInTouchFormSchema>;
