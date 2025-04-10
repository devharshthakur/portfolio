import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Changed to JetBrains Mono
import "./globals.css";
import { Providers } from "@/components/providers";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono", // Updated variable name
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Personal Developer Portfolio Website", // Fixed typo in description
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetBrainsMono.variable}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
