import type { Metadata } from "next";
import { Inter, Poppins, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sai Naman Gangiredla - Full Stack Developer & AI/ML Enthusiast",
    template: "%s | Sai Naman Gangiredla",
  },
  description: "Portfolio of Sai Naman Gangiredla - Computer Science Engineering student at VIT-AP University. Showcasing projects in web development, mobile app development, and AI/ML applications.",
  keywords: ["portfolio", "web developer", "full stack developer", "AI/ML", "machine learning", "deep learning", "Android developer", "Python", "Java", "JavaScript", "React", "Next.js"],
  authors: [{ name: "Sai Naman Gangiredla" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com",
    title: "Sai Naman Gangiredla - Full Stack Developer & AI/ML Enthusiast",
    description: "Portfolio of Sai Naman Gangiredla - Computer Science Engineering student showcasing projects in web development, mobile apps, and AI/ML.",
    siteName: "Sai Naman Gangiredla Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sai Naman Gangiredla - Full Stack Developer & AI/ML Enthusiast",
    description: "Portfolio showcasing projects in web development, mobile apps, and AI/ML applications.",
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
        className={`${inter.variable} ${poppins.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-background text-foreground`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

