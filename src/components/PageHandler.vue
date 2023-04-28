<template>
  <router-view v-slot="{ Component }">
    <transition :name="activeTransition.value">
        <component :is="Component" />
    </transition>
  </router-view>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";

import EventBus from "@/services/eventBus";
import useStore from "@/services/store";

export default defineComponent({
    name: "PageHandler",
    setup() {
        const { state, methods } = useStore();
        const activeComponent = ref(state.activeComponent);
        const activeTransition = ref("page");

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
            activeComponent,
            activeTransition,
            state,
            methods
        };
    }
});
</script>

<style lang="scss" scoped>
.base-view {

}

.page-container {
  position: absolute;
  height: 100vh;
  width: calc(100% - 25vw);
  margin-left: 25vw;
  background-color: var(--secondary);
  transition: background-color 0.5s ease;
  overflow-x: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.7s ease;
}
.page-enter-from {
  transform: translateX(100%);
  background-color: var(--secondary);
}
.page-enter-to,
.page-leave-from {
  transform: translateX(0%);
  background-color: var(--secondary);
}
.page-leave-to {
  transform: translate(0%);
  background-color: var(--primary);
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
