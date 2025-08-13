import { socialLinks } from "@/components/custom/contact/contact.data";
import { ContactForm } from "@/components/custom/contact/ContactForm";
import { SocialIcon } from "@/components/custom/contact/SocialIcon";
import { ModeToggle } from "@/components/mode-toogle";
import { Button } from "@/components/ui/button";
import { Briefcase, GraduationCap, Home, Mail, MapPin } from "lucide-react";
import Link from "next/link";
import type React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function ContactPage(): React.ReactElement {
	return (
		<main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
			{/* Theme Toggle */}
			<div className="absolute top-6 right-6 z-50">
				<ModeToggle />
			</div>

			{/* Home Button */}
			<div className="absolute top-6 left-6 z-50">
				<Button
					asChild
					variant="outline"
					size="icon"
					className="border-yellow-300 text-yellow-700 hover:bg-yellow-100 dark:border-yellow-700 dark:text-yellow-400 dark:hover:bg-yellow-900/30"
				>
					<Link href="/">
						<Home className="h-[1.2rem] w-[1.2rem] transition-all" />
						<span className="sr-only">Back to home</span>
					</Link>
				</Button>
			</div>

			{/* Hero Section */}
			<section className="relative overflow-hidden border-b border-zinc-200 bg-white pt-12 pb-8 dark:border-zinc-800 dark:bg-zinc-900">
				<div className="bg-grid-pattern absolute inset-0 opacity-5"></div>

				<div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8">
					<div className="mx-auto max-w-3xl text-center">
						<div className="animate-fade-in mb-6 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-green-300 bg-green-100 px-4 py-2 text-sm font-medium text-green-800 transition-all hover:bg-green-200 dark:border-green-700/60 dark:bg-green-900/40 dark:text-green-200 dark:hover:bg-green-800/60">
							<Briefcase className="h-4 w-4" />
							<span>Available for Opportunities</span>
						</div>

						<h1 className="animate-fade-in-up relative bg-linear-to-r from-slate-800 to-slate-600 bg-clip-text font-mono text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl dark:from-slate-100 dark:to-slate-300">
							Eager to Learn & Gain Experience
							<div className="absolute right-1/4 -bottom-2 left-1/4 -z-10 mx-auto h-3 w-1/2 rounded-full bg-slate-500/20 blur-xs dark:bg-slate-400/20"></div>
						</h1>

						<p className="animate-fade-in-up animation-delay-200 mt-6 text-lg text-zinc-600 dark:text-zinc-400">
							I'm a final year engineering student seeking full-time positions or paid internships
							to kickstart my career in tech.
						</p>
					</div>
				</div>
			</section>

			{/* Career Status Cards */}
			<section className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
				<div className="grid gap-8 md:grid-cols-3">
					{/* Education Card */}
					<div className="group relative overflow-hidden rounded-xl border-2 border-yellow-300 bg-white p-1 shadow-xs transition-all duration-300 hover:shadow-md dark:border-yellow-700/60 dark:bg-zinc-900">
						<div className="relative flex h-full flex-col items-center rounded-lg bg-white p-6 text-center dark:bg-zinc-900">
							<div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-yellow-200 bg-yellow-50 transition-transform duration-300 group-hover:scale-110 dark:border-yellow-700/60 dark:bg-yellow-900/40">
								<GraduationCap className="h-10 w-10 text-yellow-600 transition-transform duration-300 group-hover:scale-110 dark:text-yellow-400" />
							</div>
							<h3 className="mb-3 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
								Education
							</h3>
							<p className="mb-4 text-zinc-600 dark:text-zinc-400">Final Year / Last Semester</p>
							<div className="mt-auto">
								<span className="inline-flex items-center rounded-md border border-yellow-200 bg-yellow-50 px-4 py-1.5 text-sm font-medium text-yellow-700 dark:border-yellow-700/40 dark:bg-yellow-900/30 dark:text-yellow-300">
									Bachelor of Engineering (BE)
								</span>
							</div>
						</div>
					</div>

					{/* Career Status Card */}
					<div className="group relative overflow-hidden rounded-xl border-2 border-indigo-300 bg-white p-1 shadow-xs transition-all duration-300 hover:shadow-md dark:border-indigo-700/60 dark:bg-zinc-900">
						<div className="relative flex h-full flex-col items-center rounded-lg bg-white p-6 text-center dark:bg-zinc-900">
							<div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 transition-transform duration-300 group-hover:scale-110 dark:border-indigo-700/60 dark:bg-indigo-900/40">
								<Briefcase className="h-10 w-10 text-indigo-600 transition-transform duration-300 group-hover:scale-110 dark:text-indigo-400" />
							</div>
							<h3 className="mb-3 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
								Career Status
							</h3>
							<p className="mb-4 text-zinc-600 dark:text-zinc-400">
								Fresher with no industry experience
							</p>
							<div className="mt-auto">
								<span className="inline-flex items-center rounded-md border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 dark:border-indigo-700/40 dark:bg-indigo-900/30 dark:text-indigo-300">
									Seeking Full-time & Paid Internships
								</span>
							</div>
						</div>
					</div>

					{/* Location Card */}
					<div className="group relative overflow-hidden rounded-xl border-2 border-rose-300 bg-white p-1 shadow-xs transition-all duration-300 hover:shadow-md dark:border-rose-700/60 dark:bg-zinc-900">
						<div className="relative flex h-full flex-col items-center rounded-lg bg-white p-6 text-center dark:bg-zinc-900">
							<div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-rose-200 bg-rose-50 transition-transform duration-300 group-hover:scale-110 dark:border-rose-700/60 dark:bg-rose-900/40">
								<MapPin className="h-10 w-10 text-rose-600 transition-transform duration-300 group-hover:scale-110 dark:text-rose-400" />
							</div>
							<h3 className="mb-3 text-2xl font-bold text-zinc-800 dark:text-zinc-100">
								Location Preference
							</h3>
							<p className="mb-4 text-zinc-600 dark:text-zinc-400">Remote, Hybrid, or In-office</p>
							<div className="mt-auto">
								<span className="inline-flex items-center rounded-md border border-rose-200 bg-rose-50 px-4 py-1.5 text-sm font-medium text-rose-700 dark:border-rose-700/40 dark:bg-rose-900/30 dark:text-rose-300">
									Prefer Mumbai, Pune, Delhi for in-office
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Form Section */}
			<section id="contact-form" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
				<div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xs dark:bg-zinc-900">
					<div className="grid gap-0 md:grid-cols-2">
						{/* Contact Information Section */}
						<div className="relative overflow-hidden rounded-l-2xl border-2 border-zinc-300 bg-white p-8 shadow-xs md:p-10 dark:border-zinc-700/60 dark:bg-zinc-900">
							<div className="relative z-10 flex h-full flex-col justify-between space-y-8">
								<div className="space-y-6">
									<div>
										<h2 className="font-mono text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
											Contact Me
										</h2>
										<div className="mt-2 h-1.5 w-24 rounded-full bg-zinc-500/20"></div>
									</div>

									<p className="text-lg text-zinc-600 dark:text-zinc-400">
										I'm actively looking for full-time positions and paid internships as I complete
										my engineering degree. I'm eager to apply my skills in a professional
										environment.
									</p>
								</div>

								<div className="space-y-6">
									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 shadow-xs dark:border-indigo-700/60 dark:bg-indigo-900/40">
											<Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
										</div>
										<div>
											<p className="font-medium text-zinc-800 dark:text-zinc-100">Email</p>
											<a
												href="mailto:workharshthakur2002@gmail.com"
												className="text-sm text-zinc-600 transition-colors hover:text-indigo-700 dark:text-zinc-400 dark:hover:text-indigo-400"
											>
												workharshthakur2002@gmail.com
											</a>
										</div>
									</div>

									<div className="flex items-center gap-4">
										<div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 shadow-xs dark:border-indigo-700/60 dark:bg-indigo-900/40">
											<FaSquareXTwitter className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
										</div>
										<div>
											<p className="font-medium text-zinc-800 dark:text-zinc-100">X (Twitter)</p>
											<a
												href="https://twitter.com/Harshthakur2002"
												target="_blank"
												rel="noopener noreferrer"
												className="text-sm text-zinc-600 transition-colors hover:text-indigo-700 dark:text-zinc-400 dark:hover:text-indigo-400"
											>
												@Harshthakur2002
											</a>
										</div>
									</div>
								</div>

								{/* Professional Links */}
								<div className="space-y-4">
									<h3 className="text-lg font-semibold">Professional Profiles</h3>
									<div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
										{socialLinks.map((link) => (
											<a
												key={link.name}
												href={link.url}
												target="_blank"
												rel="noopener noreferrer"
												className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-800 shadow-xs transition-all hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
											>
												<SocialIcon iconType={link.iconType} />
												{link.name}
											</a>
										))}
									</div>
								</div>

								{/* Availability Status */}
								<div className="rounded-xl border border-green-200 bg-green-50 p-4 shadow-xs dark:border-green-700/40 dark:bg-green-900/20">
									<div className="flex items-center gap-2">
										<div className="h-3 w-3 animate-pulse rounded-full bg-green-500"></div>
										<p className="text-sm font-medium text-green-700 dark:text-green-400">
											Available for Opportunities
										</p>
									</div>
									<div className="mt-1 px-4 text-xs text-zinc-600 dark:text-zinc-400">
										Expected graduation: May end 2025
										<p className="pt-1">Ready to join immediately after</p>
									</div>
								</div>
							</div>
						</div>

						{/* the ContactForm component */}
						<ContactForm />
					</div>
				</div>
			</section>
		</main>
	);
}
