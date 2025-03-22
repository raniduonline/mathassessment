import type { Metadata } from 'next';
import './globals.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Grade 1 Math Assessment',
  description: 'A kid-friendly math assessment for Grade 1 students',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script id="env-script" src="/env-config.js" strategy="beforeInteractive" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-kid-blue via-white to-kid-green">
        <main className="container mx-auto py-8 px-4 max-w-4xl">
          {children}
        </main>
      </body>
    </html>
  );
} 