import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

// Import Roboto font
const manrope = Manrope({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
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
      <body className={`${manrope.variable} `}>
        <Header />
        {children}
      </body>
    </html>
  );
}
