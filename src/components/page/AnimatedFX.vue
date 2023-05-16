<template>
  <div ref="animatedElement" :class="animationStyles">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, defineComponent, inject, watch } from 'vue';
import useStore from '@/services/store.ts';

export default defineComponent({
    name: 'AnimatedFX',
    props: {
        name: {
            type: String,
            required: true
        },
        steps: {
            type: Array,
            required: true
        }
    },
    setup(props) {
        const { state } = useStore();
        const aniOff = ref(false);
        const animatedElement = ref(null);
        const full = ref(window.innerHeight);
        const currentStep = ref(0);
        const animatedParent = inject('animatedParent');

        const animationStyles = ref(`${props.name}-${currentStep.value}`);

        const updateStep = () => {
            if (!aniOff.value) {
                const rect = animatedElement.value.getBoundingClientRect();
                const yPosition = rect.top;
                const percentageScrolled = ((window.innerHeight - yPosition) / window.innerHeight) * 100;
                currentStep.value = 0;
    
                props.steps.forEach((element, index) => {
                    if (percentageScrolled >= parseInt(element)) {
                        currentStep.value = index + 1;
                    }
                });
                animationStyles.value = `${props.name}-${currentStep.value}`;
            } else {
                animationStyles.value = `${props.name}-default`;
            }
        };

        const updateHeight = () => {
            full.value = window.innerHeight;
        }

        onMounted(() => {
            watch(
                () => state.animationsOff,
                (animationsOff) => {
                    aniOff.value = animationsOff;
                    updateStep();
                },
                {immediate: true},
            );
            
            animatedParent.value.addEventListener('scroll', updateStep);
            window.addEventListener('resize', updateHeight);
        });

        onUnmounted(() => {
            if (animatedParent.value) {
                animatedParent.value.removeEventListener('scroll', updateStep);
            }
            window.removeEventListener('resize', updateHeight);
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
