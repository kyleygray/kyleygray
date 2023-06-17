<template>
  <div>
    <div class="devicons">
      <i class="devicon-windows8-original" data-name="Windows"></i>
      <i class="devicon-apple-original" data-name="Mac"></i>
      <i class="devicon-linux-plain" data-name="Linux"></i>
      <i class="devicon-digitalocean-plain" data-name="Server Cloud"></i>
      <i class="devicon-bash-plain" data-name="Bash"></i>
      <i class="devicon-gitlab-plain" data-name="Gitlabs"></i>
    </div>
    <div class="text-lg">
      <SkillStats years="4" skillLevel="intermediate" />
      <p class="my-5 text-sm">
        I have a good understanding of all major operating systems from a user, developer,
        and an administrator perspective. I regularly manage my own command-line tools and
        I am not afraid to dig deep into the critical system files if necessary. My
        current OS of choice is MacOS, followed by Arch Linux.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SkillStats from "@/components/page/SkillStats.vue";

export default defineComponent({
  name: "OSSkill",
  components: {
    SkillStats,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped></style>
