import * as Fa from "react-icons/fa";
import * as Si from "react-icons/si";
import skills from "../skills.data";
import {
  FaGithub,
  FaLink,
  FaCalendarAlt,
  FaClock,
  FaNpm,
  FaDownload,
  FaTerminal,
  FaStar,
  FaCodeBranch,
  FaExclamationCircle,
  FaHistory,
} from "react-icons/fa";

// type for all possible icon libraries
type IconLibraries = {
  [key: string]: any;
};

// Map of icon prefixes to their respective libraries
const iconLibraries: IconLibraries = {
  Fa,
  Si,
};

// Function to get icon component from string
const getIconComponent = (iconName: string) => {
  const prefix = iconName.slice(0, 2);
  const library = iconLibraries[prefix];
  return library?.[iconName];
};

type IconType = React.ComponentType<{ className?: string; [key: string]: any }>;

// Dynamically create Icons object from skills data
const Icons = skills.reduce(
  (acc, { icon }) => {
    const IconComponent = getIconComponent(icon);
    if (IconComponent) {
      acc[icon] = IconComponent;
    }
    return acc;
  },
  {} as Record<string, IconType>,
);

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

// Type for icon names based on skills data
export type IconName = keyof typeof Icons;

// Helper function to get icon component by name
export const getIcon = (name: IconName) => Icons[name];

export { Icons };
