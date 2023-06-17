<template>
  <table class="">
    <thead class="">
      <tr>
        <th scope="col" colspan="3" class="title">Skill Stats</th>
      </tr>
    </thead>
    <tbody class="">
      <tr>
        <td class="year-label">Years</td>
        <td class="year-number">{{ props.years }}</td>
        <td class="year-stars">
          <TextFX :text="yearblocks" speed="30" />
        </td>
      </tr>
      <tr>
        <td class="skill-label">Skill</td>
        <td class="skill-number">
          {{ SkillLevel[props.skillLevel].t }}
        </td>
        <td class="skill-stars">
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
table {
  width: 100%;
  max-width: 767px;
}

table * {
  padding: 0.2em;
}

.title {
  text-align: left;
  padding-left: 0.5em;
  background-color: var(--accent);
}

@media (max-width: 767px) {
  table {
    font-size: 14px;
    width: 100%;

    & > * {
      // width: auto;
    }
  }
}
</style>
