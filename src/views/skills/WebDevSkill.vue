<template>
  <div>
    <div class="devicons">
      <i class="devicon-vuejs-plain" data-name="Vue"></i>
      <i class="devicon-angularjs-plain" data-name="Angular"></i>
      <i class="devicon-html5-plain" data-name="HTML"></i>
      <i class="devicon-css3-plain" data-name="CSS"></i>
      <i class="devicon-sass-original" data-name="Sass"></i>
      <i class="devicon-javascript-plain" data-name="JavaScript"></i>
      <i class="devicon-typescript-plain" data-name="TypeScript"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="7" skillLevel="advanced" />
      <p class="my-5 text-base">
        After getting my undergraduate Computer Science degree, I have always been
        primarily focused on web development as my technical career specialty. This
        website was created from the ground up using a Vue 3 + Vite stack. I prefer SCSS
        for styling. Most of my professional work has been proprietary, working for
        companies such as Boeing and Charter/Spectrum.
      </p>
      <GalleryComponent :images="[img1, img2, img3]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillStats from "@/components/page/SkillStats.vue";
import GalleryComponent from "@/components/page/GalleryComponent.vue";

import img1 from "@/assets/skills/webdevskill/webdev1.jpg";
import img2 from "@/assets/skills/webdevskill/webdev2.jpg";
import img3 from "@/assets/skills/webdevskill/webdev3.jpg";

export default defineComponent({
  name: "WebDevSkill",
  components: {
    SkillStats,
    GalleryComponent,
  },
  setup() {
    return { img1, img2, img3 };
  },
});
</script>

<style lang="scss" scoped></style>
