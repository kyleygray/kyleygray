import { Theme } from "./themeService";

const defaultTheme: Theme = {
    primary: "#000000",
    secondary: "#FFFFFF",
    accent: "#EEEEEE",
    success: "#00FF00",
    danger: "#FF0000",
    background: "#FFFFFF",
}

const dalleTheme: Theme = {
    primary: "#1A237E",    // Indigo
    secondary: "#FFC107",  // Amber
    accent: "#9C27B0",     // Purple
    success: "#4CAF50",    // Green
    danger: "#F44336",     // Red
    background: "#FFC107",
}

export default function useThemes() {
    return {
        defaultTheme,
        dalleTheme,
    }
}