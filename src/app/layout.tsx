import type { Metadata } from "next";
import { Anton, Inter, Playfair_Display, Caveat } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
});

export const metadata: Metadata = {
  title: "Karena Kopi | Flagship",
  description:
    "BORN FROM THE NECESSITY OF CONNECTION THROUGH THE LENS OF PREMIUM SPECIALTY COFFEE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${inter.variable} ${playfair.variable} ${caveat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
