// /app/layout.tsx
import Navbar from '@/components/core/navbar';
import { LanguageContextProvider } from '@/store/LanguageContextProvider';
import { ProfileContextProvider } from '@/store/ProfileContextProvider';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fabio Biondi",
  description: "Next 14 demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <LanguageContextProvider>
        <ProfileContextProvider>
        <body className={inter.className}>
          <Navbar/>

          <div className="max-w-screen-xl mx-auto bg-slate-900 p-6 m-6">
            {children}
          </div>

          <footer className=" fixed bottom-0 w-full text-center p-3">
            Fabio Biondi | @Copyright 2024
          </footer>
        </body>
        </ProfileContextProvider>
      </LanguageContextProvider>

      <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.js" />

    </html>
  );
}
