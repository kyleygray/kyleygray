import * as themes from './themes';

const changeTheme = (theme: themes.Theme) => {
    const root = document.documentElement;
    console.log(root);
    console.log(themes);
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--success", theme.success);
    root.style.setProperty("--danger", theme.danger);
    root.style.setProperty("--background", theme.background);
};

export default function useThemeService() {
    return {
        changeTheme
    }
}