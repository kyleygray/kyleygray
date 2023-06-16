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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia facere
        deleniti velit, obcaecati quas error, vitae perferendis exercitationem consectetur
        illo corporis inventore porro? Ea repellat a labore accusamus at!
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
