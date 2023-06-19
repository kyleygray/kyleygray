<template>
  <transition name="load">
    <div ref="loadWait" v-if="!isLoaded"><div></div></div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, ref, onBeforeMount, onMounted, onBeforeUnmount } from "vue";

export default defineComponent({
  name: "LoadWait",
  setup() {
    const loadWait = ref(null);
    const isLoaded = ref(false);

    onBeforeMount(() => {
      window.addEventListener("load", (e) => {
        isLoaded.value = true;
        console.log("loaded");
        // if (e.readyState === "complete") {
        //     loadWait.value.style.display = "none";
        //     console.log("loaded");
        // }
      });
    });

    onBeforeUnmount(() => {
      window.removeEventListener("load", (e) => {
        console.log("unloaded");
        isLoaded.value = false;
      });
    });
    return { loadWait };
  },
});
</script>

<style lang="scss" scoped>
div {
  display: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100svh;
  background-color: var(--secondary);
  //   opacity: 1;
  div {
  }

  .load-enter-active,
  .load-leave-active {
    transition: opacity 1s ease;
  }
  .load-enter-from {
    opacity: 1;
  }
  .load-enter-to,
  .load-leave-from {
    opacity: 0;
  }
  .load-leave-to {
    opacity: 1;
  }
}
</style>
