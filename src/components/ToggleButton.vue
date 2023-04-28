<template>
  <div @click="props.onClick" :class="toggle"></div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

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
    }
  },
  setup(props) {
    const toggle = computed(() => (props.toggleActive ? "toggleOn" : "toggleOff"));

    return {
      toggle,
      props
    }
  }
});
</script>

<style scoped>
  div {
    display: block;
    background: red;
    border: 1px solid black;
    width: 60px;
    height: 30px;
    &.toggleOn {

    }
    &.toggleOff {

    }
  }
</style>
