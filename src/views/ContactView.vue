<template>
  <div class="view-container">
    <h1 class="text-3xl pt-5 pb-0 mb-0 contact-title">
      <TextFX text="Contact Info" type="fadein" speed="30" />
    </h1>

    <div class="">
      <!-- Contact Details -->
      <div class="text-2xl">
        <p class="my-7">
          Email:
          <a class="underline" href="mailto:kyley@kyleygray.com">kyley@kyleygray.com</a>
        </p>
        <p class="mt-7">External Sites:</p>
        <div class="flex space-x-4 mt-5 text-4xl">
          <a href="https://www.linkedin.com/in/kyley-gray/" target="_blank"
            ><i class="devicon-linkedin-plain"></i
          ></a>
          <a href="https://github.com/kyleygray" target="_blank"
            ><i class="devicon-github-plain"></i
          ></a>
        </div>
        <p class="my-14">
          <a class="resume-download" target="_blank" :href="resume">Download My Resumé</a>
        </p>
      </div>
      <!-- Calan Image -->
      <div class="calan">
        <transition name="fade">
          <img v-if="!inverted" src="@/assets/calan_light.png" alt="" />
        </transition>
        <transition name="fade">
          <img v-if="inverted" src="@/assets/calan_dark.png" alt="" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import TextFX from "@/components/page/TextFX.vue";
import useStore from "@/services/store.ts";

import resume from "@/assets/KyleyGrayResumeMay2023.pdf";

export default defineComponent({
  components: {
    TextFX,
  },
  setup() {
    const { state } = useStore();
    const inverted = computed(() => state.theme.inverted);

    return {
      inverted,
      resume,
    };
  },
});
</script>

<style lang="scss" scoped>
.view-container {
  // position: relative;

  .contact-title {
    border-bottom: 5px solid var(--accent);
    border-left: 2px solid var(--accent);
    padding: 0.5em;
    border-bottom-left-radius: 0.5em;
  }

  .calan {
    img {
      user-select: none;
      pointer-events: none;
      bottom: 0px;
      right: 0px;
      position: absolute;
    }
  }

  .resume-download {
    background-color: var(--primary);
    color: var(--secondary);
    padding: 0.5em;
    border-radius: 0.25em;
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
