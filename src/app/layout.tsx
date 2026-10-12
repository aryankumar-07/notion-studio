import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'MOTIONFORM — Modular Creative Video & Motion Platform',
  description: 'Design and composite expressive video with reusable creative blocks, programmable shader effects, and high-framerate local GPU rendering.',
  keywords: ['motion graphics', 'video editor', 'creative blocks', 'shader effects', 'webgl', 'templates'],
  openGraph: {
    title: 'MOTIONFORM — Modular Creative Video & Motion Platform',
    description: 'Design and composite expressive video with reusable creative blocks and programmable shader effects.',
    siteName: 'MOTIONFORM',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0B] text-[#F4F1EB]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
