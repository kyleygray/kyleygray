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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillStats from "@/components/page/SkillStats.vue";

export default defineComponent({
  name: "WebDevSkill",
  components: {
    SkillStats,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
