"use client";
import "./reset.css";
import "./globals.css";
import React from "react";
import Header from "@/app/components/Header/Header";
import Footer from "@/app/components/Footer/Footer";
import GetToKnow from "@/app/components/GetToKnow/GetToKnow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" />
        <title>
          Secure and Private Browser for Android, iOS & PC | Aloha Browser
        </title>
      </head>
      <body>
        <Header />
        {children}
        <GetToKnow />
        <Footer />
      </body>
    </html>
  );
}
