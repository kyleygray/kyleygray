<template>
  <AccessibilityWrapper>
    <NavigationComponent />
    <PageHandler />
  </AccessibilityWrapper>
</template>

<script lang="ts">
import { defineComponent, watch, ref, provide, computed, onMounted, onBeforeUnmount } from "vue";
import NavigationComponent from "@/components/Navigation.vue";
import PageHandler from "@/components/PageHandler.vue";
import AccessibilityWrapper from "@/components/AccessibilityWrapper.vue"

import useStore from "@/services/store";

export default defineComponent({
  components: {
    NavigationComponent,
    PageHandler,
    AccessibilityWrapper,
  },
  
  setup() {
    const { state, methods } = useStore();
    const viewWidth = ref(window.innerWidth);
    const MOBILE_WIDTH = "768";
    const isMobileDevice = computed(() => {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    });
    const isMobile = computed(() => {
      return (isMobileDevice.value || (viewWidth.value < MOBILE_WIDTH));
    });
    const mobileHelper = () => {
      return {
        viewWidth,
        MOBILE_WIDTH,
        isMobile
      }
    }
    provide("mobileHelper", mobileHelper());
    const handleResize = () => {
      viewWidth.value = window.innerWidth;
    }

    onMounted(() => {
      window.addEventListener('resize', handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('resize', handleResize);
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
      {immediate: true},
    );

    return {
      state,
      methods
    }
  },

});
</script>

<style lang="scss">

html,
body {
  margin: 0;
  width: 100%;
  background-color: var(--background);
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
  font-family: 'Anonymous Pro', monospace;
  // text-align: center;
  color: var(--primary);
  background-color: var(--background);
  transition: background-color 0.5s ease, color 0.5s ease;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Rubik', serif;
}

main {
  padding: 0;
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

</style>

