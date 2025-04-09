import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { FFmpegProvider } from "./contexts/FFmpegContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <FFmpegProvider>
          {children}
        </FFmpegProvider>
        <Analytics />
      </body>
    </html>
  );
}
