import { z, defineCollection } from "astro:content";

const blogCollection= defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    publishDate: z.date(),
    title: z.string(),
    description: z.string(),
    coverImage: image().nullable(),
    coverAlt: z.string().nullable(),
    category: z.object({
      name: z.enum(["シャチ", "開発"]),
      slug: z.enum(["orca", "development"])
    })
  })
})

export const collections = {
  'blog': blogCollection,
};