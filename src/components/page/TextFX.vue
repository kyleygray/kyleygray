<template>
    <!-- <transition name="fadein"> -->
        <div class="fx">
            <span v-for="(letter, index) in text" :key="index" :class="anitype" 
            :style="{ 
                transitionDelay: (index / (parseInt(props.speed) * (props.text.length/20))) + 's',
                transitionDuration: 5 / parseInt(props.speed) + 's' 
            }">
                {{letter}}
            </span>
        </div>
    <!-- </transition> -->
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";

export default defineComponent({
  name: "TextFX",
  props: {
    text: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: "fadein"
    },
    speed: {
        type: String,
        default: "10"
    }
  },
  setup(props) {
    const anitype = ref("reset");

    onMounted(() => {
        setTimeout(() => {
            anitype.value = props.type;
        }, 0);
    });

    return {
        props,
        anitype
    };
  },
});
</script>

<style lang="scss" scoped>
    .fx {
        span {
            transition-property: all;
            transition-timing-function: ease;
        }
    }
    .reset {
        opacity: 0;
    }
    .fadein {
        transition-duration: 0.3s;
        opacity: 1;
    }

    // .fx {
    //     span {
    //         opacity: 1;
    //     }
    // }
    // .fadein-enter-active,
    // .fadein-leave-active {
    //     & > * {
    //         transition: opacity 0.5s ease;
    //     }
    // }
    // .fadein-enter-from {
    //     & > * {
    //         opacity: 0;
    //     }
    // }
    // .fadein-enter-to,
    // .fadein-leave-from {
    //     & > * {
    //         opacity: 1;
    //     }
    // }
    // .fadein-leave-to {
    //     & > * {
    //         opacity: 0;
    //     }
    // }

</style>
