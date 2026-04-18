'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// ----------------------------------------------------------------

type HeaderProps = {
  isAlwaysVisible?: boolean;
};

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
];

export default function Header({ isAlwaysVisible = false }: HeaderProps) {
  const pathname = usePathname();

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.1) {
        setVisible(true);
      } else if (!isAlwaysVisible) {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <motion.header
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: visible ? 40 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className="fixed z-5001 hidden w-full px-4 min-[605px]:block md:px-5"
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full border border-white/10 bg-[rgba(7,10,12,0.72)] px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.38)] backdrop-blur-xl">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-full border border-transparent px-3 py-2 transition hover:border-white/10 hover:bg-white/5"
        >
          <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 p-2">
            <Image
              src="/assets/images/Logo.svg"
              width={32}
              height={32}
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 50vw, 33vw"
              alt="Logo"
              loading="eager"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-[0.18em] text-white">
              UROS
            </span>
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/45">
              Frontend Engineer
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-2 min-[605px]:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  isActive
                    ? 'bg-white text-black shadow-[0_8px_24px_rgba(255,255,255,0.08)]'
                    : 'text-white/68 hover:bg-white/6 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center">
          <Link
            href="/assets/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/12 px-4 py-2.5 text-sm font-medium text-teal-100 transition hover:border-teal-200/45 hover:bg-teal-300/18 hover:text-white"
            download
            target="_blank"
          >
            Resume
            <IconArrowUpRight size={16} stroke={1.9} />
          </Link>
        </div>
      </nav>
    </motion.header>
  );
}
