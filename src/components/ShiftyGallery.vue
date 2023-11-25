<template>
  <div
    v-if="state.animationsOff"
    class="shifty-screen"
    :style="{ background: `url(${props.images[0]})` }"
  ></div>
  <div v-if="!state.animationsOff" class="shifty-gallery" :style="shiftyStyle"></div>
  <!-- <div v-if="state.animationsOff" class="shifty-gallery-static"></div> -->
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted, onUnmounted } from "vue";
import useStore from "@/services/store";

export default defineComponent({
  name: "ShiftyGallery",
  props: {
    images: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    let index = 0;
    const currentImage = ref(props.images[index]);
    const { state } = useStore();
    const accessibleState = ref(false);
    const shiftyStyle = computed(() => {
      return {
        backgroundImage: `url(${currentImage.value})`,
      };
    });

    let cycleTimer = undefined;

    const imageCounter = () => {
      index + 1 !== props.images.length ? index++ : (index = 0);
      currentImage.value = props.images[index];
      // console.log(currentImage.value);
    };

    watch(
      () => state.animationsOff,
      (animationsOff) => {
        if (animationsOff) {
          clearInterval(cycleTimer);
          index = 0;
        } else {
          cycleTimer = setInterval(imageCounter, 10000);
        }
      },
      { immediate: false }
    );

    onMounted(() => {
      cycleTimer = setInterval(imageCounter, 10000);
    });

    onUnmounted(() => {
      clearInterval(cycleTimer);
      index = 0;
    });

    return { props, shiftyStyle, accessibleState, state };
  },
});
</script>

<style lang="scss" scoped>
.shifty-gallery,
.shifty-screen {
  display: block;
  position: relative;
  max-width: 100%;
  height: 60svh;
  margin: 2em;
  margin-bottom: 2em;
  margin-top: -4em;
  // transform: translate3d(0, 0, -10);
  z-index: -1;
  // border: 1px solid var(--primary);
  filter: blur(0px) grayscale(0%);
  // background-size: cover;
  // opacity: 0.5;
  box-shadow: inset 0px 10svh 10svh 0px var(--secondary);
  border-radius: 0em 0em 2em 2em;

  animation: shifty-pulse 10s infinite ease, shifty-move 10s infinite linear;
}

.shifty-screen {
  background: var(--accent);
  background-size: cover !important;
  background-position: center !important;
}

@keyframes shifty-pulse {
  0% {
    opacity: 0;
    filter: blur(50px) grayscale(100%);
  }
  50% {
    opacity: 1;
    filter: blur(0px) grayscale(0%);
  }
  100% {
    opacity: 0;
    filter: blur(0px) grayscale(100%);
  }
}

@keyframes shifty-move {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}
</style>
