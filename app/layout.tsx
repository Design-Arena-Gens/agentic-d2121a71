import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Urbanist } from 'next/font/google';
import './globals.css';

const urbanist = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Aurora Stadium Experience',
  description: 'Step inside a fully realized, atmospheric football stadium brought to life on the web.'
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className="bg-night">
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
