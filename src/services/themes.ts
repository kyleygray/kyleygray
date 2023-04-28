import { Theme } from "./themeService";

const defaultTheme: Theme = {
    primary: "#000000",
    secondary: "#FFFFFF",
    accent: "#EEEEEE",
    success: "#00FF00",
    danger: "#FF0000",
    background: "#FFFFFF",
}

const invertedTheme: Theme = {
    primary: "#FFFFFF",    
    secondary: "#000000",  
    accent: "#222222",     
    success: "#00FF00",    
    danger: "#FF0000",     
    background: "#000000",
}

export default function useThemes() {
    return {
        defaultTheme,
        invertedTheme,
    }
}