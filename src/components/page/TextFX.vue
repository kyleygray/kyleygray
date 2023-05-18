<template>
    <!-- <transition name="fadein"> -->
        <div class="fx">
            <span v-for="(letter, index) in text" :key="index" :class="anitype" :data-letter="letter"
            :style="{ 
                transitionDelay: (index / (parseInt(props.speed) * (props.text.length/20))) + 's',
                transitionDuration: 5 / parseInt(props.speed) + 's',
                animationDelay: -(props.text.length - index / (parseInt(props.speed) * (props.text.length/40))) + 's',
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
        required: true
    },
    speed: {
        type: String,
        default: "10"
    }
  },
  setup(props) {
    const anitype = ref(`${props.type}-reset`);

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

<style lang="scss">
    .fx {
        position: relative;
        span {
            transition-property: all;
            transition-timing-function: ease;
        }
    }
    .fadein-reset {
        opacity: 0;
    }
    .fadein {
        transition-duration: 0.3s;
        opacity: 1;
    }
    .fallin-reset {
        opacity: 0;
        &::after {
            content: attr(data-letter);
            position: absolute;
            top: 0;
            left: 0;
            transform: translateY(-15px);
        }
    }
    .fallin {
        transition-duration: 0.3s;
        opacity: 1;
        position: relative;
        &::after {
            content: attr(data-letter);
            position: absolute;
            top: 0;
            left: 0;
            transition: transform 0.5s ease;
            transform: translateY(-4px);
        }
    }

</style>
