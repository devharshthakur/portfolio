import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toogle";
import { Home } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
	return (
		<div className="text-foreground min-h-screen bg-neutral-200 dark:bg-neutral-900">
			{/* Navigation Section */}
			<nav>
				<div className="max-w-8xl mx-auto px-8 py-6">
					<div className="flex items-center justify-between">
						<Link href="/">
							<Button variant="outline" size="icon" className="gap-2 border-2 border-neutral-200">
								<Home className="h-4 w-4" />
							</Button>
						</Link>
						<ModeToggle className="border-2 border-neutral-400" />
					</div>
				</div>
			</nav>

			<div className="mx-auto max-w-4xl px-6 py-16">
				{/* Header Section */}
				<div className="mb-16 flex flex-col items-center gap-8 text-center">
					<div className="flex-shrink-0">
						<div className="border-border h-48 w-48 overflow-hidden rounded-2xl border-3">
							<Avatar className="h-full w-full rounded-none">
								<AvatarImage
									src="/dev-pfp.jpeg"
									alt="Harsh Thakur"
									className="h-full w-full object-cover"
								/>
								<AvatarFallback className="bg-muted text-primary h-full w-full rounded-none text-4xl font-bold">
									HT
								</AvatarFallback>
							</Avatar>
						</div>
					</div>

					<div className="flex-1">
						<h1 className="mb-6 text-5xl font-bold tracking-tight lg:text-6xl dark:text-shadow-neutral-400">
							About Me
						</h1>
						<p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
							Learn more about my journey as a Software Engineer & Full-Stack Developer, my
							development philosophy, and my passion for crafting innovative digital experiences.
						</p>
					</div>
				</div>

				{/* Main Content */}
				<div className="space-y-16">
					{/* Introduction */}
					<section>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Hi, I'm <span className="text-foreground font-semibold">Harsh Thakur</span>, a
							Software Engineer and Full-Stack Developer based right here in Mumbai, India. For the
							past few years in college, I've been immersed in the world of web development
							specially, focusing on building experiences. My path started at{" "}
							<span className="text-foreground font-semibold">
								Vidyalankar Institute of Technology
							</span>
							, where I'm pursuing a degree in Computer Engineering. It was there I discovered my
							dual passion for the world of web. Since then, I've honed my skills in both areas,
							believing that the best digital products are born from a deep understanding of both
							user experience and technical implementation.
						</p>
					</section>

					{/* Development Philosophy */}
					<section>
						<h2 className="mb-6 text-3xl font-bold tracking-tight">My Development Philosophy</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							My development philosophy is rooted in{" "}
							<span className="text-foreground font-semibold">curiosity</span>. I believe great
							development starts with understanding the 'why' – the user's needs, motivations, and
							pain points.I strive to create applications that feel effortless, where functionality
							and performance work hand-in- hand. Whether I'm crafting pixel-perfect UIs or writing
							clean backend code, my focus is always on creating value for the end-user and
							maintaining high code quality.
						</p>
					</section>

					{/* What Drives Me */}
					<section>
						<h2 className="mb-6 text-3xl font-bold tracking-tight">What Drives Me</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							What keeps me excited about this work is the constant learning and the challenge of
							translating complex technical requirements into elegant, user-friendly solutions. I'm
							fascinated by how frontend interacts with backend systems, how applications are
							deployed and scaled, and how modern web technologies work and continue to evolve.
							Currently, I'm expanding my skills in system projects, started by learning Rust for
							its memory safety and performance benefits, and diving deeper into JavaScript testing
							with Vitest and jest to improve code quality and reliability. As a fresher in the
							field, I'm always eager to take on new challenges and collaborate with other
							developers to build something meaningful.
						</p>
					</section>

					{/* Current Focus */}
					<section>
						<h2 className="mb-6 text-3xl font-bold tracking-tight">Current Focus</h2>
						<p className="text-muted-foreground text-lg leading-relaxed">
							Right now, I'm focused on mastering full-stack development. I'm particularly
							interested in building scalable web applications, working with databases, creating
							robust APIs. I'm also passionate about writing comprehensive tests to ensure code
							reliability. Every project is an opportunity to learn something new and push the
							boundaries of what's possible on the web.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
