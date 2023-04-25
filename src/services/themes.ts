import { Theme } from "./themeService";

export const defaultTheme: Theme = {
    primary: "#000000",
    secondary: "#FFFFFF",
    accent: "#888888",
    success: "#00FF00",
    danger: "#FF0000",
}

export const dalleTheme: Theme = {
    primary: "#1A237E",    // Indigo
    secondary: "#FFC107",  // Amber
    accent: "#9C27B0",     // Purple
    success: "#4CAF50",    // Green
    danger: "#F44336",     // Red
}

export default [defaultTheme, dalleTheme]