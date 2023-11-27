<template>
  <AccessibilityWrapper>
    <div class="resume-btn">
      <a :href="resume" target="_blank" class="resume-btn inverted-btn">My Resumé</a>
    </div>
    <NavigationComponent />
    <PageHandler />
  </AccessibilityWrapper>
</template>

<script lang="ts">
import {
  defineComponent,
  watch,
  ref,
  provide,
  computed,
  onMounted,
  onBeforeMount,
  onBeforeUnmount,
} from "vue";
import NavigationComponent from "@/components/Navigation.vue";
import PageHandler from "@/components/PageHandler.vue";
import AccessibilityWrapper from "@/components/AccessibilityWrapper.vue";

import useThemes from "@/services/themes.ts";
import useStore from "@/services/store";

import resume from "@/assets/KyleyGrayResume.pdf";

// import design0 from "@/assets/design/design0.jpg";
// import design1 from "@/assets/design/design1.jpg";
// import design2 from "@/assets/design/design2.jpg";
// import design3 from "@/assets/design/design3.jpg";
// import backyard from "@/assets/nature/fullbackyard.jpg";
// import flower from "@/assets/nature/psychoflower.jpg";
import dogmoeba from "@/assets/nature/dogmoeba.jpg";

export default defineComponent({
  components: {
    NavigationComponent,
    PageHandler,
    AccessibilityWrapper,
  },

  setup() {
    const { state, methods } = useStore();
    const themes = useThemes();
    const changeTheme = useStore().methods.setTheme;
    const viewWidth = ref(window.innerWidth);
    const MOBILE_WIDTH = "768";
    const isMobileDevice = computed(() => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );
    });
    const isMobile = computed(() => {
      // return isMobileDevice.value || viewWidth.value < MOBILE_WIDTH;
      return viewWidth.value < MOBILE_WIDTH;
    });
    const mobileHelper = () => {
      return {
        viewWidth,
        MOBILE_WIDTH,
        isMobile,
      };
    };
    provide("mobileHelper", mobileHelper());
    const handleResize = () => {
      viewWidth.value = window.innerWidth;
    };

    const handleThemeChange = (dark: boolean) => {
      if (dark) {
        changeTheme(themes.invertedTheme);
      } else {
        changeTheme(themes.defaultTheme);
      }
    };

    onBeforeMount(() => {
      handleThemeChange(window.matchMedia("(prefers-color-scheme: dark)").matches);
    });

    onMounted(() => {
      window.addEventListener("resize", handleResize);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          handleThemeChange(e.matches);
        });
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", (e) => {
          handleThemeChange(e.matches);
        });
    });

    watch(
      () => state.animationsOff,
      (animationsOff) => {
        const root = document.documentElement;
        if (animationsOff) {
          root.classList.add("animations-off");
        } else {
          root.classList.remove("animations-off");
        }
      },
      { immediate: true }
    );

    return {
      state,
      methods,
      resume,
      // design0,
      // design1,
      // design2,
      // design3,
      // backyard,
      // flower,
      dogmoeba,
    };
  },
});
</script>

<style lang="scss">
@font-face {
  font-family: "Rubik";
  src: url("@/assets/fonts/Rubik-VariableFont_wght.ttf") format("truetype");
}

@font-face {
  font-family: "Inconsolata";
  src: url("@/assets/fonts/Inconsolata-VariableFont_wdth,wght.ttf") format("truetype");
}

html,
body {
  margin: 0;
  width: 100%;
  background-color: var(--secondary);
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricprecision;
}

* {
  box-sizing: border-box;
}

#app {
  display: grid;
  font-family: "Inconsolata", courier, monospace;
  // text-align: center;
  color: var(--primary);
  background-color: var(--secondary);
  transition: background-color 0.5s ease, color 0.5s ease;
  width: 100vw;
  height: 100svh;
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Rubik", Arial, serif;
}

main {
  padding: 0;
}

.resume-btn {
  position: fixed;
  z-index: 100;
  bottom: 0;
  left: 0;
  display: flex;
  justify-self: center;
  justify-content: center;
  align-items: center;
  width: 6em;
  height: 2em;
  // text-align: center;
  // padding-top: 5px;
  transition: transform 0.5s ease, width 0.5s ease;

  a {
    position: absolute;
    // border: 1px solid var(--primary);
    color: var(--secondary);
    background-color: var(--primary);
    border-radius: 0em 1em 0em 0em;
    // font-weight: bold;
    font-size: 0.8em;
  }
}

.animations-off {
  transition: all 0s !important;
  transition-duration: 0s !important;
  animation: unset;
  * {
    transition: all 0s !important;
    transition-duration: 0s !important;
    animation: unset !important;
  }
}

.primary-bg {
  background-color: var(--primary);
  transition: background-color 0.5s ease;
}
.secondary-bg {
  background-color: var(--secondary);
  transition: background-color 0.5s ease;
}
.accent-bg {
  background-color: var(--accent);
  transition: background-color 0.5s ease;
}
.primary-text {
  color: var(--primary);
  transition: color 0.5s ease;
}
.secondary-text {
  color: var(--secondary);
  transition: color 0.5s ease;
}
.accent-text {
  color: var(--accent);
  transition: color 0.5s ease;
}
</style>
