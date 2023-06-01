import { ref, readonly, Ref } from "vue";
import useThemeService from "./themeService";
import * as themes from "./themes";

const state = {
  theme: ref(themes.default().defaultTheme),
  animationsOff: ref(false),
  contrast: ref(false),
  activeComponent: ref("home"),
};

const methods = {
  setTheme(theme: themes.Theme) {
    state.theme.value = theme;
    // console.log(state.theme.value);
    useThemeService().changeTheme(state.theme.value);
  },
  toggleAccessibility() {
    state.animationsOff.value = !state.animationsOff.value;
  },
  toggleContrast() {
    state.contrast.value = !state.animationsOff.value;
  },
  setActiveComponent(component: string) {
    state.activeComponent.value = component;
    // console.log(state.activeComponent.value);
  },
  getAnimationState(): boolean {
    return state.animationsOff.value;
  },
};

export default function useStore() {
  return {
    state: readonly(state),
    methods,
  };
}
