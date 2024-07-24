'use client';
import { motion, stagger, useAnimate } from 'framer-motion';
import { useEffect } from 'react';

import { cn } from '@/lib/utils';

export const TextGenerateSubtitle = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(' ');

  useEffect(() => {
    setTimeout(() => {
      animate(
        'span',
        {
          opacity: 1,
          filter: filter ? 'blur(0px)' : 'none',
        },
        {
          duration: duration ? duration : 1,
          delay: stagger(0.2),
          // delay: 4,
        },
      );
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0 "
              style={{
                filter: filter ? 'blur(10px)' : 'none',
              }}
            >
              {word}{' '}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn('font-bold', className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-center font-figtree text-sm leading-snug tracking-wide md:text-2xl ">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
