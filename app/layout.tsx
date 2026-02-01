import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Sidebar from "./components/Sidebar";
import MobileNavbar from "./components/MobileNavbar";
import HeroVideo from "./components/HeroVideo";
import FooterBar from "./components/FooterBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Wedding Filmer",
  description: "Cinematic wedding films",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased  text-white`}
      >
        {/* Desktop Sidebar */}
        <Sidebar />

        {/* Mobile Top Navbar */}
        <MobileNavbar />

        {/* Page Content */}
        <main className="md:ml-64 pt-0 md:pt-0 min-h-screen">
          {children}

          <HeroVideo />
          <FooterBar />
        </main>
      </body>
    </html>
  );
}
