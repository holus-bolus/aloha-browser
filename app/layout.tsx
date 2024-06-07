import type { Metadata } from "next";
import './reset.css';
import "./globals.css";
import React from "react";
import Header from "@/app/components/Header/Header";


export const metadata: Metadata = {
  title: "Secure and Private Browser for Android, iOS & PC | Aloha Browser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="container-full">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
