import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--font-neubrutalism",
});

export const metadata: Metadata = {
  title: "Meharaj Ul Mahmmud - Software Engineer",
  description: "Portfolio of Meharaj Ul Mahmmud - Software Engineer specializing in AI/ML and banking technology with 3+ years of experience.",
  keywords: ["Software Engineer", "AI/ML", "Banking Technology", "Python", "Java", "React", "Next.js"],
  authors: [{ name: "Meharaj Ul Mahmmud" }],
  openGraph: {
    title: "Meharaj Ul Mahmmud - Software Engineer",
    description: "Portfolio of Meharaj Ul Mahmmud - Software Engineer specializing in AI/ML and banking technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
