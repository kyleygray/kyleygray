<template>
<div class="wrapper">
  <div v-show="props.label" class="label" :style="{fontSize: props.size}">{{props.label}}</div>
  <div class="switch" @click="props.onClick" :class="toggle">
    <span></span>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'ToggleButton',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    toggleActive: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    size: {
      type: String
    }
  },
  setup(props) {
    const toggle = computed(() => (props.toggleActive ? "toggleOn" : "toggleOff"));

    return {
      toggle,
      props,
    }
  }
});
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    height: fit-content;
    align-items: center;
    justify-content: center;

    & > * {
      margin: 10px 5px;
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
    border-radius: 20px;
    width: 60px;
    height: 30px;
    min-width: 60px;
    background-color: var(--accent);
    transition: background-color 0.5s ease;

    span {
      transform: translateX(0px);
      position: absolute;
      display: block;
      height: 24px;
      width: 24px;
      margin: 2px;
      border-radius: 20px;
      border: 1px solid var(--primary);
      transition: transform 0.5s ease;
      background-color: var(--secondary);
    }

    &.toggleOn {
      text-align: center;
      font-size: 0.8em;
      span {
        transform: translateX(30px);
      }
      &::before{
        padding-top: 3px;
        text-align: center;
        position: absolute;
        margin: 0px;
        left: 7px;
        content: 'off';
      }
    }
    &.toggleOff {
      span {
        transform: translateX(0px);
      }
      &::before{
        text-align: center;
        position: absolute;
        margin: 0px;
        right: 7px;
        content: 'on';
      }
    }
  }
</style>

