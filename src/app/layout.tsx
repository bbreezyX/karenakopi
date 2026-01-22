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
        {/* Skip Link for Keyboard Navigation - WCAG 2.4.1 */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:text-foreground focus:px-6 focus:py-3 focus:rounded-full focus:outline focus:outline-2 focus:outline-accent focus:shadow-lg focus:font-display focus:text-sm focus:uppercase focus:tracking-widest"
        >
          Skip to main content
        </a>
        <main id="main-content" tabIndex={-1} className="outline-none">
          {children}
        </main>
      </body>
    </html>
  );
}
