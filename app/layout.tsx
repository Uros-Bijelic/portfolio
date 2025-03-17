import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

// ----------------------------------------------------------------

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' });

export const metadata: Metadata = {
  title: 'Uros Bijelic',
  description:
    'Full Stack Developer from Serbia. I use Next.js React.js and Node.js in combination with Node.js to create super modern reliable web apps.',
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${figtree.variable} antialiased`}>
        <ToastContainer autoClose={2000} />
        <main className="mx-auto min-h-screen">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
