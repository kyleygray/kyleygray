<template>
  <div class="shifty-wrap">
    <div v-if="!state.animationsOff" class="shifty-gallery" :style="shiftyStyle"></div>
    <div class="shifty-screen" :style="{ background: `url(${cover})` }"></div>
  </div>
  <div class="shifty-content">
    <div class="shifty-header">
      <h1 class="shifty-title">{{ props.title }}</h1>
      <div class="shifty-link">
        <a :href="props.url">{{ props.link }}</a>
      </div>
    </div>
    <div class="shifty-description">
      <p><slot></slot></p>
    </div>
  </div>
  <!-- <div v-if="state.animationsOff" class="shifty-gallery-static"></div> -->
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted, onUnmounted } from "vue";
import useStore from "@/services/store";

// import ImagePreload from "@/components/ImagePreload.vue";

export default defineComponent({
  name: "ShiftyGallery",
  components: {
    // ImagePreload,
  },
  props: {
    images: {
      type: Array,
      required: true,
    },
    cover: {
      type: Image,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    url: {
      type: String,
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
.shifty-wrap {
  position: relative;
  position: relative;
  max-width: 100%;
  margin: 2em;
  margin-bottom: -1em;
  height: 50svh;
  overflow: hidden;
  border-radius: 2em 2em 0em 0em;
  background-color: var(--primary);
  z-index: -3;
}

.shifty-gallery,
.shifty-screen {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50svh;
  display: block;
  // margin-top: -4em;
  // transform: translate3d(0, 0, -10);
  // border: 1px solid var(--primary);
  filter: blur(0px) grayscale(100%);
  // background-size: cover;
  // opacity: 0.5;
  // box-shadow: inset 0px -10svh 10svh 0px var(--secondary);
  // border-radius: 2em 2em 0em 0em;
}

.shifty-gallery {
  z-index: -1;
  animation: shifty-pulse 10s infinite ease-in-out, shifty-move 10s infinite ease-in-out;
}

.shifty-screen {
  z-index: -2;
  background: var(--accent);
  background-size: cover !important;
  background-position: center !important;
  filter: none;
  position: absolute;
  top: 0;
  width: 100%;
  animation: shifty-screen-pulse 10s infinite ease-in-out;
}

.shifty-content {
  font-size: 16px;
  margin: 0em 2rem;
  @media (max-width: 767px) {
    font-size: 12px;
  }
  .shifty-header {
    color: var(--secondary);
    display: flex;
    width: 100%;
    border-radius: 0em 0em 1em 0.5em;
    background-color: var(--primary);
    align-items: center;
    & > * {
      text-align: center;
    }
    .shifty-title {
      font-size: 2em;
      padding-left: 1em;
      width: 75%;
    }
    .shifty-link {
      padding: 0.5em;
      width: 25%;
      background-color: var(--secondary);
      color: var(--primary);
      font-size: 1.5em;
      text-align: center;
      cursor: pointer;
      border-radius: 0em 0em 0.5em 0em;
      a {
        &::after {
          content: "▷";
          margin-left: 0.5em;
        }
      }
    }
  }
  .shifty-description {
    font-size: 1.2em;
    padding: 0.5em;
  }
}

@keyframes shifty-pulse {
  0% {
    opacity: 0;
    // filter: blur(50px) grayscale(100%);
    filter: blur(20px);
  }
  45% {
    opacity: 1;
    // filter: blur(0px) grayscale(0%);
    filter: blur(10px);
  }
  50% {
    opacity: 1;
    // filter: blur(0px) grayscale(0%);
    filter: blur(0px) grayscale(0%);
  }
  75% {
    opacity: 1;
    filter: blur(0px) grayscale(0%);
  }
  100% {
    opacity: 0;
    // filter: blur(0px) grayscale(100%);
    filter: blur(0px) grayscale(100%);
  }
}

@keyframes shifty-screen-pulse {
  0% {
    opacity: 1;
    // filter: blur(50px) grayscale(100%);
    filter: blur(0px) grayscale(0%);
  }
  50% {
    opacity: 0;
    // filter: blur(0px) grayscale(0%);
    filter: blur(0px) grayscale(100%);
  }
  100% {
    opacity: 1;
    // filter: blur(0px) grayscale(100%);
    filter: blur(0px) grayscale(0%);
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
