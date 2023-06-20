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
      <div class="token-container">
        <SkillToken>HTML</SkillToken>
        <!-- <SkillToken accent>CSS is awesome</SkillToken> -->
        <SkillToken>SASS</SkillToken>
        <SkillToken>JavaScript</SkillToken>
        <SkillToken>TypeScript</SkillToken>
        <SkillToken>Vue 3</SkillToken>
        <SkillToken>Angular</SkillToken>
        <SkillToken>Git</SkillToken>
        <!-- <SkillToken accent>Please hire me</SkillToken> -->
        <SkillToken>REST APIs</SkillToken>
        <SkillToken>CI/CD Management</SkillToken>
        <SkillToken>Prototyping</SkillToken>
        <SkillToken>Motion Design</SkillToken>
        <SkillToken>Component Design</SkillToken>
        <!-- <SkillToken accent>Coding since 2007</SkillToken> -->
        <SkillToken>Accessibility</SkillToken>
        <SkillToken highlight
          ><a href="https://prodigalpictures.com" target="_blank"
            >Live Example: Prodigal Pictures</a
          ></SkillToken
        >
      </div>
      <p class="my-5 text-xl">
        Please enjoy this website as a prime example of my front-end development skills.
        This website was created with Vue 3 + Vite using TypeScript and SCSS for styling
        with some Tailwind CSS for simplicity.
      </p>
      <GalleryComponent :images="[img1, img2, img3]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillStats from "@/components/page/SkillStats.vue";
import GalleryComponent from "@/components/page/GalleryComponent.vue";
import SkillToken from "@/components/page/SkillToken.vue";

import img1 from "@/assets/skills/webdevskill/webdev1.jpg";
import img2 from "@/assets/skills/webdevskill/webdev2.jpg";
import img3 from "@/assets/skills/webdevskill/webdev3.jpg";

export default defineComponent({
  name: "WebDevSkill",
  components: {
    SkillStats,
    GalleryComponent,
    SkillToken,
  },
  setup() {
    return { img1, img2, img3 };
  },
});
</script>

<style lang="scss" scoped></style>
