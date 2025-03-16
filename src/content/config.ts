import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.date(),
        tags: z.array(z.string()),
        author: z.string().default('Kavi Castelo'),
        draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
    blog: blogCollection,
};
