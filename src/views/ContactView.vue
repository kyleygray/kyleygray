<template>
  <div class="view-container">
    <h1 class="text-3xl pt-5 pb-1">
      <TextFX text="Contact Info" type="fadein" speed="30" />
    </h1>
    <div class="calan">
      <transition name="fade">
        <img v-if="!inverted" src="@/assets/calan_light.png" alt="" />
      </transition>
      <transition name="fade">
        <img v-if="inverted" src="@/assets/calan_dark.png" alt="" />
      </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import TextFX from "@/components/page/TextFX.vue";
import useStore from "@/services/store.ts";

export default defineComponent({
  components: {
    TextFX,
  },
  setup() {
    const { state } = useStore();
    const inverted = computed(() => state.theme.inverted);

    return {
      inverted,
    };
  },
});
</script>

<style lang="scss" scoped>
.view-container {
  // position: relative;

  .calan {
    img {
      user-select: none;
      pointer-events: none;
      bottom: 0px;
      right: 0px;
      position: absolute;
    }
  }

  .fade-enter-active,
  .fade-leave-active {
    // position: absolute;
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
  }
  .fade-enter-from {
    opacity: 0;
  }
  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
  .fade-leave-to {
    position: absolute;
    opacity: 0;
  }
}
</style>
