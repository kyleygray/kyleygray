<template>
  <div>
    <div class="devicons">
      <i class="devicon-vuejs-plain" data-name="Vue"></i>
      <i class="devicon-angularjs-plain" data-name="Angular"></i>
      <i class="devicon-photoshop-plain" data-name="Photoshop"></i>
      <i class="devicon-illustrator-plain" data-name="Illustrator"></i>
      <i class="devicon-figma-plain" data-name="Figma"></i>
      <i class="devicon-google-plain" data-name="Google UX"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="3" skillLevel="beginner" />
      <p class="my-5 text-sm">
        I want usability of interfaces to be a priority. In the gallery below you can see
        a simplified progression of the website, from wireframe to an early version of the
        finalized UI system. I wanted to create an interface that was fun to interact with
        as well as easily customizable and accessible for users with cognitive and sensory
        impairment.
      </p>
      <GalleryComponent :images="[img1, img2, img3]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillStats from "@/components/page/SkillStats.vue";
import GalleryComponent from "@/components/page/GalleryComponent.vue";

import img1 from "@/assets/skills/uxskill/ux1.jpg";
import img2 from "@/assets/skills/uxskill/ux2.jpg";
import img3 from "@/assets/skills/uxskill/ux3.jpg";

export default defineComponent({
  name: "UXSkill",
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
