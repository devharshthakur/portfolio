import { Providers } from "@/components/providers";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
	weight: "variable",
});

export const metadata: Metadata = {
	title: "Portfolio",
	description: "My Personal Developer Portfolio Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={geistMono.variable}>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
