<template>
  <div>
    <div class="devicons">
      <i data-name="Reason">
        <transition name="fade">
          <img v-if="!inverted" src="@/assets/devicons/Reason_Studios.svg" />
        </transition>
        <transition name="fade">
          <img v-if="inverted" src="@/assets/devicons/Reason_Studios_i.svg" />
        </transition>
      </i>
      <i class="devicon-apple-original" data-name="Logic"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="12" skillLevel="expert" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import useStore from "@/services/store.ts";
import SkillStats from "@/components/page/SkillStats.vue";

export default defineComponent({
  name: "AudioSkill",
  components: {
    SkillStats,
  },
  setup() {
    const { state } = useStore();
    const inverted = computed(() => state.theme.inverted);

    return {
      inverted,
    };
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  // position: absolute;
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-leave-to {
  position: absolute;
  opacity: 0;
}
</style>
