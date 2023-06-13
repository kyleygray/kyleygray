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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillStats from "@/components/page/SkillStats.vue";

export default defineComponent({
  name: "UXSkill",
  components: {
    SkillStats,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
