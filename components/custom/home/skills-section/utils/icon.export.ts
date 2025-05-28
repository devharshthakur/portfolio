import { ComponentType, SVGProps } from 'react';
import * as Fa from 'react-icons/fa';
import {
  FaCalendarAlt,
  FaClock,
  FaCodeBranch,
  FaDownload,
  FaExclamationCircle,
  FaGithub,
  FaGlobe,
  FaHistory,
  FaLink,
  FaNpm,
  FaStar,
  FaTerminal,
} from 'react-icons/fa';
import * as Si from 'react-icons/si';

/**
 * Type definition for icon libraries.
 * This type maps string keys to React component types.
 *
 * @typedef {Object} IconLibraries
 * @property {Record<string, ComponentType<SVGProps<SVGElement>>>} [key] - The key representing the icon library.
 */
type IconLibraries = {
  [key: string]: Record<string, ComponentType<SVGProps<SVGElement>>>;
};

/**
 * Mapping of icon prefixes to their respective libraries.
 * This object allows for easy access to different icon libraries based on the prefix of the icon name.
 *
 * @type {IconLibraries}
 */
const iconLibraries: IconLibraries = {
  Fa,
  Si,
};

/**
 * Retrieves the icon component from the specified icon name.
 * This function extracts the prefix from the icon name to determine which library to use.
 *
 * @param {string} iconName - The name of the icon to retrieve.
 * @returns {React.ComponentType | undefined} The corresponding icon component, or undefined if not found.
 */
const getIconComponent = (iconName: string) => {
  const prefix = iconName.slice(0, 2);
  const library = iconLibraries[prefix];
  return library?.[iconName];
};

type IconType = ComponentType<{ className?: string; [key: string]: unknown }>;

const Icons: Record<string, IconType> = {};

Icons.FaGithub = FaGithub;
Icons.FaLink = FaLink;
Icons.FaCalendarAlt = FaCalendarAlt;
Icons.FaClock = FaClock;
Icons.FaNpm = FaNpm;
Icons.FaDownload = FaDownload;
Icons.FaTerminal = FaTerminal;
Icons.FaStar = FaStar;
Icons.FaCodeBranch = FaCodeBranch;
Icons.FaExclamationCircle = FaExclamationCircle;
Icons.FaHistory = FaHistory;
Icons.FaGlobe = FaGlobe;

export type IconName = keyof typeof Icons;

export const getIcon = (name: IconName) => Icons[name];

export { Icons };
