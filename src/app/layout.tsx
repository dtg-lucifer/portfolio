import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Mono } from "next/font/google";
import "./(root_assets)/globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
  style: ["normal", "italic"],
  fallback: ["monospace"],
  preload: true,
  adjustFontFallback: true,
});

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo-black",
  display: "swap",
  style: ["normal"],
  fallback: ["sans-serif"],
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Piush Bose - Full Stack Developer",
  description:
    "An Indie Full stack developer, DevOps Engineer, Cloud Engineer and soon to be Embedded Systems Developer. I love building things that solve real-world problems.",
  openGraph: {
    title: "Piush Bose - Full Stack Developer",
    description:
      "An Indie Full stack developer, DevOps Engineer, Cloud Engineer and soon to be Embedded Systems Developer. I love building things that solve real-world problems.",
    url: "https://me.piush.dev",
    siteName: "Piush Bose",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.variable} ${archivoBlack.variable} antialiased scroll-smooth`}
      >
        {children}
      </body>
    </html>
  );
}
