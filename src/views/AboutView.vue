<template>
  <main class="view-container p-0" ref="viewParent">
    <div class="w-full object-cover relative">
      <div class="mytitlecontainer">
        <h1 ref="mytitle" class="mytitle text-4xl font-bold p-2 relative">
          <TextFX text="Kyley Gray" type="fadein" speed="20" />
          <!-- <button
            ref="rainbowbtn"
            class="absolute right-2 top-2 rainbow-btn"
            @click="makeRainbow()"
          ></button> -->
        </h1>
        <h2 class="mydesc text-2xl font-normal p-2">
          <TextFX text="Multimedia Design &amp; Development" type="fadein" speed="20" />
        </h2>
      </div>
      <img
        class="mybackyard w-full object-cover rounded-lg"
        src="@/assets/design/design0.jpg"
        alt="cover image"
      />
    </div>
    <article class="p2">
      <p class="text-2xl my-5">
        Hello! 👋 I make things on the computer! This website was custom-built from the
        ground up for the purpose of showcasing my work, skills, and experience.
      </p>
      <GalleryComponent
        class=""
        :images="[
          '/src/assets/design/design2.jpg',
          '/src/assets/design/design3.jpg',
          '/src/assets/design/design1.jpg',
        ]"
        location="src/assets/nature/"
      />
      <GalleryComponent
        class=""
        :images="[
          '/src/assets/nature/psychoflower.jpg',
          '/src/assets/nature/fullbackyard.jpg',
          '/src/assets/nature/dogmoeba.jpg',
        ]"
        location="src/assets/nature/"
      />
      <!-- <GalleryComponent
        :images="[nature[3], nature[4], nature[5]]"
        location="src/assets/nature/"
      /> -->
      <!-- </ScrollFX> -->
    </article>
  </main>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";

import TextFX from "@/components/page/TextFX.vue";
import AnimatedFX from "@/components/page/AnimatedFX.vue";
import ScrollFX from "@/components/page/ScrollFX.vue";
import GalleryComponent from "@/components/page/GalleryComponent.vue";
import ResumeBtn from "@/components/page/ResumeBtn.vue";

import { nature } from "@/assets/nature/nature.js";

export default defineComponent({
  components: {
    TextFX,
    // ScrollFX,
    GalleryComponent,
    // ResumeBtn,
  },
  methods: {
    makeRainbow() {
      console.log("makerainbow");
      this.$refs.mytitle.classList.add("rainbow");
      this.$refs.rainbowbtn.style.setProperty("display", "none");
    },
  },
  mounted() {
    // this.makeRainbow();
  },
  setup() {
    const viewParent = ref(null);
    provide("viewParent", viewParent);
    const mytitle = ref(null);

    return {
      viewParent,
      mytitle,
      nature,
    };
  },
});
</script>

<style lang="scss">
.view-container {
  --page-color: #ee3e60;
  // padding: 1.5em;
  .mytitlecontainer {
    position: absolute;
    top: 30%;
    left: 20px;
    border: 2px dotted var(--primary);
    border-radius: 0.5rem;

    & * {
      // transition: background-color 0.5s ease;
    }
    .mytitle {
      border-radius: 0.5rem 0.5rem 0 0;
      color: var(--primary);
      background-color: var(--secondary);
      &.rainbow {
        color: var(--danger);
        .fx {
          .fadein {
            animation: colorcycle 10s linear infinite;
            filter: hue-rotate(0deg);
          }
        }
      }
    }
    .mydesc {
      border-radius: 0 0 0.5rem 0.5rem;
      color: var(--primary);
      background-color: var(--secondary);
    }
    .rainbow-btn {
      // display: block;
      width: 25px;
      height: 25px;
      border-radius: 5px;
      background: linear-gradient(
        45deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
      );
      opacity: 0;
      &:hover {
        opacity: 1;
      }

      font-size: 1rem;
    }
  }
  .mybackyard {
    border: 2px dotted var(--primary);
    height: 50vh;
  }

  [class^="fade1-"] {
    transition: opacity 0.5s ease;
  }
  .fade1-default: {
    opacity: 1;
  }
  .fade1-0 {
    opacity: 0;
  }
  .fade1-1 {
    opacity: 1;
  }

  .gallery-component-image-wrapper > .image {
  }

  @keyframes colorcycle {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
}

.p1 {
  .caption {
    line-height: 1.1em;
    color: var(--secondary);
    background-color: var(--primary);
  }
}

.p2 {
}

.about-resume-btn {
  a {
  }
}
</style>
