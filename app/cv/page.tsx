import { ModeToggle } from "@/components/mode-toogle";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, FileText, User, Briefcase, GraduationCap, Code, Award } from "lucide-react";
import Link from "next/link";
import { DownloadButton } from "@/components/custom/cv/DownloadButton";

export default function CvPage() {
	return (
		<div className="relative min-h-screen w-full bg-slate-50 dark:bg-slate-950">
			{/* Navigation */}
			<nav className="absolute top-0 right-0 left-0 z-50 flex items-center justify-between p-6">
				<Button
					asChild
					variant="outline"
					size="default"
					className="border-2 border-indigo-300 bg-white/80 text-indigo-700 shadow-sm hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-md dark:border-indigo-700 dark:bg-slate-900/80 dark:text-indigo-400 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/50"
				>
					<Link href="/">
						<Home className="h-[1.2rem] w-[1.2rem]" />
						<span className="sr-only">Back to home</span>
					</Link>
				</Button>
				<ModeToggle className="border-2 border-slate-300 bg-white/80 backdrop-blur-sm hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/80 dark:hover:border-slate-600" />
			</nav>

			{/* Main Content */}
			<main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-20">
				<div className="mx-auto w-full max-w-4xl">
					{/* Hero Section */}
					<div className="mb-12 text-center">
						<div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center">
							<div className="absolute inset-0 rounded-full bg-indigo-200/30 blur-xl dark:bg-indigo-800/30"></div>
							<div className="relative z-10 rounded-full border-2 border-white/30 bg-indigo-600 p-6 shadow-lg dark:border-slate-700/50 dark:bg-indigo-500">
								<FileText className="h-12 w-12 text-white" />
							</div>
						</div>

						<h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl dark:text-slate-100">
							My <span className="text-indigo-600 dark:text-indigo-400">Curriculum Vitae</span>
						</h1>

						<p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-400">
							A comprehensive overview of my professional journey, technical expertise, and
							achievements
						</p>

						<Badge
							variant="secondary"
							className="mt-6 border-2 border-indigo-300 bg-indigo-50 px-4 py-2 text-indigo-700 shadow-sm hover:border-indigo-400 dark:border-indigo-700 dark:bg-indigo-950/50 dark:text-indigo-300 dark:hover:border-indigo-600"
						>
							Updated {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })}
						</Badge>
					</div>

					{/* CV Content Preview */}
					<div className="mb-12 grid gap-8 md:grid-cols-2">
						{/* CV Highlights */}
						<Card className="border-2 border-indigo-200 bg-white/60 p-8 shadow-xl backdrop-blur-sm transition-all duration-200 hover:border-indigo-300 hover:shadow-2xl dark:border-indigo-800 dark:bg-slate-900/60 dark:hover:border-indigo-700">
							<h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
								What's Inside
							</h2>
							<div className="space-y-4">
								{[
									{
										icon: User,
										label: "Professional Profile",
										desc: "Summary and personal details",
									},
									{ icon: Briefcase, label: "Work Experience", desc: "Career history and roles" },
									{ icon: Code, label: "Technical Skills", desc: "Programming languages & tools" },
									{ icon: GraduationCap, label: "Education", desc: "Academic background" },
									{ icon: Award, label: "Achievements", desc: "Projects and certifications" },
								].map((item, index) => (
									<div
										key={index}
										className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 transition-all duration-150 hover:border-slate-300 hover:bg-slate-50/50 dark:border-slate-700 dark:hover:border-slate-600 dark:hover:bg-slate-800/30"
									>
										<div className="rounded-lg border border-white/20 bg-indigo-600 p-2 shadow-sm dark:border-slate-600/30 dark:bg-indigo-500">
											<item.icon className="h-4 w-4 text-white" />
										</div>
										<div>
											<h3 className="font-medium text-slate-900 dark:text-slate-100">
												{item.label}
											</h3>
											<p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
										</div>
									</div>
								))}
							</div>
						</Card>

						{/* Download Section */}
						<Card className="border-2 border-emerald-200 bg-white/60 p-8 shadow-xl backdrop-blur-sm transition-all duration-200 hover:border-emerald-300 hover:shadow-2xl dark:border-emerald-800 dark:bg-slate-900/60 dark:hover:border-emerald-700">
							<div className="mt-18 flex flex-col items-center text-center">
								<div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border-2 border-white/30 bg-emerald-600 shadow-lg dark:border-slate-700/50 dark:bg-emerald-500">
									<FileText className="h-8 w-8 text-white" />
								</div>

								<h2 className="mb-4 text-2xl font-semibold text-slate-900 dark:text-slate-100">
									Download CV
								</h2>

								<p className="mb-6 text-slate-600 dark:text-slate-400">
									Get the complete PDF version of my curriculum vitae
								</p>

								<DownloadButton />

								<div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-500 dark:text-slate-400">
									<span className="flex items-center gap-1">
										<FileText className="h-4 w-4 text-green-600 dark:text-green-400" />
										PDF
									</span>
									<span className="flex items-center gap-1">
										{/* Page icon */}
										<svg
											className="h-4 w-4 text-blue-600 dark:text-blue-400"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											viewBox="0 0 24 24"
										>
											<rect x="6" y="4" width="12" height="16" rx="2" />
											<line x1="9" y1="8" x2="15" y2="8" />
										</svg>
										1 Page
									</span>
									<span className="flex items-center gap-1">
										{/* Star icon for latest version */}
										<svg
											className="h-4 w-4 text-purple-600 dark:text-purple-400"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
										</svg>
										Latest Version
									</span>
								</div>
							</div>
						</Card>
					</div>

					{/* Call to Action */}
					<div className="text-center">
						<p className="mb-8 text-slate-600 dark:text-slate-400">
							Interested in working together? Let's connect and discuss opportunities.
						</p>
						<div className="flex flex-wrap items-center justify-center gap-4">
							<Button
								asChild
								variant="outline"
								className="border-2 border-indigo-300 bg-white/80 shadow-sm hover:border-indigo-400 hover:bg-indigo-50 hover:shadow-md dark:border-indigo-700 dark:bg-slate-900/80 dark:hover:border-indigo-600 dark:hover:bg-indigo-950/50"
							>
								<Link href="/contact">Get in Touch</Link>
							</Button>
							<Button
								asChild
								variant="outline"
								className="border-2 border-purple-300 bg-white/80 shadow-sm hover:border-purple-400 hover:bg-purple-50 hover:shadow-md dark:border-purple-700 dark:bg-slate-900/80 dark:hover:border-purple-600 dark:hover:bg-purple-950/50"
							>
								<Link href="/projects">View Projects</Link>
							</Button>
						</div>
					</div>
				</div>
			</main>

			{/* Footer */}
			<footer className="absolute right-0 bottom-0 left-0 p-6 text-center">
				<p className="text-sm text-slate-500 dark:text-slate-500">
					&copy; {new Date().getFullYear()} devharshthakur.in • All rights reserved
				</p>
			</footer>
		</div>
	);
}
