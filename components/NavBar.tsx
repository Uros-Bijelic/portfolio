'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';

import { cn } from '@/utils/cn';

// ----------------------------------------------------------------

interface INavBarProps {
  // navItems: {
  //   name: string;
  //   link: string;
  //   icon?: JSX.Element;
  // }[];
  className?: string;
}

const NavBar: React.FC<INavBarProps> = ({
  // navItems,
  className,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={
          {
            // opacity: 1,
            // y: -100,
          }
        }
        animate={{
          // y: -100,
          opacity: 1,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000]   items-center justify-center space-x-4 border border-[#A4ADFF1A] bg-[#00000066] px-10 py-4',
          className,
        )}
        // className="flex-center relative z-10 w-[452px] rounded-full border border-[#A4ADFF1A] bg-[#00000066] px-2 py-6"
      >
        <ul className="flex gap-10">
          <Link
            href="/"
            onClick={() => alert('aaaaaaaaaaaaaaaaaaaaaaa')}
            className="cursor-pointer font-figtree text-white-800 transition-colors hover:text-white-100"
          >
            Home
          </Link>
          <Link
            href="/"
            className="cursor-pointer font-figtree text-white-800 transition-colors hover:text-white-100"
          >
            Work
          </Link>
          <Link
            href="/"
            className="cursor-pointer font-figtree text-white-800 transition-colors hover:text-white-100"
          >
            Contact
          </Link>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default NavBar;
