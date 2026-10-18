import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CustomCursor from "../components/ui/CustomCursor";
import ThemeProvider from "../components/ThemeProvider";
import Navbar from "../components/layout/Navbar";
import SmoothScrollProvider from "../components/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shanto9070.vercel.app"),
  title: {
    template: "%s | Md. Shanto Sarkar",
    default: "Full Stack Developer",
  },
  description:
    "Md. Shanto Sarkar is a Full Stack Developer from Bangladesh specializing in Next.js, React, Node.js, PostgreSQL, and building scalable web applications.",
  authors: [
    { name: "Md. Shanto Sarkar", url: "https://shanto9070.vercel.app" },
  ],
  creator: "Md. Shanto Sarkar",
  publisher: "Md. Shanto Sarkar",
  robots: "index, follow",
  openGraph: {
    type: "profile",
    title: "Md. Shanto Sarkar | Full Stack Developer",
    description:
      "Full Stack Developer from Bangladesh. Building modern web applications with Next.js, React, Node.js, and PostgreSQL.",
    url: "https://shanto9070.vercel.app",
    siteName: "Md. Shanto Sarkar - Portfolio",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Md. Shanto Sarkar - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Md. Shanto Sarkar | Full Stack Developer",
    description:
      "Full Stack Developer from Bangladesh specializing in Next.js, React, Node.js, and PostgreSQL.",
    creator: "@shanto9070",
    images: ["/images/og-image.png"],
  },
  alternates: {
    canonical: "https://shanto9070.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Md. Shanto Sarkar",
    alternateName: "Shanto",
    jobTitle: "Full Stack Developer",
    url: "https://shanto9070.vercel.app",
    sameAs: [
      "https://github.com/ShantoSarkar34/",
      "https://www.linkedin.com/in/shanto9070/",
      "https://www.facebook.com/shanto9070",
      "https://www.instagram.com/shanto.9070",
    ],
    email: "shanto9070.me@gmail.com",
    telephone: "+880-1783805534",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bogura",
      addressRegion: "Rajshahi",
      addressCountry: "Bangladesh",
    },
    image: "/images/profile_2.jpg",
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Prisma ORM",
      "Tailwind CSS",
      "Full Stack Development",
      "REST API",
      "Stripe",
      "JWT Authentication",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            {children}
          </SmoothScrollProvider>
          <CustomCursor />
          <script
            id="json-ld"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
