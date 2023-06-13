<template>
  <div>
    <div class="devicons">
      <i class="devicon-photoshop-plain" data-name="Photoshop"></i>
      <i class="devicon-illustrator-plain" data-name="Illustrator"></i>
      <i class="devicon-apple-original" data-name="Procreate"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="5" skillLevel="intermediate" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillStats from "@/components/page/SkillStats.vue";

export default defineComponent({
  name: "DesignSkill",
  components: {
    SkillStats,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
