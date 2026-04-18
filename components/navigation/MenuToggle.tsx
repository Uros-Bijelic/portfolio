import { motion } from 'framer-motion';

// ----------------------------------------------------------------

const Path = (props: any) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="#d8fff6"
    strokeLinecap="round"
    {...props}
  />
);

type MenuToggleProps = {
  toggle: () => void;
};

export function MenuToggle({ toggle }: MenuToggleProps) {
  return (
    <button
      onClick={toggle}
      className="absolute left-7 top-4.5 z-10 flex size-12.5 cursor-pointer select-none items-center justify-center rounded-full border border-white/10 bg-[rgba(18,25,28,0.92)] shadow-[0_12px_30px_rgba(0,0,0,0.35)] outline-none transition hover:border-teal-300/25 hover:bg-[rgba(24,34,37,0.96)]"
    >
      <svg width="23" height="23" viewBox="0 0 20 20">
        <Path
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' },
          }}
        />
      </svg>
    </button>
  );
}
