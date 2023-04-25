import * as themes from './themes';

export interface Theme {
    primary: string;
    secondary: string;
    accent: string;
    success: string;
    danger: string;
}

export const changeTheme = (theme: Theme) => {
    const root = document.documentElement;
    console.log(root);
    console.log(themes);
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--secondary", theme.secondary);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--success", theme.success);
    root.style.setProperty("--danger", theme.danger);
};