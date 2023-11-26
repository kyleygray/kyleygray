<template>
  <main class="view-container" ref="viewParent">
    <article class="about-title-container mt-20 mb-10 ml-5">
      <h1 class="about-title text-6xl font-bold">Who am I?</h1>
      <h2 class="about-subtitle text-4xl pl-5">That's a good question...</h2>
      <p class="md:text-2xl sm:text-xl my-5 mx-10">
        <TextFX
          text="I've worn many faces in my life, so my experience is varied and my mind is always
        curious. Here are the jobs I've held that are worth highlighting."
        />
      </p>
    </article>
    <article class="project-container">
      <WorkCarousel />
    </article>
    <div class="linkwrap-outer">
      <h2 class="about-subtitle text-4xl text-center">Learn more about me.</h2>
      <div class="linkwrap-about">
        <router-link to="/skills/webdev">Explore Skills</router-link>
        <router-link to="/skills/projects">View Projects</router-link>
      </div>
    </div>
    <article class="about-title-container mt-20 mb-10 ml-5">
      <h1 class="about-title text-6xl font-bold">What am I doing?</h1>
      <h2 class="about-subtitle text-4xl pl-5">I create things...</h2>
      <p class="md:text-2xl sm:text-xl mt-5 mx-10">
        I never stop creating and innovating. I'm always iterating and improving on my
        existing skillset. Technology is an extension of my body.
      </p>
    </article>
    <div class="display-card-wrap">
      <DisplayCard :image="img7" title="Art and Illustration">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores quas numquam
        velit aspernatur sunt quibusdam voluptates necessitatibus, iusto eveniet! Vel
        voluptatibus esse repellendus sunt porro harum totam sed odio similique?
      </DisplayCard>
      <DisplayCard :image="codescreenshot" title="Web Development">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repudiandae. Qui,
        quas? Perferendis officia eos omnis amet harum nihil aperiam earum atque, eaque,
        quae, qui voluptas possimus reiciendis ab explicabo.
      </DisplayCard>
      <DisplayCard :image="musicscreenshot" title="Music Production">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, repudiandae. Qui,
        quas? Perferendis officia eos omnis amet harum nihil aperiam earum atque, eaque,
        quae, qui voluptas possimus reiciendis ab explicabo.
      </DisplayCard>
    </div>
    <article class="about-title-container mt-10 mb-10 ml-5">
      <div class="linkwrap-outer">
        <h2 class="about-subtitle text-4xl pl-5 text-center">Let's get in touch...</h2>
        <p class="md:text-2xl sm:text-xl mt-5 mx-10 text-center">
          I am available for full-time employment or freelance!
        </p>
        <div class="linkwrap-about">
          <router-link to="/contact">Contact Me</router-link>
          <a target="_blank" href="https://linkedin.com/in/kyley-gray"
            >Network on LinkedIn</a
          >
        </div>
      </div>
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
import ShiftyGallery from "@/components/ShiftyGallery.vue";

import WorkBox from "@/components/WorkBox.vue";
import WorkCarousel from "@/components/WorkCarousel.vue";
import DisplayCard from "@/components/DisplayCard.vue";

import resume from "@/assets/KyleyGrayResume.pdf";

import img1 from "@/assets/design/design3.jpg";
import img2 from "@/assets/design/zendog.jpg";
import img3 from "@/assets/design/doggod.jpg";
import img4 from "@/assets/nature/dogmoeba.jpg";
import img5 from "@/assets/design/interbayhemoth.jpg";
import img6 from "@/assets/design/planthead.jpg";
import img7 from "@/assets/design/abstractlick.jpg";

import codescreenshot from "@/assets/design/codescreenshot.png";
import musicscreenshot from "@/assets/design/musicscreenshot.png";

import useState from "@/services/store.ts";

export default defineComponent({
  components: {
    TextFX,
    // ShiftyGallery,
    DisplayCard,
    // WorkBox,
    WorkCarousel,
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
    const { state } = useState();

    return {
      viewParent,
      mytitle,
      img2,
      img3,
      img4,
      img5,
      img6,
      img7,
      resume,
      // experienceList,
      state,
      codescreenshot,
      musicscreenshot,
    };
  },
});
</script>

<style lang="scss">
.view-container {
  --page-color: #ee3e60;

  .project-container {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    max-width: 767px;
    margin: 0 auto;
    margin-top: 5em;
  }

  .about-title-container {
    animation: abouttitlefade 2s forwards ease;
    z-index: 100;
    .about-title {
      // text-shadow: 0px 0px 3px var(--primary);
    }
  }

  @keyframes abouttitlefade {
    0% {
      transform: perspective(500px) translate3d(0px, -100px, 0px);
      opacity: 0;
    }
    100% {
      transform: perspective(500px) translate3d(0px, 0px, 0px);
      opacity: 1;
    }
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
.linkwrap-outer {
  padding-top: 5em;
  padding-bottom: 5em;
  margin-top: 5em;
  margin-bottom: 5em;
  // background-color: var(--primary);
  // padding: 1em;
  // border-top: 2px dotted var(--accent);
  // border-bottom: 2px dotted var(--accent);
  // border-radius: 1em;
  // box-shadow: inset 0px 50px 50px -50px var(--secondary);
  h1,
  h2 {
    color: var(--primary);
  }
  a {
    // border: 1px dashed var(--primary);
  }
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

.display-card-wrap {
  display: flex;
  width: 100%;
  justify-content: center;
  flex-wrap: wrap;
  // flex-basis: 300px;

  & > * {
    width: 50%;
    padding: 0 10px;
    margin-bottom: 20px;

    @media (max-width: 767px) {
      width: 100%;
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
  p > a {
    border: 1px dotted var(--primary);
    padding: 0.1em;
    border-radius: 0.3em;
    background-color: var(--primary);
    color: var(--secondary);

    &::after {
      content: "▷";
      margin-left: 0.5em;
    }
  }
}

.about-resume-btn {
  a {
  }
}
</style>
