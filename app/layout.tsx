import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

// ----------------------------------------------------------------

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' });

export const metadata: Metadata = {
  title: 'Uros Bijelic Portfolio',
  description:
    'Full Stack Developer from Serbia. I use Next.js React.js and Node.js to create super modern reliable web apps.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${figtree.variable} antialiased`}>
        <ToastContainer autoClose={20000} />
        <main className="mx-auto">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
