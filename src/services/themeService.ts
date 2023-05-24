import * as themes from "./themes";

const changeTheme = (theme: themes.Theme) => {
  const root = document.documentElement;
  console.log(root);
  console.log(themes);
  root.style.setProperty("--primary", theme.primary);
  root.style.setProperty("--secondary", theme.secondary);
  root.style.setProperty("--accent", theme.accent);
  root.style.setProperty("--compliment", theme.compliment);
  root.style.setProperty("--background", theme.background);
  root.style.setProperty("--black", theme.black);
  root.style.setProperty("--white", theme.white);
};

export default function useThemeService() {
  return {
    changeTheme,
  };
}
