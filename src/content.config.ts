import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Stefano Merino'),
    lang: z.enum(['es', 'en']),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    alternateSlug: z.string().optional(),
  }),
});

export const collections = { blog };

