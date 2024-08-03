'use client';

import { MenuToggle } from '../navigation/MenuToggle';
import { Navigation } from '../navigation/Navigation';

import {
  motion,
  useCycle,
  useMotionValueEvent,
  useScroll,
} from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

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

interface IHeaderMobileProps {
  isAlwaysVisible?: boolean;
}

const HeaderMobile: React.FC<IHeaderMobileProps> = ({ isAlwaysVisible }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { height } = useDimensions(containerRef);

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
    <motion.div
      initial={{
        opacity: 1,
        y: -100,
      }}
      animate={{
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0,
      }}
      transition={{
        duration: 0.2,
      }}
      className="fixed z-[5001]"
    >
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className="fixed inset-y-0 left-0 z-[5000] sm:hidden"
      >
        <motion.div
          className="fixed inset-y-0 left-0 size-full h-screen w-[300px] border-r border-r-black-400 bg-black-600"
          variants={sidebar}
        />
        <Navigation toggleSidbar={() => toggleOpen(0)} />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
    </motion.div>
  );
};

export default HeaderMobile;
