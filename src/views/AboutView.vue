<template>
  <div class="view-container">
    <div class="w-full object-cover relative">
      <div class="absolute top-20 left-10 z-1">
        <h1 class="mytitle text-4xl font-bold p-2"><TextFX text="Kyley Gray" speed="20" /></h1>
        <h2 class="mytitle text-2xl font-normal p-2"><TextFX text="Multimedia Design &amp; Development" speed="20" /></h2>
      </div>
      <img class="h-96 rounded-lg w-full object-cover" src="@/assets/backyard.jpg" alt="cover image">
    </div>
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
   .mytitle {
    background-color: var(--secondary);
    transition: background-color 0.5s ease;
   }
  }
</style>