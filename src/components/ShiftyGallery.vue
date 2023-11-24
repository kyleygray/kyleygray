<template>
  <div class="shifty-screen"></div>
  <div class="shifty-gallery" :style="shiftyStyle"></div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, onMounted, beforeCreate } from "vue";

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

    const shiftyStyle = computed(() => {
      return {
        backgroundImage: `url(${currentImage.value})`,
      };
    });

    function imageCounter() {
      setTimeout(() => {
        index + 1 !== props.images.length ? index++ : (index = 0);
        currentImage.value = props.images[index];
        console.log(currentImage.value);
        imageCounter();
      }, 10000);
    }

    onMounted(() => {
      imageCounter();
    });

    return { props, shiftyStyle };
  },
});
</script>

<style lang="scss" scoped>
.shifty-gallery {
  display: block;
  position: absolute;
  width: 100%;
  height: 25svh;
  border: 1px solid var(--primary);
  filter: blur(10px) grayscale(100%);
  background-size: cover;
  // opacity: 0.5;
  box-shadow: inset 0px -50px 50px 0px var(--secondary);

  animation: shifty-pulse 10s infinite ease, shifty-move 10s infinite linear;
}

.shifty-screen {
  display: block;
  position: absolute;
  height: 25svh;
  width: 100%;
  background: var(--accent);
  box-shadow: inset 0px -50px 50px 0px var(--secondary);
}

@keyframes shifty-pulse {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
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
