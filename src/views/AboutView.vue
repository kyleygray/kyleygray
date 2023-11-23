<template>
  <main class="view-container" ref="viewParent">
    <!-- <div class="w-full object-cover relative">
      <div class="mytitlecontainer">
        <h1 ref="mytitle" class="mytitle rainbow text-4xl font-bold p-2 relative">
          <TextFX text="Kyley Gray" type="fadein" speed="20" />
        </h1>
        <p class="mydesc md:text-2xl sm:text-base font-normal p-2">
          <TextFX text="Multimedia Design &amp; Development" type="fadein" speed="20" />
        </p>
      </div>
      <img
        class="mybackyard w-full object-cover rounded-lg"
        src="@/assets/design/design0.jpg"
        alt=""
      />
    </div> -->
    <div class="project-container">
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
    </div>
    <article class="p2">
      <p class="md:text-2xl sm:text-xl my-5">
        Hello! I am a digital multimedia designer and developer from Seattle, Washington.
        I have been producing multimedia design for 20+ years and have 8+ years of
        professional experience developing digital applications. View my
        <router-link to="/experience">experience</router-link> for more information!<br /><br />

        I am especially passionate for creating bold user experiences that change the way
        you think. I am an experimenter, a playful manipulator, a bit of a mad scientist.
        I tackle new design challenges head-on without fear without compromizing
        usability. For a more in-depth look at what I create, check out my
        <router-link to="/skills">skills</router-link> to learn more. <br /><br />

        I intend my web designs to be accessible to all and viewable on all devices. I'm
        very careful to incorporate snappy and legible responsive design into everything I
        do. If you are interested in a comprehensive list of relevant skills and
        experience, please reference
        <a :href="resume" target="_blank" class="">my resumé</a>.<br /><br />

        Want to get in touch? <router-link to="/contact">contact me</router-link>!
      </p>
      <!-- <GalleryComponent class="" :images="[img1, img2, img3]" />
      <GalleryComponent class="" :images="[img4, img5, img6]" /> -->
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

import WorkBox from "@/components/WorkBox.vue";

import resume from "@/assets/KyleyGrayResume.pdf";

import img1 from "@/assets/design/design2.jpg";
import img2 from "@/assets/design/design3.jpg";
import img3 from "@/assets/design/design1.jpg";
import img4 from "@/assets/nature/psychoflower.jpg";
import img5 from "@/assets/nature/fullbackyard.jpg";
import img6 from "@/assets/nature/dogmoeba.jpg";

export default defineComponent({
  components: {
    // TextFX,
    // ScrollFX,
    // GalleryComponent,
    // ResumeBtn,
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

    const myLinks = ["webdev", "ui"];
    const myList = ["list 1", "list 2"];

    const experienceList = [
      {
        title: "UX Designer/Protyper",
        company: "BP3 Global",
        period: "2022 - 2023",
        links: ["webdev", "ux", "design"],
        list: [
          "UX consultant for large national clients.",
          "Designer and prototyper in Angular.",
          "Wireframes, presentations, reports, interviews.",
          "Highly-collaborative workplace, clear communication with team members.",
        ],
      },
      {
        title: "Full Stack Developer",
        company: "Boeing",
        period: "2020 - 2022",
        links: ["webdev", "ux", "design", "os"],
        list: [
          "Designer, developer, and owner of several front-end UIs for interfacing with consumer databases.",
          "Developed in Angular with a Java Springboot backend.",
          "Managed hosting in GitLabs and Cloud Foundry.",
        ],
      },
      {
        title: "Automation Tester",
        company: "WorkBoard",
        period: "2022",
        links: ["webdev", "os"],
        list: [
          "Developed and maintained several scripts for test automation in Cypress.",
          "Reported and presented bugs in the application to developers.",
        ],
      },
      {
        title: "C.S. Teacher & Mentor",
        company: "King's High School",
        period: "2018-2020",
        links: ["audio", "os", "webdev"],
        list: [
          "Designed, managed, and taught 8 semesters of computer science courses.",
          "Managed over 500 student Microsoft Surface laptops.",
          "Supervised and mentored a student-lead IT helpdesk.",
        ],
      },
      {
        title: "Freelance Producer",
        company: "Bodyfractal Creative",
        period: "2016 - present",
        links: ["webdev", "design", "audio", "os", "ai"],
        list: [
          "Designed, developed, and deployed several client and personal websites.",
          "Managed and advised hosting solutions for clients.",
        ],
      },
    ];
    return {
      viewParent,
      mytitle,
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
      resume,

      myLinks,
      myList,
      experienceList,
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
  // padding: 1.5em;
  // .mytitlecontainer {
  //   position: absolute;
  //   top: 2em;
  //   left: 1.5em;
  //   max-width: 70vw;
  //   border: 2px dotted var(--primary);
  //   border-radius: 0.5rem;

  //   & * {
  //     // transition: background-color 0.5s ease;
  //   }
  //   .mytitle {
  //     // text-shadow: 2px 2px 0px var(--accent);
  //     border-radius: 0.5rem 0.5rem 0 0;
  //     color: var(--primary);
  //     background-color: var(--secondary);
  //     &.rainbow {
  //       color: #ff8888;
  //       .fx {
  //         .fadein {
  //           animation: colorcycle 10s linear infinite;
  //           filter: hue-rotate(0deg);
  //         }
  //       }
  //     }
  //   }
  //   .mydesc {
  //     border-radius: 0 0 0.5rem 0.5rem;
  //     color: var(--primary);
  //     background-color: var(--secondary);
  //   }
  //   .rainbow-btn {
  //     // display: block;
  //     width: 25px;
  //     height: 25px;
  //     border-radius: 5px;
  //     background: linear-gradient(
  //       45deg,
  //       rgba(255, 0, 0, 1) 0%,
  //       rgba(255, 154, 0, 1) 10%,
  //       rgba(208, 222, 33, 1) 20%,
  //       rgba(79, 220, 74, 1) 30%,
  //       rgba(63, 218, 216, 1) 40%,
  //       rgba(47, 201, 226, 1) 50%,
  //       rgba(28, 127, 238, 1) 60%,
  //       rgba(95, 21, 242, 1) 70%,
  //       rgba(186, 12, 248, 1) 80%,
  //       rgba(251, 7, 217, 1) 90%,
  //       rgba(255, 0, 0, 1) 100%
  //     );
  //     opacity: 0.2;
  //     &:hover {
  //       opacity: 1;
  //     }

  //     font-size: 1rem;
  //   }
  // }
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
