import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "C17 AI - Enterprise AI Reimagined",
  description: "Transform your business with cutting-edge AI solutions that deliver unprecedented efficiency, insights, and competitive advantage in the digital age.",
  keywords: ["AI", "Enterprise AI", "Machine Learning", "Automation", "Business Intelligence", "Neural Networks"],
  authors: [{ name: "C17 AI" }],
  openGraph: {
    title: "C17 AI - Enterprise AI Reimagined",
    description: "Transform your business with cutting-edge AI solutions that deliver unprecedented efficiency, insights, and competitive advantage.",
    type: "website",
    url: "https://c17.ai",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "C17 AI - Enterprise AI Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "C17 AI - Enterprise AI Reimagined",
    description: "Transform your business with cutting-edge AI solutions.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
