<template>
  <router-view v-slot="{ Component }">
    <transition :name="activeTransition.value">
        <component :class="{ 'page-container': true, 'mobile-view': isMobile, 'home-view': state.activeComponent === 'home' }" :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, computed, ref, inject } from "vue";

import EventBus from "@/services/eventBus";
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
                return "slide"
            }
            return "page";
            });

        EventBus.on("navigate", (componentName: string) => {
            methods.setActiveComponent(componentName);
        });

        return {
            activeTransition,
            state,
            methods,
            isMobile
        };
    }
});
</script>

<style lang="scss" scoped>
.page-container {
  position: absolute;
  height: 100vh;
  width: calc(100% - 25vw);
  margin-left: 25vw;
  background-color: var(--accent);
  transition: background-color 0.5 ease, transform 0.5s ease;
  overflow-x: hidden;

  &.mobile-view {
    position: absolute;
    width: 100%;
    margin: 0;
  }

  &.home-view {
    transform: translateX(100%);
  }
}

.page-enter-active,
.page-leave-active {
  transition: all 0.7s ease;
}
.page-enter-from {
  transform: translateX(100%);
  background-color: var(--accent);
}
.page-enter-to,
.page-leave-from {
  transform: translateX(0%);
  background-color: var(--accent);
}
.page-leave-to {
  transform: translate(0%);
  background-color: var(--secondary);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-leave-to,
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0%);
}

</style>
