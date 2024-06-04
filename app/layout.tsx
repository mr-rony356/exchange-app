import type { Metadata } from "next";
import "./globals.css";
import { Manrope } from '@next/font/google';
import Header from "./components/Header";
import Footer from "./components/sections/Footer";

// Import Roboto font
const manrope = Manrope({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "ACCONOMY- Discover Value",
  description: "DISCOVER VALUE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} bg-black text-white`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
