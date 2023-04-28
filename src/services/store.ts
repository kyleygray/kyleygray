import { ref, readonly } from "vue";
import { Theme, changeTheme } from "./themeService";
import useThemes from "./themes";

const state = {
    theme: ref(useThemes().defaultTheme),
    accessible: ref(false),
    contrast: ref(false),
    activeComponent: ref("home"),
};

const methods = {
    setTheme(theme: Theme) {
        state.theme.value = theme;
        changeTheme(state.theme.value);
    },
    toggleAccessibility() {
        state.accessible.value = !state.accessible.value;
        console.log(state.accessible.value);
    },
    toggleContrast() {
        state.contrast.value = !state.accessible.value;
    },
    setActiveComponent(component: string) {
        state.activeComponent.value = component;
    }
}

export default function useStore() {
    return {
        state: readonly(state),
        methods
    }
}