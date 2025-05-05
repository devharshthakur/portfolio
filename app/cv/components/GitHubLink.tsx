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
    <div className="flex items-center">
      <FaGithub className="text-purple-600 dark:text-purple-400 mr-2" size={16} />
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-purple-700 dark:text-purple-400 border-b border-purple-300 dark:border-purple-700/50 pb-0.5 flex items-center hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
      >
        github.com/{username}
        <ExternalLink size={12} className="ml-1 text-purple-500 dark:text-purple-500" />
      </a>
    </div>
  );
}
