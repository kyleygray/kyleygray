<!-- BaseView.vue -->
<template>
  <div class="base-view">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    // title: {
    //   type: String,
    //   required: true,
    // },
  },
});
</script>

<style scoped>
.base-view {
  
}
</style>
