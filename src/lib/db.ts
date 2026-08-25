import { neon } from "@neondatabase/serverless";
import type {
  Program,
  Testimonial,
  CareerPath,
  SuccessStory,
} from "./types";
import {
  seedPrograms,
  seedTestimonials,
  seedCareerPaths,
  seedSuccessStories,
} from "./seed";

const connectionString = process.env.DATABASE_URL;

export const dbEnabled = Boolean(connectionString);

const sql = connectionString ? neon(connectionString) : null;

export async function getPrograms(): Promise<Program[]> {
  if (!sql) return seedPrograms;
  try {
    return (await sql`SELECT * FROM courses ORDER BY is_featured DESC, rating DESC`) as Program[];
  } catch {
    return seedPrograms;
  }
}

export async function getFeaturedPrograms(): Promise<Program[]> {
  const programs = await getPrograms();
  const featured = programs.filter((p) => p.is_featured);
  return featured.length ? featured : programs.slice(0, 4);
}

export async function getProgram(slug: string): Promise<Program | null> {
  if (!sql) return seedPrograms.find((p) => p.slug === slug) ?? null;
  try {
    const rows = (await sql`SELECT * FROM courses WHERE slug = ${slug} LIMIT 1`) as Program[];
    return rows[0] ?? seedPrograms.find((p) => p.slug === slug) ?? null;
  } catch {
    return seedPrograms.find((p) => p.slug === slug) ?? null;
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!sql) return seedTestimonials;
  try {
    return (await sql`SELECT * FROM testimonials ORDER BY id`) as Testimonial[];
  } catch {
    return seedTestimonials;
  }
}

export async function getCareerPaths(): Promise<CareerPath[]> {
  if (!sql) return seedCareerPaths;
  try {
    return (await sql`SELECT * FROM career_paths ORDER BY id`) as CareerPath[];
  } catch {
    return seedCareerPaths;
  }
}

export async function getSuccessStories(): Promise<SuccessStory[]> {
  if (!sql) return seedSuccessStories;
  try {
    return (await sql`SELECT * FROM success_stories ORDER BY id`) as SuccessStory[];
  } catch {
    return seedSuccessStories;
  }
}

export async function insertRegisterInterest(data: {
  program_slug: string;
  full_name: string;
  email: string;
  phone: string;
  discount_code?: string;
  message?: string;
}) {
  if (!sql) throw new Error("DATABASE_NOT_CONFIGURED");
  await sql`INSERT INTO register_interest (program_slug, full_name, email, phone, discount_code, message)
    VALUES (${data.program_slug}, ${data.full_name}, ${data.email}, ${data.phone}, ${data.discount_code ?? null}, ${data.message ?? null})`;
}

export async function insertContactLead(data: {
  full_name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  if (!sql) throw new Error("DATABASE_NOT_CONFIGURED");
  await sql`INSERT INTO contact_leads (full_name, email, phone, subject, message)
    VALUES (${data.full_name}, ${data.email}, ${data.phone ?? null}, ${data.subject ?? null}, ${data.message})`;
}

export async function insertB2BLead(data: {
  org_name: string;
  org_type: string;
  contact_name: string;
  email: string;
  phone?: string;
  interest?: string;
  message: string;
}) {
  if (!sql) throw new Error("DATABASE_NOT_CONFIGURED");
  await sql`INSERT INTO b2b_leads (org_name, org_type, contact_name, email, phone, interest, message)
    VALUES (${data.org_name}, ${data.org_type}, ${data.contact_name}, ${data.email}, ${data.phone ?? null}, ${data.interest ?? null}, ${data.message})`;
}
