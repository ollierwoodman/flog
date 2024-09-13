import type { Metadata } from "next";
import { Playfair_Display } from "next/font/google";
import "./globals.css";

const englishFont = Playfair_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ollie's Film Blog",
  description: "A blog that documents Ollie's journey in film photography.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${englishFont.className}`}>{children}</body>
    </html>
  );
}
