import { AppHeader } from '@/components/app-header';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const fixelText = localFont({
  src: [
    {
      path: '../fonts/FixelText-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FixelText-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/FixelText-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-fixel-text',
});

const fixelDisplay = localFont({
  src: [
    {
      path: '../fonts/FixelDisplay-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/FixelDisplay-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/FixelDisplay-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
  ],
  variable: '--font-fixel-display',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fixelText.variable} ${fixelDisplay.variable}`}>
        <AppHeader />

        <div>{children}</div>
      </body>
    </html>
  );
}
