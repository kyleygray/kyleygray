<template>
  <div class="view-container ps-10">
    <h1 class="text-3xl pt-5 pb-0 mb-0 contact-title">
      <TextFX text="Contact Info" type="fadein" speed="30" />
    </h1>
    <div class="contact-wrap">
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
        <!-- <transition name="fade"> -->
        <img :class="{ inverted: !inverted }" src="@/assets/calan_dark.png" alt="" />
        <!-- </transition> -->
        <!-- <transition name="fade"> -->
        <!-- <img v-if="inverted" src="@/assets/calan_dark.png" alt="" /> -->
        <!-- </transition> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import TextFX from "@/components/page/TextFX.vue";
import useStore from "@/services/store.ts";

import resume from "@/assets/KyleyGrayResume.pdf";

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
  .contact-wrap {
    // display: flex;
    // height: 70svh;
    // justify-content: center;
    // align-items: center;
  }

  .contact-title {
    border-bottom: 5px solid var(--accent);
    border-left: 2px solid var(--accent);
    padding: 0.5em;
    border-bottom-left-radius: 0.5em;
    font-weight: bold;
  }

  .portrait {
    position: absolute;
    right: 2rem;
    top: 8rem;
    max-width: 30%;
    img {
      border-radius: 1em;
    }
  }

  .calan {
    position: absolute;
    bottom: 0;
    img {
      mix-blend-mode: luminosity;
      transition: filter 0.5s ease;
      &.inverted {
        filter: invert(1);
      }
      user-select: none;
      pointer-events: none;
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

  @media (max-width: 767px) {
    .portrait {
      position: static;
      width: 100%;
    }
  }
}
</style>
