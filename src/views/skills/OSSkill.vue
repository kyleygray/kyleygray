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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium minima
        sed possimus dolor dignissimos in temporibus aspernatur cum. Ipsam deleniti veniam
        amet itaque aspernatur aut? Est animi natus eaque!
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
  name: "OSSkill",
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
