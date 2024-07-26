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

// const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF'];

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
  // const style = { border: `2px solid ${colors[i]}` };
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
        className="flex cursor-pointer items-center gap-2 text-black-800"
        onClick={toggleSidbar}
      >
        {icon}
        {text}
      </Link>
    </motion.li>
  );
};
