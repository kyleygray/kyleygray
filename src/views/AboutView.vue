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
      <template v-for="(item, index) in experienceList" :key="index">
        <WorkBox
          :title="item.title"
          :company="item.company"
          :period="item.period"
          :list="item.list"
          :links="item.links"
          :class="{
            'move-right': index % 2 === 0,
            'move-left': index % 2 !== 0,
          }"
        />
      </template>
    </article>
    <div class="linkwrap-outer">
      <h2 class="about-subtitle text-4xl text-center">Learn more about me.</h2>
      <div class="linkwrap-about">
        <router-link to="/skills">Explore Skills</router-link>
        <a :href="resume" target="_blank">View My Resumé</a>
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
    <div
      :class="{
        'linkwrap-about': true,
        'dogzone-link': true,
        'accessible-mix': state.animationsOff,
      }"
    >
      <a target="_blank" href="https://bodyfractal.dog">Visit The Dogzone</a>
    </div>
    <ShiftyGallery :images="[img2, img3, img4, img5, img6, img7]" />
    <article class="about-title-container mt-20 mb-10 ml-5">
      <div class="linkwrap-outer">
        <h2 class="about-subtitle text-4xl pl-5 text-center">Let's get in touch...</h2>
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

import resume from "@/assets/KyleyGrayResume.pdf";

import img1 from "@/assets/design/design3.jpg";
import img2 from "@/assets/design/zendog.jpg";
import img3 from "@/assets/design/doggod.jpg";
import img4 from "@/assets/nature/dogmoeba.jpg";
import img5 from "@/assets/design/interbayhemoth.jpg";
import img6 from "@/assets/design/planthead.jpg";
import img7 from "@/assets/design/abstractlick.jpg";

import useState from "@/services/store.ts";

export default defineComponent({
  components: {
    TextFX,
    ShiftyGallery,
    WorkBox,
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

    const experienceList = [
      {
        title: "UX Designer/Protyper",
        company: "BP3 Global",
        period: "2022 - 2023",
        links: [
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "AngularJS",
          "UI/UX Design",
          "Collaboration",
          "Wireframing",
          "Consulting",
        ],
        list: [
          "Designed, developed, and tested prototype UI and UX flows for a large next-gen construction application.",
          "Became a leader in design ownership. Client saw a 200% increase in productivity due to increase in design and technical communication.",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Boeing",
        period: "2020 - 2022",
        links: [
          "JavaScript",
          "TypeScript",
          "HTML",
          "CSS",
          "AngularJS",
          "UI/UX Design",
          "Java",
          "API Development",
          "Technical Analyst",
          "Full-Stack",
          "Cloud Computing",
        ],
        list: [
          "Researched and developed groundbreaking solutions for reducing tech debt, halfing deployment time.",
          "Designer, developer, and owner of several front-end UIs for interfacing with consumer databases and internal APIs.",
        ],
      },
      {
        title: "Freelance Producer",
        company: "Bodyfractal Creative",
        period: "2016 - present",
        links: ["webdev", "design", "audio", "os", "ai"],
        list: [
          "My own registered business for freelancing web development and media production services. Served 10+ clients with projects lasting mutliple months.",
          "Designed, developed, and deployed several web applications for personal use and clientele. Every aspect of production under my ownership, control, and responsibility.",
          "Rich digitial illustration for local production events, clients, and personal. Self-taught digital illustrator since 2018.",
          "Produced, mix, and mastered several electronic albums. Sound Design Certification from Berklee School of Music.",
        ],
      },
      {
        title: "Automation Tester",
        company: "WorkBoard",
        period: "2022",
        links: [
          "Javascript",
          "React",
          "HTML",
          "Automation Testing",
          "Cypress.io",
          "Script Management",
          "Knowledge Leader",
          "Communication",
          "Collaboration",
        ],
        list: [
          "Developed and maintained several scripts for test automation in Cypress, successfully catching hundreds of bugs and proposing reasonable fixes.",
          "Communicating bugs to developers and contributing to the knowledge of best practices in the context of automation development.",
        ],
      },
      {
        title: "C.S. Teacher & Mentor",
        company: "King's High School",
        period: "2018-2020",
        links: ["audio", "os", "webdev"],
        list: [
          "Designed, managed, and taught 8 semesters of computer science courses. Classes of 10 to 24 students each, developed custom curriculum for new learning technologies such as Minecraft for Education.",
          "Managed over 500 student and teacher Microsoft Surface laptops, managing the Active Directory and software licenses. On-call support for computer issues across multiple campuses.",
        ],
      },
    ];
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
      experienceList,
      state,
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
  mix-blend-mode: difference;
  a {
    transform: translate3d(0, 0, 0);
    background-color: var(--white);
    color: var(--black);
    font-family: "Rubik";
    font-weight: bold;
    max-width: 60%;

    &::after {
      background-image: url("@/assets/dogzonesticker.png");
      background-size: cover;
      display: inline-block;
      vertical-align: middle;
      width: 2em;
      height: 2em;
      content: "";
    }
  }
  &.accessible-mix {
    mix-blend-mode: normal;
    a {
      background-color: var(--secondary);
      color: var(--primary);
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
