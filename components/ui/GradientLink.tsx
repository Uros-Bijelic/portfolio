'use client';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import { cn } from '@/lib/utils';

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const GradientLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ className, href, ...props }, ref) => {
    const radius = 100; // change this to increase the radius of the hover effect
    const [visible, setVisible] = React.useState(false);

    let mouseX = useMotionValue(0);
    let mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: any) {
      let { left, top } = currentTarget.getBoundingClientRect();

      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    const backgroundStyle = useMotionTemplate`
      radial-gradient(
        ${visible ? radius + 'px' : '0px'} circle at ${mouseX}px ${mouseY}px,
        var(--blue-500),
        transparent 80%
      )
    `;

    return (
      <motion.div
        style={{ background: backgroundStyle as any }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        className="group/link rounded-lg p-[2px] transition duration-300"
      >
        <Link href={href} ref={ref} {...props} className="text-center">
          <div
            className={cn(
              `flex h-10 w-full border-4 font-figtree border-[#2C3C56] bg-[#000000] text-black text-white shadow-input rounded-md px-3 py-2 text-sm
              placeholder:text-neutral-400 placeholder-text-neutral-600 
              focus-visible:outline-none focus-visible:ring-[2px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600
              disabled:cursor-not-allowed disabled:opacity-50
              dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
              group-hover/link:shadow-none transition duration-400 uppercase w-[166px] h-[40px] text-center
              `,
              className,
            )}
          >
            {props.children}
          </div>
        </Link>
      </motion.div>
    );
  },
);

GradientLink.displayName = 'GradientLink';

export { GradientLink };
