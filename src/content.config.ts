import { defineCollection, z } from "astro:content";
import { getAllPosts } from "./lib/api";

const blog = defineCollection({
  loader: async () => {
    const allPosts = await getAllPosts();
    return allPosts.map((post) => ({
      id: post.slug,
      ...post,
    }));
  },
  schema: z.object({
    _sys: z.object({
      createdAt: z.string(),
      updatedAt: z.string(),
    }),
    title: z.string(),
    body: z.string(),
    description: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    category: z.object({
      name: z.string(),
      slug: z.string(),
    }),
    index: z.boolean(),
  }),
});

export const collections = { blog };
