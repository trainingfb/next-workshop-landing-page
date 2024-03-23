// /app/layout.tsx
import Navbar from '@/components/core/navbar';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

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
        <body className={inter.className}>
          <Navbar/>

          <div className="max-w-screen-xl mx-auto bg-slate-900 p-6 m-6">
            {children}
          </div>

          <footer className=" fixed bottom-0 w-full text-center p-3">
            Fabio Biondi | @Copyright 2024
          </footer>
        </body>

    </html>
  );
}
