import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Aldrich } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const aldrich = Aldrich({
  weight: ["400"],
  variable: "--font-aldrich",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A7G3N",
  description: "Autonomous, cross-chain AI agents that evolve and act on-chain. Seamless strategies. Real-time adaptation. Community-driven intelligence.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${aldrich.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
