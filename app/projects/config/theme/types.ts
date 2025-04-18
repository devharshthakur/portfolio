// Define theme config interface
export interface ThemeConfig {
  colors: {
    primary: {
      light: {
        bg: string;
        bgLight: string;
        bgHover: string;
        bgHoverButton: string;
        border: string;
        borderLight: string;
        text: string;
        accent: string;
        gradient: {
          from: string;
          to: string;
          bg: string;
        };
      };
      dark: {
        bg: string;
        bgLight: string;
        bgHover: string;
        bgHoverButton: string;
        border: string;
        borderLight: string;
        text: string;
        accent: string;
        gradient: {
          from: string;
          to: string;
          bg: string;
        };
      };
    };
    background: {
      light: {
        primary: string;
        secondary: string;
        tertiary: string;
        gradient: string;
        blur: string;
      };
      dark: {
        primary: string;
        secondary: string;
        tertiary: string;
        gradient: string;
        blur: string;
      };
    };
    effects: {
      light: {
        glow: string;
        fade: string;
      };
      dark: {
        glow: string;
        fade: string;
      };
    };
  };
  opacity: {
    subtle: string;
  };
  border: {
    light: {
      primary: string;
      secondary: string;
      subtle: string;
    };
    dark: {
      primary: string;
      secondary: string;
      subtle: string;
    };
  };
  shadow: {
    light: string;
    dark: string;
  };
  hover: {
    light: {
      border: string;
    };
    dark: {
      border: string;
    };
  };
}
