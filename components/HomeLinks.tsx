'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

// ----------------------------------------------------------------

const HomeLinks = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{ delay: 4 }}
      className="flex flex-wrap justify-center gap-5"
    >
      <Link
        href="#projects"
        className="relative min-w-[128px] p-[3px] text-center transition-transform hover:-translate-y-1"
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
        <div className="group relative rounded-[6px] bg-[#000000] bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-2 uppercase text-[#000000] transition hover:bg-transparent max-md:text-sm md:px-8">
          Projects
        </div>
      </Link>
      <Link
        href="/contact"
        className="relative min-w-[128px] p-[3px] text-center transition-transform hover:-translate-y-1"
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500" />
        <div className="bg-black text-white group relative rounded-[6px] bg-[#000000] px-4 py-2 uppercase transition hover:bg-transparent max-md:text-sm ">
          Contact Me
        </div>
      </Link>
    </motion.div>
  );
};

export default HomeLinks;
