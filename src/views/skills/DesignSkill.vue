<template>
  <div>
    <div class="devicons">
      <i class="devicon-photoshop-plain" data-name="Photoshop"></i>
      <i class="devicon-illustrator-plain" data-name="Illustrator"></i>
      <i class="devicon-apple-original" data-name="Procreate"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="6" skillLevel="intermediate" />
      <p>
        My approach to design is to be bold and friendly. I'm not afraid to try new
        things, I'm not afraid to express myself in unconventional ways. I really hate
        hamburger menus as a UI feature. My preferred style of illustration is surrealism
        and abstract.
      </p>
      <GalleryComponent
        class=""
        :images="[
          '/src/assets/design/design2.jpg',
          '/src/assets/design/design3.jpg',
          '/src/assets/nature/dogmoeba.jpg',
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
  name: "DesignSkill",
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
