import type { Metadata } from "next";
import localFont from "next/font/local";
import { Khand, Varela_Round } from "next/font/google";
import "./globals.css";

const khand = Khand({
  variable: "--font-khand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const varela = Varela_Round({
  variable: "--font-varela",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Horse Riding Experience",
  description: "Experience Nature on Horseback",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://api.fontshare.com/v2/css?f[]=switzer@300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --font-switzer: 'Switzer', sans-serif;
          }
        `}</style>
      </head>
      <body
        className={`${khand.variable} ${varela.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
