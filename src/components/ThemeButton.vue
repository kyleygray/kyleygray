<template>
  <div @click="changeTheme(props.theme)" :class="toggle" :style="buttonTheme">
    <span>{{ props.theme.name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from "vue";
import * as themes from "@/services/themes";
import useStore from "@/services/store";

export default defineComponent({
  name: "ThemeButton",
  props: {
    theme: {
      type: themes.Theme,
      required: true,
    },
  },
  setup(props) {
    const { state, methods } = useStore();
    const changeTheme = methods.setTheme;
    const activeTheme = ref(state.theme);
    const toggle = ref("toggleOn");
    const buttonTheme = computed(() => {
      return {
        background: `linear-gradient(45deg, ${props.theme.secondary}, ${props.theme.background})`,
        color: props.theme.primary,
      };
    });

    watch(
      () => state.theme,
      (theme) => {
        toggle.value = theme.name === props.theme.name ? "toggleOn" : "toggleOff";
      },
      { immediate: true }
    );

    return {
      toggle,
      changeTheme,
      buttonTheme,
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
div {
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  border: 1px solid var(--primary);
  width: 2.5em;
  height: 2.5em;
  border-radius: 0.5em;
  margin: 0.25em;

  span {
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 40px;
    align-items: center;
    justify-content: center;
    font-weight: 500;
    font-size: 0.8em;
  }

  &.toggleOn {
    &::before {
      text-align: center;
      content: "▼";
      font-size: 0.8em;
      position: absolute;
      top: -20px;
      left: 0px;
      width: 100%;
    }
  }
  &.toggleOff {
  }
}
</style>
