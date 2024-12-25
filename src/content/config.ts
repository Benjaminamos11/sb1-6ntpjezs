import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.string().optional(),
    author: z.string(),
    tags: z.array(z.string()),
    seo: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
    }).optional(),
  })
});

export const collections = { blog };