export type LandingOption = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
  heroTheme: string;
  panelTheme: string;
  accentTheme: string;
  metricTheme: string;
  accentLabel: string;
  featuredStack: string[];
  fullStack: string[];
  highlights: { title: string; text: string }[];
};

export const landingOption: LandingOption = {
  eyebrow: 'Full Stack Engineer',
  title:
    'I build full stack digital products with React, Next.js, Node.js, and TypeScript.',
  description:
    'I am Uros Bijelic, a full stack engineer from Belgrade, Serbia, with hands-on experience building developer tools, content platforms, dashboards, and reusable UI systems. I am primarily targeting full stack roles, while still being open to strong frontend opportunities where product quality and clean implementation matter.',
  primaryCta: 'View Projects',
  secondaryCta: 'Contact Me',
  heroTheme:
    'bg-[radial-gradient(circle_at_top_left,rgba(45,212,191,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_26%),linear-gradient(180deg,#0c1113_0%,#060608_100%)]',
  panelTheme: 'bg-[#0b1012]/88 border-white/10',
  accentTheme: 'from-teal-300 via-cyan-300 to-violet-300',
  metricTheme: 'text-teal-200',
  accentLabel: 'Product-minded / Frontend-first / Full stack capable',
  featuredStack: [
    'React',
    'Next.js',
    'Angular',
    'TypeScript',
    'Tailwind CSS',
    'Redux',
    'React Query',
    'Framer Motion',
  ],
  fullStack: [
    'React',
    'Next.js',
    'Angular',
    'JavaScript',
    'TypeScript',
    'Redux',
    'React Query',
    'React Hook Form',
    'Tailwind CSS',
    'Shadcn UI',
    'Radix UI',
    'Material UI',
    'Framer Motion',
    'Storybook',
    'Jest',
    'Node.js',
    'Express.js',
    'MongoDB',
    'Mongoose',
    'PostgreSQL',
    'Prisma',
    'Zod',
    'Clerk',
    'NextAuth',
  ],
  highlights: [
    {
      title: 'Full stack focus',
      text: 'My strongest recent portfolio work is full stack, covering frontend architecture, backend integration, authentication flows, forms, and database-driven product features.',
    },
    {
      title: 'Product work',
      text: 'Built developer-focused products like Git Note and Dev Today, plus exchange-office tooling, UI libraries, and content workflows.',
    },
    {
      title: 'Working style',
      text: 'Focused on reusable components, scalable frontend architecture, polished UI, and practical business value.',
    },
  ],
};

export const featuredProjects = [
  {
    href: '/projects/gitnote',
    title: 'Git Note',
    summary:
      'A note-tracking app for developers with onboarding, authentication, profile management, filtering, infinite scroll, and a full UI built with Next.js, Tailwind, Shadcn, MongoDB, and Zod.',
    image: '/assets/images/git-note-desk-mob.svg',
    tag: 'Productivity App',
  },
  {
    href: '/projects/dev-today',
    title: 'Dev Today',
    summary:
      'A developer community platform for posts, podcasts, meetups, and groups, built with a full stack architecture using Next.js, Node.js, PostgreSQL, Prisma, React Hook Form, and rich content workflows.',
    image: '/assets/images/dev-today-desk-mob.svg',
    tag: 'Content Platform',
  },
];
