<template>
  <div @click="changeTheme(props.theme)" :class="toggle">
    <span>{{props.name}}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import * as themes from '@/services/themes';
import useStore from '@/services/store';

export default defineComponent({
  name: 'ToggleButton',
  props: {
    theme: {
      type: themes.Theme,
      required: true
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const changeTheme = useStore().methods.setTheme;
    const toggle = computed(() => (props.theme === useStore().state.theme ? "toggleOn" : "toggleOff"));

    return {
      toggle,
      changeTheme,
      props
    }
  }
});
</script>

<style lang="scss" scoped>
  div {
    display: block;
    background: green;
    border: 1px solid black;
    width: 60px;
    height: 30px;
    &.toggleOn {

    }
    &.toggleOff {
      background: red;
    }
  }
</style>
