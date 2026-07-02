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
  title: "Personal | Portfolio",
  description: "Created by Shanto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <ThemeProvider>
          <SmoothScrollProvider>
            <Navbar />
            {children}
          </SmoothScrollProvider>
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
