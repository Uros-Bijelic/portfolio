'use client';

import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const techStack = [
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Shadcn UI',
  'MongoDB',
  'Mongoose',
  'React Hook Form',
  'Zod',
  'NextAuth',
];

const learnings = [
  'Built a structured product flow with onboarding, authentication, profile editing, and content management.',
  'Improved form architecture with React Hook Form and Zod validation for a cleaner user experience.',
  'Designed filtering, searching, and pagination patterns that made large content sets easier to explore.',
  'Strengthened full stack product thinking by connecting UI decisions with backend and data-model needs.',
];

const challenges = [
  'Designing a clean knowledge-management workflow that still felt practical for everyday developer use.',
  'Integrating authentication and MongoDB data models in a maintainable way inside a Next.js app.',
  'Keeping the UI clear while supporting multiple content types and richer user profile data.',
];

export default function GitnotePage() {
  return (
    <section className="min-h-screen bg-[#050506] text-white">
      <div className="bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.16),transparent_30%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.08),transparent_24%),linear-gradient(180deg,#0c1113_0%,#050506_100%)]">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-40 md:px-6 md:pb-20 md:pt-52">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/42">
                Case Study / Productivity App
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl md:leading-[1.04]">
                Git Note
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/66 md:text-lg">
                A developer-focused knowledge and workflow tool designed to help
                users track progress, capture useful patterns, and organize what
                they learn while building software.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {techStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full px-4 py-2 text-sm chip"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="https://github-note.urosbijelic.com/"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-teal-300 via-cyan-300 to-violet-300 px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                >
                  Live product
                  <IconArrowUpRight size={18} stroke={1.8} />
                </Link>
                <Link
                  href="https://github.com/urke90/Github-Note"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/82 transition hover:border-white/20 hover:bg-white/8"
                >
                  Source code
                  <IconBrandGithub size={18} stroke={1.8} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-[#0b1012]/88 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  Scope
                </p>
                <p className="mt-3 text-2xl font-semibold tracking-[-0.05em]">
                  Full stack product with auth, content workflows, and profile
                  management.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-[#0b1012]/88 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  Focus
                </p>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  I wanted the product to feel practical, focused, and easy to
                  reuse day to day rather than just technically feature-rich.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-up-delay-1 mt-10 overflow-hidden rounded-4xl border border-white/10 bg-[#0b1012]/88 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-5">
            <Image
              src="/assets/images/git-note-desk-mob.svg"
              alt="Git Note preview"
              width={1440}
              height={900}
              className="h-auto w-full rounded-3xl"
              priority
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="fade-up">
              <SectionCard title="Overview">
              <p>
                Git Note is a productivity-focused app for developers who want a
                better way to track useful steps, store technical knowledge, and
                document progress. It combines onboarding, authentication,
                profile customization, and content management into one cohesive
                product experience.
              </p>
              </SectionCard>
            </div>

            <div className="fade-up-delay-1">
              <SectionCard title="Problem">
              <p>
                Traditional note-taking flows often break down when developers
                need structure, searchability, and reusable context. I wanted to
                create a more practical system for storing knowledge, organizing
                code-related notes, and tracking long-term growth.
              </p>
              </SectionCard>
            </div>

            <div className="fade-up-delay-2">
              <SectionCard title="Learnings">
              <ul className="space-y-3">
                {learnings.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              </SectionCard>
            </div>

            <div className="fade-up-delay-3">
              <SectionCard title="Challenges">
              <ul className="space-y-3">
                {challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              </SectionCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function SectionCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-[#0b1012]/88 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl md:p-7">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-white/42">
        {title}
      </p>
      <div className="mt-4 text-sm leading-7 text-white/66 md:text-base">
        {children}
      </div>
    </div>
  );
}