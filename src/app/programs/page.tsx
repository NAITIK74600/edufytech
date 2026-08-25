import type { Metadata } from "next";
import { getPrograms } from "@/lib/db";
import { ProgramsBrowser } from "@/components/ProgramsBrowser";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Explore immersive Edufyi Tech Solutions programs in AI/ML, Data Science, Cybersecurity, and HR.",
};

export default async function ProgramsPage() {
  const programs = await getPrograms();
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Programs"
        title={<>Find the program that moves your career</>}
        subtitle="Mentor-led, project-based, and built for placement outcomes."
      />
      <div className="mt-12">
        <ProgramsBrowser programs={programs} />
      </div>
    </div>
  );
}
