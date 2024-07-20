'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// ----------------------------------------------------------------

interface IHeaderProps {}

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="sticky left-0 top-10">
      <nav className="flex-between mx-auto max-w-screen-lg">
        <Link href="/" className="nav-link">
          <Image
            src="/assets/images/Logo.svg"
            width={40}
            height={40}
            alt="Logo"
          />
        </Link>
        <div className="flex gap-10">
          <Link
            href="/"
            className={`nav-link ${pathname === '/' ? 'text-white-100' : ''}`}
          >
            Home
          </Link>
          <Link
            href="/projects "
            className={`nav-link ${pathname.includes('/projects') ? 'text-white-100' : ''}`}
          >
            Work
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${pathname === '/contact' ? 'text-white-100' : ''}`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
