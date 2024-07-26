'use client';

import { MenuToggle } from '../navigation/MenuToggle';
import { Navigation } from '../navigation/Navigation';

import { motion, useCycle } from 'framer-motion';
import { useCallback, useEffect, useRef } from 'react';

import { useDimensions } from '@/hooks/use-dimensions';

// ----------------------------------------------------------------

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const HeaderMobile = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { height } = useDimensions(containerRef);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (!isOpen) return;

      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as HTMLElement)
      ) {
        toggleOpen(0);
      }
    },
    [toggleOpen, isOpen],
  );

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [handleClickOutside]);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className="absolute inset-y-0 left-0 z-[5000] sm:hidden"
    >
      <motion.div
        className="absolute inset-y-0 left-0 w-[300px] bg-white-100"
        variants={sidebar}
      />
      <Navigation toggleSidbar={() => toggleOpen(0)} />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};

export default HeaderMobile;
