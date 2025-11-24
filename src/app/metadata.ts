import { Metadata } from "next";
import { personalInfo } from "@/data/personal";

export const siteMetadata: Metadata = {
  title: {
    default: `${personalInfo.name} - ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.bio[0],
  keywords: [
    "portfolio",
    "web developer",
    "full stack developer",
    "UI/UX designer",
    "React",
    "Next.js",
    "TypeScript",
    personalInfo.name,
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourwebsite.com", // Update with your actual domain
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio[0],
    siteName: `${personalInfo.name} Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} - ${personalInfo.title}`,
    description: personalInfo.bio[0],
  },
};

