<template>
  <div>
    <div class="devicons">
      <i class="devicon-photoshop-plain" data-name="Photoshop"></i>
      <i class="devicon-illustrator-plain" data-name="Illustrator"></i>
      <i class="devicon-apple-original" data-name="Procreate"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="6" skillLevel="intermediate" />
      <p class="my-5">
        My approach to design is to be bold and friendly. I'm not afraid to try new
        things, I'm not afraid to express myself in unconventional ways. I really hate
        hamburger menus as a UI feature. My preferred style of illustration is surrealism
        and abstract.
      </p>
      <GalleryComponent class="" :images="[img1, img2, img3]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillStats from "@/components/page/SkillStats.vue";
import GalleryComponent from "@/components/page/GalleryComponent.vue";

import img1 from "@/assets/design/design2.jpg";
import img2 from "@/assets/design/design3.jpg";
import img3 from "@/assets/nature/dogmoeba.jpg";

export default defineComponent({
  name: "DesignSkill",
  components: {
    SkillStats,
    GalleryComponent,
  },
  setup() {
    return {
      img1,
      img2,
      img3,
    };
  },
});
</script>

<style lang="scss" scoped></style>
