<template>
  <div v-if="!isReady" class="imagepreload"></div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";

export default defineComponent({
  name: "ImagePreload",
  setup() {
    const isReady = ref(false);

    onMounted(() => {
      document.addEventListener("DOMContentLoaded", () => {
        isReady.value = true;
        console.log("ready", isReady.value);
        document.removeEventListener("DOMContentLoaded", document);
      });
    });

    return { isReady };
  },
});
</script>

<style lang="scss" scoped>
.imagepreload {
  position: absolute;
  background-color: var(--accent);
  width: 100%;
  height: 100%;
  //   z-index: -1;
  display: flex;

  &::after {
    font-family: monospace;
    content: "loading content...";
    align-self: center;
    text-align: center;
    width: 100%;
    font-size: 1em;
  }
}
</style>
