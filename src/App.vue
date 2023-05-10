<template>
  <AccessibilityWrapper>
    <NavigationComponent />
    <PageHandler />
  </AccessibilityWrapper>
</template>

<script lang="ts">
import { defineComponent, watch, ref, provide } from "vue";
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
}

* {
  box-sizing: border-box;
}

#app {
  display: grid;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary);
  background-color: var(--background);
  transition: background-color 0.5s ease, color 0.5s ease;
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

.animations-off {
  transition: all 0s !important;
  transition-duration: 0s !important;
  * {
    transition: all 0s !important;
    transition-duration: 0s !important; 
  }
}

</style>

