import { z } from "zod";
export const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  image: z.object({
    connect: z.object({
      id: z.string(),
    }),
    create: z.object({
      url: z.string().url(),
    }),
    connectOrCreate: z.object({
      where: z.object({
        id: z.string(),
      }),
      create: z.object({
        url: z.string().url().optional(),
      }),
    }),
  }),
});
