/**
 * Header component that renders the navigation bar for the application.
 * It includes navigation buttons and a mode toggle for switching between
 * light and dark themes.
 *
 * @returns {JSX.Element} The rendered header component.
 */
import { FileText, GitPullRequest } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { MdContactPage } from "react-icons/md";
import { ModeToggle } from "@/components/mode-toogle";
import { ColoredButton } from "@/components/ui/colored-button";

export function Header() {
	return (
		<header className="z-50 mt-4 mb-4 flex flex-col items-center justify-between gap-4 px-4 backdrop-blur-sm sm:flex-row sm:gap-0 sm:px-6 md:px-8">
			<div className="flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-4">
				<ColoredButton
					href="https://github.com/devharshthakur"
					label="@devharshthakur"
					icon={FaGithub}
					variant="outline"
					isExternal={true}
					className="border-2 border-teal-300 text-teal-500 hover:bg-teal-50 hover:text-teal-600 dark:border-teal-700 dark:text-teal-400 dark:hover:bg-teal-900/30 dark:hover:text-teal-400"
				/>
				<ColoredButton
					href="/contact"
					label="Contact Me"
					icon={MdContactPage}
					variant="outline"
					className="border-2 border-orange-300 text-orange-600 hover:border-orange-500 hover:bg-orange-100/50 hover:text-orange-700 dark:border-orange-700 dark:text-orange-400 dark:hover:border-orange-500 dark:hover:bg-orange-900/30 dark:hover:text-orange-300"
				/>
			</div>
			<div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end sm:gap-4">
				<ColoredButton
					href="/about"
					label="About Me"
					variant="outline"
					className="border-2 border-blue-300 text-blue-600 hover:border-blue-500 hover:bg-blue-100/50 hover:text-blue-700 dark:border-blue-700 dark:text-blue-400 dark:hover:border-blue-500 dark:hover:bg-blue-900/30 dark:hover:text-blue-300"
				/>
				<ColoredButton
					href="https://www.devharshthakur.blog/"
					label="Blogs"
					variant="outline"
					className="border-2 border-amber-300 text-amber-600 hover:border-amber-500 hover:bg-amber-100/50 hover:text-amber-700 dark:border-amber-700 dark:text-amber-400 dark:hover:border-amber-500 dark:hover:bg-amber-900/30 dark:hover:text-amber-300"
				/>
				<ColoredButton
					href="/cv"
					label="CV"
					icon={FileText}
					variant="outline"
					className="border-2 border-cyan-300 text-cyan-600 hover:border-cyan-500 hover:bg-cyan-100/50 hover:text-cyan-700 dark:border-cyan-700 dark:text-cyan-400 dark:hover:border-cyan-500 dark:hover:bg-cyan-900/30 dark:hover:text-cyan-300"
				/>
				<ColoredButton
					href="/contribute"
					label="Contribute"
					icon={GitPullRequest}
					variant="outline"
					className="border-2 border-slate-500 text-slate-700 hover:border-slate-500 hover:bg-slate-100 hover:text-slate-900 dark:border-slate-400 dark:text-slate-300 dark:hover:border-slate-500 dark:hover:bg-slate-800 dark:hover:text-slate-100"
				/>
				<ModeToggle className="border-2 border-teal-300 hover:bg-teal-50 hover:text-teal-600 dark:border-teal-700 dark:hover:bg-teal-900/30 dark:hover:text-teal-400" />
			</div>
		</header>
	);
}
