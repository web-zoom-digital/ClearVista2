import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ClearVista | Premium uPVC Windows & Doors | Windows to a Brighter Tomorrow",
  description: "ClearVista offers premium uPVC windows and doors engineered for Indian conditions. Explore our collection of casement, sliding, bay, and tilt-turn windows.",
  keywords: "uPVC windows, casement windows, sliding windows, bay windows, doors, ClearVista, premium windows India",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ fontFamily: 'Outfit, sans-serif', background: '#0a0a0a', color: '#fff', overflowX: 'hidden', maxWidth: '100%', position: 'relative' }} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
