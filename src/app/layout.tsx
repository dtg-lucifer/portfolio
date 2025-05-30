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
    "Portfolio of Piush Bose - Full stack developer, DevOps Engineer, and Cloud Engineer",
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
