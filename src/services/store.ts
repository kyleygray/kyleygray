import { ref, readonly } from "vue";
import { Theme, changeTheme } from "./themeService";
import useThemes from "./themes";

const state = {
    theme: ref(useThemes().defaultTheme),
    animations: ref(true),
    contrast: ref(false),
    activeComponent: ref("home"),
};

const methods = {
    setTheme(theme: Theme) {
        state.theme.value = theme;
        changeTheme(state.theme.value);
    },
    toggleAnimations() {
        state.animations.value = !state.animations.value;
        console.log(state.animations.value);
    },
    toggleContrast() {
        state.contrast.value = !state.animations.value;
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