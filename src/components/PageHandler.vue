<template>
  <router-view v-slot="{ Component }">
    <transition :name="activeTransition.value">
      <component
        :class="{
          'mobile-view': isMobile,
          'home-view': state.activeComponent === 'home',
          'page-view': state.activeComponent !== 'home',
        }"
        :is="Component"
      />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, computed, ref, inject } from "vue";
import useStore from "@/services/store";

export default defineComponent({
  name: "PageHandler",
  setup() {
    const { state, methods } = useStore();
    const activeTransition = ref("page");
    const { isMobile } = inject("mobileHelper");

    activeTransition.value = computed(() => {
      if (state.animationsOff) {
        return "";
      }
      if (state.activeComponent === "home") {
        if (isMobile.value) {
          return "upslide";
        }
        return "slide";
      }
      if (isMobile.value) {
        return "uppage";
      }
      return "page";
    });

    return {
      activeTransition,
      state,
      methods,
      isMobile,
    };
  },
});
</script>

<style lang="scss" scoped>
.view-container {
  position: absolute;
  height: 100svh;
  width: calc(100% - 20vw);
  margin-left: 20vw;
  background-color: var(--secondary);
  transition-property: background-color, transform, opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease;
  overflow-x: hidden;
  opacity: 1;
  padding: 20px;

  &.home-view {
    transform: translate(100%, 0%);
    opacity: 0;
  }

  &.mobile-view {
    width: 100%;
    margin: 0;
    height: calc(100svh - 120px);

    transform: translate(0%, -100%);
  }

  &.page-view {
    transform: translate(0%, 0%);
  }
}

.page-enter-active,
.page-leave-active {
  // position: absolute;
  transition: transform 0.5s ease, background-color 0.5s ease, opacity 0.5s ease;
}
.page-enter-from {
  transform: translate(100%, 0%) !important;
  background-color: var(--secondary);
}
.page-enter-to,
.page-leave-from {
  transform: translate(0%, 0%) !important;
  background-color: var(--secondary);
}
.page-leave-to {
  transform: translate(0%, 0%) !important;
  background-color: var(--background);
}

.uppage-enter-active,
.uppage-leave-active {
  transition: transform 0.5s ease, background-color 0.5s ease, opacity 0.5s ease;
}
.uppage-enter-from {
  transform: translate(0%, -100%) !important;
  background-color: var(--secondary);
}
.uppage-enter-to,
.uppage-leave-from {
  transform: translate(0%, 0%) !important;
  background-color: var(--secondary);
}
.uppage-leave-to {
  transform: translate(0%, 0%) !important;
  background-color: var(--background);
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease, background-color 0.5s ease, opacity 0.5s ease;
}
.slide-enter-from {
  transform: translate(0%, 0%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translate(100%, 0%);
}
.slide-leave-to {
  transform: translate(0%, 0%);
}

.upslide-enter-active,
.upslide-leave-active {
  transition: transform 0.5s ease, background-color 0.5s ease, opacity 0.5s ease;
}
.upslide-enter-from {
  transform: translate(0%, 0%);
}
.upslide-enter-to,
.upslide-leave-from {
  transform: translate(0%, -100%);
}
.upslide-leave-to {
  transform: translate(0%, 0%);
}
</style>
