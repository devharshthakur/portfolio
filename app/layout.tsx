import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google"; // Changed to JetBrains Mono
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

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
        {" "}
        {/* Added font class to body */}
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
