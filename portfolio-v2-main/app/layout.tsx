import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rohit - Portfolio",
  description:
    "MCA Graduate & Software Engineer specializing in Machine Learning and Full-Stack Development",
  keywords: [
    "Rohit",
    "Portfolio",
    "Software Engineer",
    "Spring Boot",
    "Full Stack Developer",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Rohit Singh" }],
  creator: "Rohit Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rohit26.netlify.app/",
    title: "Rohit Singh - Portfolio",
    description:
      "B.Tech Graduate & Software Engineer specializing in Full-Stack Development and Automation",
    siteName: "Rohit Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohit Singh - Portfolio",
    description:
      "B.Tech Graduate & Software Engineer specializing in Full-Stack Development and Automation",
  },
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/svg+xml" href="/profilephoto.png" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
