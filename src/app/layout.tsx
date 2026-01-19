import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Praan Health | Executive Summary",
  description: "Premium health-tech platform overview.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-slate-800 bg-transparent selection:bg-slate-200 selection:text-slate-900`}
      >
        <main className="min-h-screen flex flex-col items-center w-full max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-24">
          {children}
        </main>
      </body>
    </html>
  );
}
