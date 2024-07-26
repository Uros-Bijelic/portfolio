'use client';

import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

// ----------------------------------------------------------------

interface IHeaderProps {
  isAlwaysVisible?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ isAlwaysVisible = false }) => {
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
      className="fixed z-[5001] w-full px-4 max-sm:hidden md:px-5"
    >
      <nav className="flex-between mx-auto max-w-screen-lg">
        <Link href="/" className="nav-link">
          <div className="relative">
            <Image
              src="/assets/images/Logo.svg"
              width={40}
              height={40}
              sizes="(max-width: 768px) 24px, (max-width: 1200px) 50vw, 33vw"
              alt="Logo"
            />
          </div>
        </Link>
        <div className="flex gap-5 md:gap-10">
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'text-white-100' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/projects"
            className={`nav-link ${pathname.includes('/projects') ? 'text-white-100' : ''}`}
          >
            Work
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${pathname === '/contact' ? 'text-white-100' : ''}`}
          >
            Contact
          </Link>
          <Link
            href="/assets/resume.pdf"
            className={`nav-link flex-center gap-2 ${pathname === '/contact' ? 'text-white-100' : ''}`}
            download
            target="_blank"
          >
            Resume
          </Link>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
