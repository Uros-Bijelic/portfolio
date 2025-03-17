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

interface IMenuItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  download?: boolean;
  toggleSidbar: () => void;
}

export const MenuItem: React.FC<IMenuItemProps> = ({
  href,
  text,
  icon,
  toggleSidbar,
  download = false,
}) => {
  console.log('href', href);
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link
        href={href}
        download={download}
        target={download ? '_blank' : '_self'}
        className="flex w-full cursor-pointer items-center gap-2.5 text-lg text-white-100"
        onClick={toggleSidbar}
      >
        {icon}
        {text}
      </Link>
    </motion.li>
  );
};
