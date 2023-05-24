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
  primary: "#000000",
  secondary: "#FFFFFF",
  accent: "#4830bd",
  compliment: "#FFFFFF",
  background: "#EEEEEE",
  black: "#000000",
  white: "#FFFFFF",
  inverted: false,
};

const invertedTheme: Theme = {
  name: "dark",
  primary: "#FFFFFF",
  secondary: "#000000",
  accent: "#4830bd",
  compliment: "#FFFFFF",
  background: "#222222",
  black: "#000000",
  white: "#FFFFFF",
  inverted: true,
};

export default function useThemes() {
  return {
    defaultTheme,
    invertedTheme,
  };
}
