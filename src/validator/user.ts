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

export const updateUserSchema = z.object({
  name: z.string().min(3).optional(),
  email: z.string().email().optional(),
  password: z.string().min(6).optional(),
  image: z
    .object({
      connect: z
        .object({
          id: z.string(),
        })
        .optional(),
      create: z
        .object({
          url: z.string().url(),
        })
        .optional(),
      connectOrCreate: z
        .object({
          where: z.object({
            id: z.string(),
          }),
          create: z.object({
            url: z.string().url().optional(),
          }),
        })
        .optional(),
    })
    .optional(),
  playlists: z
    .array(
      z.object({
        connect: z.object({
          id: z.string(),
        }),
        create: z.object({
          name: z.string(),
          songs: z.array(
            z.object({
              connect: z.object({
                id: z.string(),
              }),
              connectOrCreate: z.object({
                where: z.object({
                  id: z.string(),
                }),
                create: z.object({
                  name: z.string(),
                  url: z.string().url(),
                }),
              }),
            })
          ),
        }),
      })
    )
    .optional(),
});
