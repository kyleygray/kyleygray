<template>
  <main class="view-container p-0" ref="viewParent">
    <div class="w-full object-cover relative">
      <div class="mytitlecontainer">
        <h1 ref="mytitle" class="mytitle rainbow text-4xl font-bold p-2 relative">
          <TextFX text="Kyley Gray" type="fadein" speed="20" />
          <!-- <button
            ref="rainbowbtn"
            class="absolute right-2 top-2 rainbow-btn"
            @click="makeRainbow()"
          ></button> -->
        </h1>
        <h2 class="mydesc md:text-xl sm:text-base font-normal p-2">
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
      <p class="md:text-2xl sm:text-xl my-5">
        Hello! 👋 I am a web developer, music producer, designer, illustrator,
        technologist, hiker, psychonaut, cryptid, and queer individual from Seattle, WA,
        USA. This custom-built website is intended to showcase my work and skills.
      </p>
      <GalleryComponent class="" :images="[img1, img2, img3]" />
      <GalleryComponent class="" :images="[img4, img5, img6]" />
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

import img1 from "@/assets/design/design2.jpg";
import img2 from "@/assets/design/design3.jpg";
import img3 from "@/assets/design/design1.jpg";
import img4 from "@/assets/nature/psychoflower.jpg";
import img5 from "@/assets/nature/fullbackyard.jpg";
import img6 from "@/assets/nature/dogmoeba.jpg";

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
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
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
    top: 2em;
    left: 1.5em;
    max-width: 70vw;
    border: 2px dotted var(--primary);
    border-radius: 0.5rem;

    & * {
      // transition: background-color 0.5s ease;
    }
    .mytitle {
      text-shadow: 2px 2px 0px var(--accent);
      border-radius: 0.5rem 0.5rem 0 0;
      color: var(--primary);
      background-color: var(--secondary);
      &.rainbow {
        color: #ff8888;
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
      opacity: 0.2;
      &:hover {
        opacity: 1;
      }

      font-size: 1rem;
    }
  }
  .mybackyard {
    border: 2px dotted var(--primary);
    height: 35svh;
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
