export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  compliment: string;
  background: string;
  black: string;
  white: string;
  inverted: boolean;
}

const defaultTheme: Theme = {
  name: "light",
  primary: "rgb(40, 40, 40)",
  secondary: "rgb(238, 238, 238)",
  accent: "rgb(220, 220, 220)",
  compliment: "rgb(0, 0, 0)",
  background: "rgb(238, 238, 238)",
  black: "rgb(0, 0, 0)",
  white: "rgb(255, 255, 255)",
  inverted: false,
};

const invertedTheme: Theme = {
  name: "dark",
  primary: "rgb(238, 238, 238)",
  secondary: "rgb(40, 40, 40)",
  accent: "rgb(60, 60, 60)",
  compliment: "rgb(255, 255, 255)",
  background: "rgb(34, 34, 34)",
  black: "rgb(0, 0, 0)",
  white: "rgb(255, 255, 255)",
  inverted: true,
};

export default function useThemes() {
  return {
    defaultTheme,
    invertedTheme,
  };
}
