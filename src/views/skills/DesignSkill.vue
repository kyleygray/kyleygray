<template>
  <div>
    <div class="devicons">
      <i class="devicon-photoshop-plain" data-name="Photoshop"></i>
      <i class="devicon-illustrator-plain" data-name="Illustrator"></i>
      <i class="devicon-apple-original" data-name="Procreate"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="5" skillLevel="intermediate" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta omnis neque, autem
        quod eos quia exercitationem voluptatum deserunt incidunt esse vero nostrum amet
        hic perferendis aliquam architecto totam blanditiis voluptatibus.
      </p>
      <GalleryComponent
        :images="[
          'https://placehold.it/500x500',
          'https://placehold.it/500x500',
          'https://placehold.it/500x500',
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
