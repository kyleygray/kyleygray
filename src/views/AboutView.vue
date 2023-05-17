<template>
  <main class="view-container p-0" ref="viewParent">

    <div class="w-full object-cover relative">
      <div class="mytitlecontainer absolute top-20 left-10 z-1">
        <h1 class="mytitle text-4xl font-bold p-2"><TextFX text="Kyley Gray" type="fadein" speed="20" /></h1>
        <h2 class="mydesc text-2xl font-normal p-2"><TextFX text="Multimedia Design &amp; Development" type="fadein" speed="20" /></h2>
      </div>
      <img class="h-96 rounded-lg w-full object-cover" src="@/assets/backyard.jpg" alt="cover image">
    </div> 
    
      <article class="p1">
        <h2 class="my-2 text-xl font-bold"><TextFX type="fadein"
        text="
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, esse.
        " /></h2>
        <p class="text-sm"><TextFX type="fadein"
        text="
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum molestiae, repudiandae dolorum provident est ex tempora distinctio quas id, architecto ipsam illo sit ad asperiores at dolor tenetur. Quidem temporibus, debitis quia repudiandae distinctio labore? Aspernatur, exercitationem magnam! Sit praesentium rerum voluptas veniam quod voluptates minus quisquam, sed alias similique officiis temporibus animi autem, molestias quo amet fugit facilis voluptatum. Quae ad dolores quam dignissimos quaerat incidunt delectus doloremque, iste veniam obcaecati neque laboriosam nemo eveniet qui explicabo? Esse eveniet optio blanditiis quisquam tenetur. Reprehenderit, iure ipsam perspiciatis optio voluptatem voluptate ex voluptatum adipisci saepe quod quae minus commodi consequatur.
        " speed="10" /></p>
      </article>
  </main>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue';
import TextFX from "@/components/page/TextFX.vue";
import AnimatedFX from "@/components/page/AnimatedFX.vue";

export default defineComponent({
  components: {
    TextFX
  },
  setup () {
    const viewParent = ref(null);
    provide("viewParent", viewParent)
    
    return {
      viewParent
    }
  }
});
</script>

<style lang="scss" scoped>
  .view-container {
    // padding: 1.5em;
    .mytitlecontainer {
      border-radius: 0.5rem;

      & * {
        transition: background-color 0.5s ease;
      }
      .mytitle {
        border-radius: 0.5rem 0.5rem 0 0;
        color: var(--secondary);
        background-color: var(--primary);
      }
      .mydesc {
        border-radius: 0 0 0.5rem 0.5rem;
        color: var(--primary);
        background-color: var(--secondary);
      }
    }
  }
</style>