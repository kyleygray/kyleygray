import { ref, readonly } from "vue";
import { Theme, changeTheme } from "./themeService";
import useThemes from "./themes";

const state = {
    theme: ref(useThemes().defaultTheme),
    animationsOff: ref(false),
    contrast: ref(false),
    activeComponent: ref("home"),
};

const methods = {
    setTheme(theme: Theme) {
        state.theme.value = theme;
        changeTheme(state.theme.value);
    },
    toggleAccessibility() {
        state.animationsOff.value = !state.animationsOff.value;
    },
    toggleContrast() {
        state.contrast.value = !state.animationsOff.value;
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