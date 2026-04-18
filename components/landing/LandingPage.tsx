import Image from 'next/image';
import Link from 'next/link';
import { IconArrowRight } from '@tabler/icons-react';

import {
  featuredProjects,
  landingOption,
} from '@/components/landing/option-data';

export default function LandingPage() {
  const current = landingOption;

  return (
    <div className="min-h-screen bg-[#050506] text-white">
      <section className={`relative overflow-hidden ${current.heroTheme}`}>
        <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 pb-16 pt-44 md:px-6 md:pb-20 md:pt-52">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/55">
                {current.eyebrow}
              </p>
              <h1 className="text-4xl font-semibold tracking-[-0.06em] text-white md:text-6xl md:leading-[1.05]">
                {current.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
                {current.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {current.featuredStack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full transition px-4 py-2 text-sm chip"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className={`inline-flex items-center gap-2 rounded-full bg-linear-to-r ${current.accentTheme} px-5 py-3 text-sm font-semibold text-black transition hover:brightness-110`}
                >
                  {current.primaryCta}
                  <IconArrowRight size={18} stroke={1.8} />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm text-white/82 transition chip"
                >
                  {current.secondaryCta}
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              <div
                className={`rounded-[30px] border p-6 backdrop-blur ${current.panelTheme}`}
              >
                <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                  Design direction
                </p>
                <p className={`mt-4 text-2xl font-semibold ${current.metricTheme}`}>
                  {current.accentLabel}
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  {current.highlights.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-[22px] border border-white/8 bg-black/20 p-4"
                    >
                      <p className="text-base font-semibold text-white">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/58">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div
                  className={`rounded-[28px] border p-5 ${current.panelTheme}`}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                    Based in
                  </p>
                  <p className="mt-3 text-3xl font-semibold tracking-[-0.05em]">
                    Belgrade, Serbia with strong English communication and a frontend-first mindset.
                  </p>
                </div>
                <div
                  className={`rounded-[28px] border p-5 ${current.panelTheme}`}
                >
                  <p className="text-xs uppercase tracking-[0.28em] text-white/40">
                    Focus
                  </p>
                  <p className="mt-3 text-sm leading-7 text-white/62">
                    I enjoy building maintainable interfaces, reusable systems,
                    and production-ready user experiences for modern web apps.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-7xl scroll-mt-32 px-4 py-16 md:px-6 md:py-20"
      >
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/42">
              Featured Projects
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] md:text-5xl">
              Two flagship builds, each with its own detail page.
            </h2>
          </div>
          <Link href="/contact" className="rounded-full px-4 py-2 text-sm  chip">
            Available for frontend work
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <Link
              key={project.title}
              href={project.href}
              className={`group relative overflow-hidden rounded-4xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-white/18 ${
                index === 0
                  ? 'bg-[linear-gradient(180deg,#0d1215_0%,#08090c_100%)]'
                  : 'bg-[linear-gradient(180deg,#120f1a_0%,#09090c_100%)]'
              }`}
            >
              <div
                className={`absolute inset-x-0 top-0 h-28 bg-linear-to-r ${
                  index === 0
                    ? 'from-teal-400/18 via-cyan-300/10 to-transparent'
                    : 'from-fuchsia-400/18 via-violet-300/10 to-transparent'
                }`}
              />
              <div className="relative">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-white/42">
                      {project.tag}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-white">
                      {project.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/72">
                    Open case study
                    <IconArrowRight size={14} stroke={1.8} />
                  </span>
                </div>

                <p className="mt-7 max-w-xl text-sm leading-7 text-white/62 md:text-base">
                  {project.summary}
                </p>

                <div className="mt-6 overflow-hidden rounded-3xl border border-white/8 bg-black/20 p-4">
                  <Image
                    src={project.image}
                    width={960}
                    height={640}
                    alt={project.title}
                    className="h-auto w-full rounded-[18px] transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-6 md:pb-20">
        <div className={`rounded-4xl border p-8 ${current.panelTheme}`}>
          <div className="flex flex-col gap-8">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.3em] text-white/42">
                Tech Stack
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] md:text-4xl">
                Technologies I use across frontend, UI systems, and full stack product work.
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/62 md:text-base">
                My recent work spans frontend architecture, interactive product
                interfaces, authentication flows, form systems, dashboards, and
                backend integration when needed.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {current.fullStack.map((item) => (
                <span
                  key={item}
                  className="rounded-full px-4 py-2 text-sm chip"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
