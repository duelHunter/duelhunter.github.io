import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    featured: z.boolean().default(false),
    demo: z.string().optional(),
    code: z.string().optional(),
  }),
});

export const collections = { projects };
