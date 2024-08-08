import type { Metadata } from 'next';
import { Figtree } from 'next/font/google';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './globals.css';

// ----------------------------------------------------------------

const figtree = Figtree({ subsets: ['latin'], variable: '--font-figtree' });

export const metadata: Metadata = {
  title: 'Uros Bijelic Portfolio',
  description: 'Personal portfolio website',
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
        <main className="mx-auto min-h-screen">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
