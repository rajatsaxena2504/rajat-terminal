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

// Papers - for arXiv paper notes and learnings
const papersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    paperTitle: z.string(), // Original paper title
    authors: z.array(z.string()).default([]),
    arxivUrl: z.string().optional(),
    pdfUrl: z.string().optional(),
    pubDate: z.coerce.date(), // When you read/noted it
    paperDate: z.coerce.date().optional(), // When paper was published
    tags: z.array(z.string()).default([]),
    tldr: z.string().optional(), // One-line summary
    rating: z.number().min(1).max(5).optional(), // How useful/important
    draft: z.boolean().default(false),
  }),
});

// Notes - for daily learnings (system design, etc.)
const notesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['system-design', 'distributed-systems', 'algorithms', 'databases', 'ml', 'web', 'devops', 'other']).default('other'),
    tags: z.array(z.string()).default([]),
    source: z.string().optional(), // Where you learned this (book, video, article URL)
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
  papers: papersCollection,
  notes: notesCollection,
  books: booksCollection,
  projects: projectsCollection,
  newsletter: newsletterCollection,
};
