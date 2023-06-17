<template>
  <div>
    <div class="devicons">
      <i data-name="OpenAI">
        <transition name="fade">
          <img v-if="!inverted" src="@/assets/devicons/ChatGPT.svg" />
        </transition>
        <transition name="fade">
          <img v-if="inverted" src="@/assets/devicons/ChatGPT_i.svg" />
        </transition>
      </i>
      <i class="devicon-javascript-plain" data-name="JavaScript"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="2" skillLevel="beginner" />
      <p class="my-5">
        With the emerging advancements in artificial intelligence, I have been focused on
        maximizing my professional and productive benefit with AI. Learning how to use it
        has been a crucial element in building this website, as the cache of knowledge it
        contains cannot be ignored. While I do take all credit for this website's
        direction, I have been having a very lengthy and detailed conversation with
        ChatGPT-4 and it has had some influence over the functionality and style.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import useStore from "@/services/store.ts";
import SkillStats from "@/components/page/SkillStats.vue";

export default defineComponent({
  name: "AISkill",
  components: {
    SkillStats,
  },
  setup() {
    const { state } = useStore();
    const inverted = computed(() => state.theme.inverted);
    return { inverted };
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
