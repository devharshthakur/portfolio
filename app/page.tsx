/**
 * Home Page Component
 *
 * The main entry point for the portfolio website.
 *
 * @page
 * @description
 * This page serves as the landing page for the portfolio, organizing the
 * various sections in a logical flow:
 * 1. Profile Information - Personal details and introduction
 * 2. Skills Section - Technical skills and technologies
 * 3. Project Section - Showcase of completed projects
 * 4. Package Section - Highlighting published packages/libraries
 *
 * The layout is responsive and maintains a consistent design language
 * throughout all sections.
 */

import { Packages, Profile, Projects, Skills } from "@/components/custom/home/export";
import { Header } from "@/components/custom/home/header/Header";

export default function Home() {
	return (
		<div className="bg-background text-foreground flex min-h-screen flex-col">
			<Header />
			<main className="flex-1 px-3 py-4 sm:px-4 sm:py-6 md:px-8 lg:px-12 lg:py-10">
				<div className="mx-auto grid max-w-4xl gap-8 sm:gap-10 md:gap-12">
					<Profile />
					<Skills />
					<Projects />
					<Packages />
				</div>
			</main>
		</div>
	);
}
