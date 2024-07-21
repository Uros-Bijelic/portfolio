'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ----------------------------------------------------------------

interface IHeaderProps {}

const Header = () => {
  const pathname = usePathname();

  return (
    <motion.header
      transition={{ delay: 0.5 }}
      initial={{
        top: -100,
        opacity: 0,
      }}
      animate={{ top: 40, opacity: 1 }}
      className="sticky left-0 top-10 px-4 md:px-5"
    >
      <nav className="flex-between mx-auto max-w-screen-lg">
        <Link href="/" className="nav-link">
          <Image
            src="/assets/images/Logo.svg"
            width={40}
            height={40}
            alt="Logo"
          />
        </Link>
        <div className="flex gap-10">
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'text-white-100' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/projects "
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
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
