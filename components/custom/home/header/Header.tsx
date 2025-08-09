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
		<header className="z-50 flex flex-col items-center justify-between gap-4 px-4 py-3 backdrop-blur-sm sm:flex-row sm:gap-0 sm:px-6 md:px-8">
			<div className="flex flex-wrap justify-center gap-3 sm:justify-start sm:gap-4">
				<ColoredButton
					href="https://github.com/devharshthakur"
					label="@devharshthakur"
					icon={FaGithub}
					colorScheme="teal"
					variant="outline"
					isExternal={true}
					className="border-2"
				/>
				<ColoredButton
					href="/contact"
					label="Contact Me"
					icon={MdContactPage}
					colorScheme="orange"
					variant="outline"
					className="border-2"
				/>
			</div>
			<div className="flex flex-wrap items-center justify-center gap-3 sm:justify-end sm:gap-4">
				<ColoredButton
					href="/about"
					label="About Me"
					colorScheme="blue"
					variant="outline"
					className="border-2"
				/>
				<ColoredButton
					href="https://www.devharshthakur.blog/"
					label="Blogs"
					colorScheme="indigo"
					variant="outline"
					className="border-2"
				/>
				<ColoredButton
					href="/cv"
					label="CV"
					icon={FileText}
					colorScheme="purple"
					variant="outline"
					className="border-2"
				/>
				<ColoredButton
					href="/contribute"
					label="Contribute"
					icon={GitPullRequest}
					colorScheme="slate"
					variant="outline"
					className="border-2"
				/>
				<ModeToggle className="border-2" />
			</div>
		</header>
	);
}
