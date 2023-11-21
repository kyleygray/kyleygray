<template>
  <div>
    <div class="devicons">
      <i class="devicon-photoshop-plain" data-name="Photoshop"></i>
      <i class="devicon-illustrator-plain" data-name="Illustrator"></i>
      <i class="devicon-aftereffects-plain" data-name="AfterEffects"></i>
      <i class="devicon-apple-original" data-name="Procreate"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="6" skillLevel="intermediate" />
      <div class="token-container">
        <SkillToken>Procreate</SkillToken>
        <SkillToken>Photoshop</SkillToken>
        <!-- <SkillToken accent>Graphic Design Is My Passion</SkillToken> -->
        <SkillToken>Illustrator</SkillToken>
        <SkillToken>AfterEffects</SkillToken>
        <SkillToken>Pen &amp; Paper</SkillToken>
        <!-- <SkillToken accent>I ♥ art</SkillToken> -->
        <SkillToken>Acrylics</SkillToken>
        <SkillToken>Animation</SkillToken>
        <SkillToken>Logos</SkillToken>
        <!-- <SkillToken accent>I ♥ Body Horror</SkillToken> -->
        <SkillToken>Stickers</SkillToken>
        <SkillToken>Flyers/Promos</SkillToken>
        <!-- <SkillToken accent>Productive Mental Illnesses</SkillToken> -->
        <SkillToken>Photo Manipulation</SkillToken>
        <SkillToken>Video Production</SkillToken>
        <SkillToken highlight><a href="#">Art Gallery Coming Soon...</a></SkillToken>
      </div>
      <p class="my-5 text-xl">
        My approach to design is to be bold and friendly. I'm not afraid to try new
        things, I'm not afraid to express myself in unconventional ways. My preferred
        style of illustration is surrealism and abstract. Primarily a digital artist using
        Procreate, slowly and carefully delving into traditional mediums.
      </p>
      <GalleryComponent class="" :images="[img1, img2, img3]" />
      <GalleryComponent class="" :images="[img4, img5, img6]" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillStats from "@/components/page/SkillStats.vue";
import GalleryComponent from "@/components/page/GalleryComponent.vue";
import SkillToken from "@/components/page/SkillToken.vue";

import img1 from "@/assets/design/design2.jpg";
import img2 from "@/assets/design/design3.jpg";
import img3 from "@/assets/nature/dogmoeba.jpg";
import img4 from "@/assets/nature/psychoflower.jpg";
import img5 from "@/assets/nature/fullbackyard.jpg";
import img6 from "@/assets/design/design1.jpg";

export default defineComponent({
  name: "DesignSkill",
  components: {
    SkillStats,
    GalleryComponent,
    SkillToken,
  },
  setup() {
    return {
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

<style lang="scss" scoped></style>
