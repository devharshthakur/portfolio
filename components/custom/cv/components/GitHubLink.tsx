import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

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
export function GitHubLink({ username, url }: { username: string; url?: string }): React.ReactElement {
  const githubUrl = url || `https://github.com/${username}`;

  return (
    <div className="relative group">
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-purple-700 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
      >
        <div className="flex items-center justify-center w-7 h-7 bg-purple-100 dark:bg-purple-900/40 rounded-full">
          <FaGithub className="text-purple-600 dark:text-purple-400" size={14} />
        </div>
        <span className="text-sm border-b border-purple-300 dark:border-purple-700/50 group-hover:border-purple-500 dark:group-hover:border-purple-500/80 transition-colors">
          github.com/{username}
        </span>
        <ExternalLink
          size={12}
          className="text-purple-500 dark:text-purple-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </a>
    </div>
  );
}
