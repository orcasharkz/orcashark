import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    publishDate: z.date(),
    title: z.string(),
    description: z.string(),
    coverImage: image().nullable(),
    coverAlt: z.string().nullable(),
    category: z.object({
      name: z.enum(["開発", "ブログ"]),
      slug: z.enum(["development", "blog"])
    })
  })
})

export const collections = {
  blog: blogCollection
}