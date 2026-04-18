import { MenuItem } from './MenuItem';

import ContactIcon from '../icons/ContactIcon';
import DownloadIcon from '../icons/DownloadIcon';
import LogoIcon from '../icons/LogoIcon';

import { motion } from 'framer-motion';

// ----------------------------------------------------------------

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const NAV_ITEMS: {
  href: string;
  icon: React.ReactNode;
  text: string;
  download?: boolean;
}[] = [
  {
    text: 'Home',
    href: '/',
    icon: <LogoIcon className="text-white-100" />,
  },
  {
    text: 'Contact',
    href: '/contact',
    icon: <ContactIcon />,
  },
  {
    text: 'Resume',
    href: '/assets/resume.pdf',
    icon: <DownloadIcon />,
    download: true,
  },
];

type NavigationProps = {
  toggleSidbar: () => void;
};

export function Navigation({ toggleSidbar }: NavigationProps) {
  return (
    <motion.ul
      variants={variants}
      className="absolute left-0 top-24 flex w-75 flex-col gap-4 px-5"
    >
      {/* {NAV_ITEMS.map(({ href, icon, text, download }) => (
        <MenuItem
          href={href}
          icon={icon}
          text={text}
          key={href}
          download={download}
          toggleSidbar={toggleSidbar}
        />
      ))} */}
    </motion.ul>
  );
}
