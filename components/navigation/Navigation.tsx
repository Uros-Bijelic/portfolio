import { MenuItem } from './MenuItem';

import ContactIcon from '../icons/ContactIcon';
import DownloadIcon from '../icons/DownloadIcon';
import LogoIcon from '../icons/LogoIcon';
import ProjectsIcon from '../icons/ProjectsIcon';

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
    icon: <LogoIcon />,
  },
  {
    text: 'Work',
    href: '/projects',
    icon: <ProjectsIcon />,
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

interface INavigation {
  toggleSidbar: () => void;
}

export const Navigation: React.FC<INavigation> = ({ toggleSidbar }) => (
  <motion.ul
    variants={variants}
    className="width-[230px] absolute top-[100px] flex flex-col gap-5 p-[25px]"
  >
    {NAV_ITEMS.map(({ href, icon, text, download }) => (
      <MenuItem
        href={href}
        icon={icon}
        text={text}
        key={href}
        download={download}
        toggleSidbar={toggleSidbar}
      />
    ))}
  </motion.ul>
);
