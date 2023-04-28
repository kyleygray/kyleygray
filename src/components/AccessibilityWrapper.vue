<template>
    <div :class="{'animations-off': state.animationsOff}">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useStore from "@/services/store"

export default defineComponent({
    name: "AccessibilityWrapper",
    setup() {
        const { state, methods } = useStore();

        return {
            state,
            methods
        };
    },
});
</script>

<style lang="scss" scoped>
    .animations-off {
        transition: all 0s !important;
        transition-duration: 0s !important;
        * {
            transition: all 0s !important;
            transition-duration: 0s !important; 
        }
    }
</style>