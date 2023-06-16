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
      <p class="my-5">
        I have always been primarily focused on web development as my technical career
        specialty. Ever since deploying my first website with Adobe Dreamweaver at the age
        of 16, my insperation as a developer is influenced by a lifetime of internet
        consumption. I really enjoy making things look good.
      </p>
      <GalleryComponent
        :images="[
          '/src/assets/skills/webdevskill/webdev1.jpg',
          '/src/assets/skills/webdevskill/webdev2.jpg',
          '/src/assets/skills/webdevskill/webdev3.jpg',
        ]"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillStats from "@/components/page/SkillStats.vue";
import GalleryComponent from "@/components/page/GalleryComponent.vue";

export default defineComponent({
  name: "WebDevSkill",
  components: {
    SkillStats,
    GalleryComponent,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
