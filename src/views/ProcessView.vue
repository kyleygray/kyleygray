<template>
  <div class="view-container">
    <Markdown :source="content" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Markdown from 'vue3-markdown-it';

export default defineComponent({
  components: {
    Markdown
  },
  setup () {
    const content = '# Process Page';
    return {
      content
    }
  }
});
</script>

<style lang="scss" scoped>
  .view-container {
   
  }
</style>
