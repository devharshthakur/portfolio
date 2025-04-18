/**
 * Skills Page Theme Configuration
 *
 * Centralizes all theme-related styling for the skills page including:
 * - Color schemes for light/dark modes
 * - Gradient definitions
 * - Border styles
 * - Shadow effects
 * - Background variations
 *
 * This theme is designed to maintain visual consistency across
 * all components of the skills page while supporting both light
 * and dark mode variants.
 */

export const skillsTheme = {
  colors: {
    primary: {
      light: {
        text: "text-green-600",
        bg: "bg-green-500",
        bgHover: "hover:bg-green-600",
        border: "border-green-500",
        borderLight: "border-green-200",
        gradient: {
          from: "from-green-400",
          to: "to-emerald-500",
          bg: "bg-gradient-to-r from-green-400 to-emerald-500",
        },
        bgHoverButton: "hover:bg-green-100",
      },
      dark: {
        text: "dark:text-green-400",
        bg: "dark:bg-green-500",
        bgHover: "dark:hover:bg-green-400",
        border: "dark:border-green-500",
        borderLight: "dark:border-green-600/70",
        gradient: {
          from: "dark:from-green-400",
          to: "dark:to-emerald-400",
          bg: "dark:bg-gradient-to-r dark:from-green-400 dark:to-emerald-400",
        },
        bgHoverButton: "dark:hover:bg-green-500/50",
      },
    },
    background: {
      light: {
        primary: "bg-white/80",
        secondary: "bg-green-100",
        tertiary: "bg-emerald-100",
        gradient: "bg-gradient-to-br from-white to-green-50/70",
        blur: "bg-green-200",
      },
      dark: {
        primary: "dark:bg-gray-800/95",
        secondary: "dark:bg-green-700/40",
        tertiary: "dark:bg-emerald-700/40",
        gradient:
          "dark:bg-gradient-to-br dark:from-gray-800 dark:to-green-900/60",
        blur: "dark:bg-green-400",
      },
    },
    effects: {
      light: {
        fade: "bg-gradient-to-r from-transparent via-gray-200/80 to-transparent",
        glow: "bg-green-300/30",
      },
      dark: {
        fade: "dark:bg-gradient-to-r dark:from-transparent dark:via-gray-600/50 dark:to-transparent",
        glow: "dark:bg-green-400/40",
      },
    },
  },
  border: {
    light: {
      primary: "border-green-200",
      subtle: "border border-gray-200/70",
    },
    dark: {
      primary: "dark:border-green-400/70",
      subtle: "dark:border dark:border-gray-600/70",
    },
  },
  shadow: {
    light: "shadow-green-100/50",
    dark: "dark:shadow-green-700/30",
  },
  opacity: {
    subtle: "opacity-30",
  },
};
