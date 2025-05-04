import { ThemeConfig } from "./types";

// Emerald theme configuration for projects page
export const Theme: ThemeConfig = {
  colors: {
    primary: {
      light: {
        bg: "bg-emerald-200",
        bgLight: "bg-emerald-100",
        bgHover: "hover:bg-emerald-300",
        bgHoverButton: "hover:bg-emerald-200",
        border: "border-emerald-400",
        borderLight: "border-emerald-300",
        text: "text-emerald-700",
        accent: "bg-emerald-600",
        gradient: {
          from: "from-emerald-500",
          to: "to-emerald-600",
          bg: "bg-linear-to-b from-emerald-500 to-emerald-600",
        },
      },
      dark: {
        bg: "dark:bg-emerald-900/40",
        bgLight: "dark:bg-emerald-900/30",
        bgHover: "dark:hover:bg-emerald-800/60",
        bgHoverButton: "dark:hover:bg-emerald-900/30",
        border: "dark:border-emerald-700",
        borderLight: "dark:border-emerald-800",
        text: "dark:text-emerald-400",
        accent: "dark:bg-emerald-400",
        gradient: {
          from: "dark:from-emerald-500",
          to: "dark:to-emerald-700",
          bg: "dark:bg-linear-to-b dark:from-emerald-500 dark:to-emerald-700",
        },
      },
    },
    background: {
      light: {
        primary: "bg-white/70",
        secondary: "bg-emerald-200",
        tertiary: "bg-emerald-300",
        gradient:
          "bg-linear-to-r from-emerald-100/80 via-emerald-100/40 to-transparent",
        blur: "bg-emerald-200/30",
      },
      dark: {
        primary: "dark:bg-slate-900/70",
        secondary: "dark:bg-emerald-900/20",
        tertiary: "dark:bg-emerald-800/20",
        gradient:
          "dark:bg-linear-to-r dark:from-emerald-900/30 dark:via-emerald-900/10 dark:to-transparent",
        blur: "dark:bg-emerald-800/20",
      },
    },
    effects: {
      light: {
        glow: "bg-emerald-400/20",
        fade: "bg-linear-to-r from-emerald-400/80 via-emerald-400/40 to-transparent",
      },
      dark: {
        glow: "dark:bg-emerald-700/20",
        fade: "dark:bg-linear-to-r dark:from-emerald-700/80 dark:via-emerald-700/40 dark:to-transparent",
      },
    },
  },
  opacity: {
    subtle: "opacity-20",
  },
  border: {
    light: {
      primary: "border-emerald-400/80",
      secondary: "border-emerald-300/60",
      subtle: "border-emerald-300/40",
    },
    dark: {
      primary: "dark:border-emerald-700/80",
      secondary: "dark:border-emerald-800/60",
      subtle: "dark:border-emerald-800/40",
    },
  },
  shadow: {
    light: "ring-1 ring-emerald-300/50",
    dark: "dark:ring-1 dark:ring-emerald-800/50",
  },
  hover: {
    light: {
      border: "hover:border-emerald-500",
    },
    dark: {
      border: "dark:hover:border-emerald-600",
    },
  },
};
