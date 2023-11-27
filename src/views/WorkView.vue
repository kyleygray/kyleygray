<template>
  <div ref="viewParent" class="view-container pb-10">
    <h1 class="about-title ml-5 mt-10 text-6xl font-bold">Projects</h1>
    <h2 class="about-subtitle ml-5 text-4xl pl-5">What I've been working on...</h2>
    <!-- <div
      :class="{
        'linkwrap-about': true,
        'dogzone-link': true,
        'accessible-mix': state.animationsOff,
      }"
    >
      <a target="_blank" href="https://bodyfractal.dog"></a>
    </div> -->
    <ShiftyGallery
      :images="[img2, img3, img4, img5, img6, img7]"
      :cover="dogzonecover"
      title="The Dogzone Bodyfractal"
      link="Visit Gallery"
      url="https://bodyfractal.dog"
    >
      A journey of self-exploration, spirituality, obsession, and artistic expression
      under the alias Dogzone Bodyfractal. Over 200 pieces of art (and growing) in honor
      of our almighty dog god! Occasional mature themes include body horror, sexuality,
      and psychological horror. View gallery for landing pages to our art posting
      channels.
    </ShiftyGallery>
    <ShiftyGallery
      :images="[music1, music2]"
      :cover="music3"
      title="Cubeshark Audio"
      link="Listen"
      url="https://cubeshark.bandcamp.com"
    >
      Completed albums under the alias Cubeshark. Produced in Reason Studios over the
      course of several years from different time periods.
    </ShiftyGallery>
  </div>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from "vue";

import useState from "@/services/store.ts";

import ShiftyGallery from "@/components/ShiftyGallery.vue";

// import img1 from "@/assets/design/design3.jpg";
import img2 from "@/assets/design/zendog.jpg";
import img3 from "@/assets/design/doggod.jpg";
import img4 from "@/assets/nature/dogmoeba.jpg";
import img5 from "@/assets/design/interbayhemoth.jpg";
import img6 from "@/assets/design/planthead.jpg";
import img7 from "@/assets/design/abstractlick.jpg";

import music1 from "@/assets/skills/audioskill/cubesharkalbum1.jpg";
import music2 from "@/assets/skills/audioskill/cubesharkalbum2.jpg";
import music3 from "@/assets/skills/audioskill/cubesharkbandcamp.png";

import dogzonecover from "@/assets/design/dogzonestickersshowcase.jpg";

export default defineComponent({
  components: { ShiftyGallery },
  setup() {
    const { state, methods } = useState();

    const viewParent = ref(null);
    provide("viewParent", viewParent);

    return {
      // img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      state,
      methods,
      dogzonecover,
      music1,
      music2,
      music3,
    };
  },
});
</script>

<style lang="scss" scoped>
.view-container {
}

.linkwrap-about {
  position: relative;
  display: flex;
  margin: 0 auto;
  // margin-top: 1em;
  // max-width: 50vw;
  // min-width: 10rem;
  width: 100%;
  padding: 2em 0;
  justify-content: center;

  a {
    max-width: 40%;
    min-width: 6em;
    margin: 0 10px;
    position: relative;
    display: block;
    font-size: 1.5rem;
    text-align: center;
    // border: 1px dotted var(--primary);
    padding: 0.5em;
    border-radius: 0.5em;
    background-color: var(--primary);
    color: var(--secondary);

    &::after {
      content: "▷";
      margin-left: 0.5em;
    }
  }
}
.dogzone-link {
  position: absolute;
  mix-blend-mode: lighten;
  justify-content: unset;
  filter: grayscale(100%);
  // margin-left: 5em;
  padding: 0 5em;
  justify-content: flex-end;
  animation: colorblink 10s infinite ease;
  a {
    margin: 0;
    padding: 0;
    // box-shadow: 0px 0px 10px 10px var(--white);
    font-size: 1.2em;
    transform: translate3d(0, 0, 0);
    background: none;
    color: var(--black);
    font-family: "Rubik";
    font-weight: bold;
    max-width: 60%;
    border-radius: 5em;
    min-width: 0;

    &::after {
      background-image: url("@/assets/dogzonesticker.png");
      background-size: cover;
      display: inline-block;
      transform: translateX(-5px);
      vertical-align: middle;
      width: 10em;
      height: 10em;
      @media (max-width: 480px) {
        width: 5em;
        height: 5em;
      }
      content: "";
      animation: speen 10s infinite ease-in-out;
    }
  }
  @keyframes speen {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes colorblink {
    0% {
      filter: grayscale(100%);
    }
    45% {
      filter: grayscale(100%);
    }
    50% {
      filter: grayscale(0%);
    }
    100% {
      filter: grayscale(100%);
    }
  }
  &.accessible-mix {
    mix-blend-mode: normal;
    filter: invert(0);
    a {
      // box-shadow: 0px 0px 10px 10px var(--secondary);
      // padding: 0.5em;
      // background-color: var(--secondary);
      color: var(--primary);
      &::after {
        animation: none;
      }
    }
  }
}
</style>
