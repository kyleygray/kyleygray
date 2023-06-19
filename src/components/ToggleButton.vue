<template>
  <div class="wrapper">
    <div v-show="props.label" class="label" :style="{ fontSize: props.size }">
      {{ props.label }}
    </div>
    <div class="switch" @click="props.onClick" :class="toggle">
      <span></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from "vue";

export default defineComponent({
  name: "ToggleButton",
  props: {
    onClick: {
      type: Function,
      required: true,
    },
    toggleActive: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  setup(props) {
    const toggle = computed(() => (props.toggleActive ? "toggleOn" : "toggleOff"));

    return {
      toggle,
      props,
    };
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  height: fit-content;
  align-items: center;
  justify-content: center;

  & > * {
    margin: 0.33em 0.1em;
  }
}

.label {
  // width: fit-content;
  // height: fit-content;
}

.switch {
  cursor: pointer;
  user-select: none;
  position: relative;
  display: block;
  border: 1px solid var(--primary);
  border-radius: 1em;
  width: 3em;
  height: 1.5em;
  min-width: 3em;
  background-color: var(--background);
  transition: background-color 0.5s ease;

  span {
    transform: translateX(0px);
    position: absolute;
    display: block;
    height: 1.1em;
    width: 1.1em;
    margin: 2px;
    border-radius: 1em;
    border: 1px solid var(--primary);
    transition: transform 0.5s ease;
    background-color: var(--secondary);
  }

  &.toggleOn {
    text-align: center;
    display: flex;
    // font-size: 0.8em;
    span {
      transform: translateX(1.5em);
    }
    &::before {
      align-self: center;
      font-size: 0.7em;
      // padding-top: 3px;
      text-align: center;
      position: absolute;
      margin: 0px;
      left: 7px;
      content: "off";
    }
  }
  &.toggleOff {
    span {
      display: flex;
      transform: translateX(0%);
    }
    &::before {
      align-self: center;
      font-size: 0.8em;
      text-align: center;
      position: absolute;
      margin: 0px;
      right: 7px;
      content: "on";
    }
  }
}
</style>
