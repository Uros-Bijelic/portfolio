import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import Link from 'next/link';

// ----------------------------------------------------------------

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type MenuItemProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
  download?: boolean;
  toggleSidbar: () => void;
};

export function MenuItem({
  href,
  text,
  icon,
  toggleSidbar,
  download = false,
}: MenuItemProps) {
  const pathname = usePathname();
  const isActive = !download && pathname === href;

  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.03, x: 4 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        download={download}
        target={download ? '_blank' : '_self'}
        className={`flex w-full items-center gap-3 rounded-2xl border px-4 py-3 text-lg transition chip ${
          isActive
            ? 'border-cyan-300/35 bg-cyan-300/12 text-white'
            : 'border-white/8 bg-white/4 text-white/80 hover:border-white/14 hover:bg-white/7 hover:text-white'
        }`}
        onClick={toggleSidbar}
      >
        {icon}
        {text}
      </Link>
    </motion.li>
  );
}
