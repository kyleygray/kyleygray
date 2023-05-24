<template>
  <div ref="wrapper" class="scroll-effect-wrapper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, defineComponent, computed, inject, watch } from 'vue';
import { throttle } from 'lodash';
import useStore from '@/services/store';

export default defineComponent({
    name: 'ScrollEffect',
    props: {
        provider: {
            type: String,
            required: true
        },
        property: {
            type: String,
            required: true
        },
        values: {
            type: Array[2],
            required: true
        },
        range: {
            type: Array[2],
            required: true
        }
    },
    setup(props) {
        const { state } = useStore();
        const aniOff = ref(false);
        const wrapper = ref(null);
        const target = inject(props.provider);
        const percentageScrolled = ref(0);

        // Extract units from the values
        const unitRegex = /[\d.\-+]*\s*(\D*)/;
        const unitStart = props.values[0].match(unitRegex)[1];
        const unitEnd = props.values[1].match(unitRegex)[1];

        // Parse numbers from the values
        const valueStart = parseFloat(props.values[0]);
        const valueEnd = parseFloat(props.values[1]);

        const updateStyle = throttle(() => {
            if (!target) return;
            if (aniOff.value) {
                wrapper.value.style[props.property] = `${props.values[1]}`;
                return;
            }

            const rect = wrapper.value.getBoundingClientRect();
            const yPosition = rect.top;
            percentageScrolled.value = ((window.innerHeight - yPosition) / window.innerHeight) * 100;

            // It's a good idea to ensure that the units are the same for both start and end values
            if (unitStart !== unitEnd) {
                console.error("Start and end units must be the same");
                return;
            }

            if (percentageScrolled.value >= props.range[0] && percentageScrolled.value < props.range[1]) {
                // Normalize the percentageScrolled to a value between 0 and 1
                const normalizedPercentage = (percentageScrolled.value - props.range[0]) / (props.range[1] - props.range[0]);

                // Map normalizedPercentage to a value within the valueStart and valueEnd range
                let newValue = parseFloat((normalizedPercentage * (valueEnd - valueStart) + valueStart).toFixed(2));

                // Set the new style value (with the unit)
                wrapper.value.style[props.property] = `${newValue}${unitStart}`;

            } else if (percentageScrolled.value < props.range[0]) {
                wrapper.value.style[props.property] = `${props.values[0]}`;
            } else if (percentageScrolled.value > props.range[1]) {
                wrapper.value.style[props.property] = `${props.values[1]}`;
            }
        }, 16);

        onMounted(() => {
            watch(
                () => state.animationsOff,
                (animationsOff) => {
                    aniOff.value = animationsOff;
                    updateStyle();
                },
                {immediate: true},
            );
            
            if(target.value){
                target.value.addEventListener('scroll', updateStyle);
            }
            window.addEventListener('resize', updateStyle);
        });

        onUnmounted(() => {
            if (target.value) {
                target.value.removeEventListener('scroll', updateStyle);
            }
            window.removeEventListener('resize', updateStyle);
        });

        return {
            wrapper
        };
    },
});
</script>

<style>
.scroll-effect-wrapper {
    
}
</style>
