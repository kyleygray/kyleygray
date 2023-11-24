<template>
  <div ref="animatedElement" :class="{ animationStyles, 'animation-wrapper': true }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, defineComponent, inject, watch } from "vue";
import useStore from "@/services/store.ts";
import { throttle } from "lodash";

export default defineComponent({
  name: "AnimatedFX",
  props: {
    provider: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    steps: {
      type: Array,
    },
  },
  setup(props) {
    const { state } = useStore();
    const aniOff = ref(false);
    const animatedElement = ref(null);
    const viewParent = inject(props.provider);
    const percentageScrolled = ref(0);

    const animationStyles = ref(`${props.name}-default`);

    const updateStep = throttle(() => {
      if (!aniOff.value && animatedElement.value) {
        const rect = animatedElement.value.getBoundingClientRect();
        const yPosition = rect.top;
        percentageScrolled.value =
          ((window.innerHeight - yPosition) / window.innerHeight) * 100;
        let currentStep = 0;

        props.steps.forEach((element, index) => {
          if (percentageScrolled.value >= parseInt(element)) {
            currentStep = index + 1;
          }
        });
        animationStyles.value = `${props.name}-${currentStep}`;
      } else {
        animationStyles.value = `${props.name}-default`;
      }
    }, 200); // Throttle scroll event handling to 200ms

    onMounted(() => {
      watch(
        () => state.animationsOff,
        (animationsOff) => {
          aniOff.value = animationsOff;
          updateStep();
        },
        { immediate: true }
      );

      if (viewParent.value) {
        viewParent.value.addEventListener("scroll", updateStep);
      }
      window.addEventListener("resize", updateStep);
    });

    onUnmounted(() => {
      if (viewParent.value) {
        viewParent.value.removeEventListener("scroll", updateStep);
      }
      window.removeEventListener("resize", updateStep);
    });

    return {
      props,
      animatedElement,
      animationStyles,
    };
  },
});
</script>

<style lang="scss">
.animation-wrapper {
}
// .animated-element {
//   /* Add your animation styles here. */
// }

// .animated-element.step-1 {
//   /* Styles for step 1. */
// }

// .animated-element.step-2 {
//   /* Styles for step 2. */
// }

// .animated-element.step-3 {
//   /* Styles for step 3. */
// }
</style>
