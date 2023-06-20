<template>
  <span :class="{ skilltoken: true, highlight: props.highlight, accent: props.accent }">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillToken",
  props: {
    highlight: {
      type: Boolean,
      default: false,
    },
    accent: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    return { props };
  },
});
</script>

<style lang="scss">
.skilltoken {
  font-size: 14px;
  background-color: var(--secondary);
  color: var(--primary);
  border-right: 1px solid var(--accent);
  border-bottom: 1px solid var(--accent);
  box-shadow: inset -1px -1px 2px 0px var(--accent);
  padding: 1.4em 0.7em;
  max-height: 2rem;
  display: flex;
  align-items: center;
  //   font-style: italic;
  //   margin-right: 0.33em;
  //   margin-bottom: 0.33em;
  font-weight: 400;
  //   border-top-right-radius: 0.5em;
  //   border-bottom-left-radius: 0.5em;
  //   border-radius: 0.25em;
  transition: color 0.5s ease, background-color 0.5s ease, border 0.5s ease,
    box-shadow 0.5s ease;
  cursor: initial;
  user-select: none;

  &:last-child {
    border: none;
  }

  &.highlight {
    border: 1px dotted var(--primary);
    background-color: var(--primary);
    color: var(--secondary);
    font-weight: 500;
    box-shadow: none;
    // text-decoration: underline;
    // background-color: var(--primary);
    // color: var(--secondary);
    border-radius: 0 0.5em 0.5em 0;

    &::after {
      content: "▷";
      margin-left: 0.5em;
    }
  }

  &.accent {
    // border: 1px solid var(--accent);
    // opacity: 0.5;
    background-color: var(--accent);
  }

  //   &:hover {
  //
  //   }
}
@media (max-width: 767px) {
  .skilltoken {
    font-size: 14px;
  }
}
</style>
