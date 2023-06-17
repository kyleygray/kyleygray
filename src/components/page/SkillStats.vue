<template>
  <table class="divide-y">
    <thead class="">
      <tr>
        <th
          scope="col"
          colspan="3"
          class="px-4 py-1 text-left text-md font-medium uppercase tracking-wider accent-bg"
        >
          Skill Stats
        </th>
      </tr>
    </thead>
    <tbody class="divide-y">
      <tr>
        <td class="px-6 py-4 w-2 whitespace-nowrap text-md font-bold">Years</td>
        <td class="px-6 py-4 w-2 whitespace-nowrap text-md">{{ props.years }}</td>
        <td class="px-6 py-4 whitespace-nowrap text-xl">
          <TextFX :text="yearblocks" speed="30" />
        </td>
      </tr>
      <tr>
        <td class="px-6 py-4 w-2 whitespace-nowrap text-md font-bold">Skill Level</td>
        <td class="px-6 py-4 w-2 whitespace-nowrap text-md">
          {{ SkillLevel[props.skillLevel].t }}
        </td>
        <td class="px-6 py-4 whitespace-nowrap text-xl">
          <TextFX :text="SkillLevel[props.skillLevel].b" speed="30" />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import TextFX from "@/components/page/TextFx.vue";

export enum SkillLevel {
  novice = {
    t: "Novice",
    b: "★",
  },
  beginner = {
    t: "Beginner",
    b: "★★",
  },
  intermediate = {
    t: "Intermediate",
    b: "★★★",
  },
  advanced = {
    t: "Advanced",
    b: "★★★★",
  },
  expert = {
    t: "Expert",
    b: "★★★★★",
  },
}

export default defineComponent({
  name: "SkillStats",
  props: {
    years: {
      type: String,
      required: true,
    },
    skillLevel: {
      type: String,
      required: true,
    },
  },
  components: {
    TextFX,
  },
  setup(props) {
    const yearblocks = computed(() => {
      return "★".repeat(props.years);
    });
    return { props, yearblocks, SkillLevel };
  },
});
</script>

<style lang="scss" scoped>
@media (max-width: 767px) {
  table {
    font-size: 12px;
    width: 100%;

    & > * {
      // width: auto;
    }
  }
}
</style>
