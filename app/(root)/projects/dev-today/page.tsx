'use client';

import { IconArrowUpRight, IconBrandGithub } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

const techStack = [
  'Next.js',
  'Node.js',
  'PostgreSQL',
  'Prisma',
  'TypeScript',
  'React Hook Form',
  'Tailwind CSS',
  'Shadcn UI',
  'Radix UI',
];

const learnings = [
  'Improved backend and database thinking by structuring content-heavy features around reusable routes and clean Prisma models.',
  'Worked across authentication, file handling, profile flows, and discovery features inside a single product ecosystem.',
  'Balanced rich user interactions like posts, podcasts, meetups, and groups without letting the product feel fragmented.',
  'Strengthened collaboration habits by shipping a larger multi-surface product with clearer division between frontend and backend concerns.',
];

const challenges = [
  'Designing a product architecture that could handle several content types while still staying understandable for users.',
  'Building search, filtering, and pagination flows that remained useful as the data model expanded.',
  'Handling richer create and edit experiences for posts, meetups, podcasts, and groups without making the UI feel heavy.',
];

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

export default function DevTodayPage() {
  return (
    <section className="min-h-screen bg-[#050506] text-white">
      <div className="bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_28%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.14),transparent_24%),linear-gradient(180deg,#0d0e14_0%,#050506_100%)]">
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-24 sm:pt-28 md:px-6 md:pb-20 md:pt-36">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/42">
                Case Study / Community Platform
              </p>
              <h1 className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.06em] text-white sm:text-4xl md:text-6xl md:leading-[1.04]">
                Dev Today
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/66 md:text-lg">
                A full stack platform designed to connect developers around
                posts, podcasts, meetups, and groups while making discovery,
                publishing, and community interaction easier.
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
                  href="https://dev-today.urosbijelic.com"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-cyan-200 via-cyan-300 to-sky-300 px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110"
                >
                  Live product
                  <IconArrowUpRight size={18} stroke={1.8} />
                </Link>
                <Link
                  href="https://github.com/urke90/Dev-Today-FE"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/82 transition hover:border-white/20 hover:bg-white/8"
                >
                  Frontend code
                  <IconBrandGithub size={18} stroke={1.8} />
                </Link>
                <Link
                  href="https://github.com/urke90/Dev-Today-BE"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-white/82 transition hover:border-white/20 hover:bg-white/8"
                >
                  Backend code
                  <IconBrandGithub size={18} stroke={1.8} />
                </Link>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-[#0b1012]/88 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  Scope
                </p>
                <p className="mt-3 text-xl font-semibold leading-tight tracking-[-0.05em] sm:text-2xl">
                  Full stack community product spanning content creation,
                  discovery, and user collaboration.
                </p>
              </div>
              <div className="rounded-[28px] border border-white/10 bg-[#0b1012]/88 p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                  Focus
                </p>
                <p className="mt-3 text-sm leading-7 text-white/62">
                  The goal was to make a feature-rich developer platform still
                  feel approachable, structured, and visually cohesive.
                </p>
              </div>
            </div>
          </div>

          <div className="fade-up-delay-1 mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1012]/88 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-xl md:p-5">
            <Image
              src="/assets/images/dev-today-desk-mob.svg"
              alt="Dev Today preview"
              width={1440}
              height={900}
              className="h-auto w-full rounded-[24px]"
              priority
            />
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="fade-up">
              <SectionCard title="Overview">
              <p>
                Dev Today is a platform for developers to create and explore
                content across several formats, including posts, podcasts,
                meetups, and groups. The product combines rich content
                workflows, profile management, discovery tools, and backend
                infrastructure into one connected experience.
              </p>
              </SectionCard>
            </div>

            <div className="fade-up-delay-1">
              <SectionCard title="Problem">
              <p>
                Developer communities often split content across disconnected
                channels and tools. This project aimed to centralize discovery,
                publishing, and interaction in a way that still felt organized,
                scalable, and easy to navigate.
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
