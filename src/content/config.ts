import { defineCollection, z } from 'astro:content';

const blogsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const booksCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    rating: z.number().min(1).max(5),
    dateRead: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    amazonLink: z.string().optional(),
    status: z.enum(['reading', 'completed', 'want-to-read']).default('completed'),
  }),
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tech: z.array(z.string()).default([]),
    github: z.string().optional(),
    live: z.string().optional(),
    image: z.string().optional(),
    featured: z.boolean().default(false),
    status: z.enum(['active', 'completed', 'archived']).default('completed'),
  }),
});

const newsletterCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    issue: z.number(),
  }),
});

export const collections = {
  blogs: blogsCollection,
  books: booksCollection,
  projects: projectsCollection,
  newsletter: newsletterCollection,
};
