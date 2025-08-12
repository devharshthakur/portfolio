import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Layers } from "lucide-react";
import Image from "next/image";
import { AvailabilityBadge } from "./utils/AvailabilityBadge";

export function Profile() {
	return (
		<section className="space-y-8" aria-labelledby="profile-heading">
			<Card className="border-2 border-slate-500 bg-slate-100/50 p-4 shadow-xl dark:border-slate-600 dark:bg-slate-800/30">
				<div className="flex flex-col gap-6 sm:flex-row">
					<div className="shrink-0 border-slate-300 sm:border-r sm:pr-6 dark:border-slate-700">
						<Image
							src="/dev-pfp.jpeg"
							width={128}
							height={128}
							alt="Profile Picture of Harsh Thakur"
							className="rounded-full border-2 border-slate-400 shadow-md dark:border-slate-600"
							style={{ aspectRatio: "1/1", objectFit: "cover" }}
							priority
						/>
					</div>

					<div className="flex flex-col justify-center space-y-3">
						<header>
							<div className="mb-1.5 flex flex-wrap items-center gap-2">
								<h1
									id="profile-heading"
									className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl dark:text-slate-200"
								>
									Harsh Thakur
								</h1>
								<AvailabilityBadge />
							</div>

							<Badge
								variant="default"
								className="flex w-fit items-center gap-1 bg-orange-600 px-2 py-0.5 text-xs shadow-xs hover:bg-orange-700 dark:bg-orange-700"
							>
								<Layers size={12} className="text-primary-foreground" />
								<span>Full Stack Web Developer</span>
							</Badge>
						</header>

						<p className="text-muted-foreground max-w-prose text-sm leading-relaxed">
							Building efficient, scalable and maintainable web applications with modern
							technologies.
						</p>
					</div>
				</div>
			</Card>
		</section>
	);
}
