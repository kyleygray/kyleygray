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
  primary: "rgb(0, 0, 0)",
  secondary: "rgb(255, 255, 255)",
  accent: "rgb(238, 238, 238)",
  compliment: "rgb(0, 0, 0)",
  background: "rgb(238, 238, 238)",
  black: "rgb(0, 0, 0)",
  white: "rgb(255, 255, 255)",
  inverted: false,
};

const invertedTheme: Theme = {
  name: "dark",
  primary: "rgb(255, 255, 255)",
  secondary: "rgb(0, 0, 0)",
  accent: "rgb(51, 51, 51)",
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
