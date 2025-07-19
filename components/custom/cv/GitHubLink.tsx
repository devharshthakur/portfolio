import { ExternalLink } from "lucide-react";
import React from "react";
import { FaGithub } from "react-icons/fa";

/**
 * GitHubLink Component
 *
 * @description A component that displays a GitHub profile link with appropriate
 * styling and visual indicators. It includes the GitHub icon, username, and an
 * external link indicator to show it will open in a new tab.
 *
 * @component
 * @param {Object} props - Component props
 * @param {string} props.username - GitHub username
 * @param {string} [props.url] - Custom GitHub URL (defaults to github.com/username)
 *
 * @example
 * ```tsx
 * <GitHubLink username="devharshthakur" />
 * ```
 *
 * @returns {React.ReactElement} A styled GitHub profile link
 */
export function GitHubLink({
	username,
	url,
}: {
	username: string;
	url?: string;
}): React.ReactElement {
	const githubUrl = url || `https://github.com/${username}`;

	return (
		<div className="group relative">
			<a
				href={githubUrl}
				target="_blank"
				rel="noopener noreferrer"
				className="flex items-center gap-2 text-purple-700 transition-colors hover:text-purple-800 dark:text-purple-400 dark:hover:text-purple-300"
			>
				<div className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/40">
					<FaGithub className="text-purple-600 dark:text-purple-400" size={14} />
				</div>
				<span className="border-b border-purple-300 text-sm transition-colors group-hover:border-purple-500 dark:border-purple-700/50 dark:group-hover:border-purple-500/80">
					github.com/{username}
				</span>
				<ExternalLink
					size={12}
					className="text-purple-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-purple-500"
				/>
			</a>
		</div>
	);
}
