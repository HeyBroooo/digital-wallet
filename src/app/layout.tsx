"use client";

import HomePage from "./page";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HomePage />
      </body>
    </html>
  );
}
