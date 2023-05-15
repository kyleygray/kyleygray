<template>
  <div class="view-container">
    <TextFX text="Kyley Gray" type="fadein" speed="15" class="text-center text-3xl m-5" />
    <TextFX 
    text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab explicabo dolore, facere ipsum quod tempore est neque eligendi, pariatur mollitia ex, ut a sit reprehenderit nobis voluptate optio voluptates omnis?"
    type="fadein" speed="15" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TextFX from "@/components/page/TextFX.vue";

export default defineComponent({
  components: {
    TextFX
  },
  setup () {
    
    return {
      
    }
  }
});
</script>

<style lang="scss" scoped>
  .view-container {
   
  }
</style>