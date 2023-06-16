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
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil provident
        exercitationem iusto iure assumenda eius itaque, magnam architecto quisquam
        reprehenderit vitae animi fugiat sint cupiditate earum perferendis nisi debitis
        deleniti.
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
  name: "UXSkill",
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
