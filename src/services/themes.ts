export interface Theme {
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  success: string;
  danger: string;
  background: string;
  inverted: boolean;
}

const defaultTheme: Theme = {
  name: "light",
  primary: "#000000",
  secondary: "#FFFFFF",
  accent: "#EEEEEE",
  success: "#FFB2B2",
  danger: "#B2FFFF",
  background: "#FFFFFF",
  inverted: false,
};

const invertedTheme: Theme = {
  name: "dark",
  primary: "#FFFFFF",
  secondary: "#000000",
  accent: "#222222",
  success: "#008a8a",
  danger: "#F70000",
  background: "#000000",
  inverted: true,
};

export default function useThemes() {
  return {
    defaultTheme,
    invertedTheme,
  };
}
