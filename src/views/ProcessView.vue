<template>
  <div class="view-container" ref="viewParent">
    <div class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid ducimus aut eaque ab molestiae repudiandae ad recusandae a accusantium, dolore nisi debitis deserunt ex id numquam! Nostrum dolorem, voluptatibus eveniet voluptatem ab cupiditate officiis ducimus accusamus, iste, eligendi saepe sequi ratione natus necessitatibus totam voluptate amet reprehenderit dolor impedit. Officiis quos esse consequatur harum sequi magni ipsam, reiciendis iure quae itaque, obcaecati quidem animi iste atque incidunt sit quod hic nam totam iusto. Nisi, quis vel. Sit nemo sed, esse, ducimus, iste quidem facilis itaque repellendus tenetur cupiditate voluptas ad commodi inventore officiis voluptatem accusantium consequatur similique nihil assumenda!</div>
    <div class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid ducimus aut eaque ab molestiae repudiandae ad recusandae a accusantium, dolore nisi debitis deserunt ex id numquam! Nostrum dolorem, voluptatibus eveniet voluptatem ab cupiditate officiis ducimus accusamus, iste, eligendi saepe sequi ratione natus necessitatibus totam voluptate amet reprehenderit dolor impedit. Officiis quos esse consequatur harum sequi magni ipsam, reiciendis iure quae itaque, obcaecati quidem animi iste atque incidunt sit quod hic nam totam iusto. Nisi, quis vel. Sit nemo sed, esse, ducimus, iste quidem facilis itaque repellendus tenetur cupiditate voluptas ad commodi inventore officiis voluptatem accusantium consequatur similique nihil assumenda!</div>
    <div class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid ducimus aut eaque ab molestiae repudiandae ad recusandae a accusantium, dolore nisi debitis deserunt ex id numquam! Nostrum dolorem, voluptatibus eveniet voluptatem ab cupiditate officiis ducimus accusamus, iste, eligendi saepe sequi ratione natus necessitatibus totam voluptate amet reprehenderit dolor impedit. Officiis quos esse consequatur harum sequi magni ipsam, reiciendis iure quae itaque, obcaecati quidem animi iste atque incidunt sit quod hic nam totam iusto. Nisi, quis vel. Sit nemo sed, esse, ducimus, iste quidem facilis itaque repellendus tenetur cupiditate voluptas ad commodi inventore officiis voluptatem accusantium consequatur similique nihil assumenda!</div>
    <div class="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio aliquid ducimus aut eaque ab molestiae repudiandae ad recusandae a accusantium, dolore nisi debitis deserunt ex id numquam! Nostrum dolorem, voluptatibus eveniet voluptatem ab cupiditate officiis ducimus accusamus, iste, eligendi saepe sequi ratione natus necessitatibus totam voluptate amet reprehenderit dolor impedit. Officiis quos esse consequatur harum sequi magni ipsam, reiciendis iure quae itaque, obcaecati quidem animi iste atque incidunt sit quod hic nam totam iusto. Nisi, quis vel. Sit nemo sed, esse, ducimus, iste quidem facilis itaque repellendus tenetur cupiditate voluptas ad commodi inventore officiis voluptatem accusantium consequatur similique nihil assumenda!</div>
    <AnimatedFX name="test" :steps="[25, 75]">
      <div class="animated">test</div>
    </AnimatedFX>
    <div class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam enim nisi quo? Culpa voluptatum deleniti, fugit ullam architecto cum aliquid accusantium nihil ratione explicabo eos, qui corporis corrupti, natus minus distinctio! Autem cumque soluta ad esse enim! Veniam eos rem, labore dolores dolore sed repudiandae! Id illo fuga, aut odio pariatur amet deserunt, iste quasi consectetur debitis vitae quidem beatae eum molestias? Modi nihil iure, corrupti laudantium minus debitis odit fugiat laborum repudiandae ex quos atque mollitia excepturi placeat, velit quasi unde voluptate adipisci incidunt! Quae vel error temporibus praesentium, minus exercitationem, quas enim corporis, eaque harum placeat inventore. Odio?</div>
    <div class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam enim nisi quo? Culpa voluptatum deleniti, fugit ullam architecto cum aliquid accusantium nihil ratione explicabo eos, qui corporis corrupti, natus minus distinctio! Autem cumque soluta ad esse enim! Veniam eos rem, labore dolores dolore sed repudiandae! Id illo fuga, aut odio pariatur amet deserunt, iste quasi consectetur debitis vitae quidem beatae eum molestias? Modi nihil iure, corrupti laudantium minus debitis odit fugiat laborum repudiandae ex quos atque mollitia excepturi placeat, velit quasi unde voluptate adipisci incidunt! Quae vel error temporibus praesentium, minus exercitationem, quas enim corporis, eaque harum placeat inventore. Odio?</div>
    <div class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam enim nisi quo? Culpa voluptatum deleniti, fugit ullam architecto cum aliquid accusantium nihil ratione explicabo eos, qui corporis corrupti, natus minus distinctio! Autem cumque soluta ad esse enim! Veniam eos rem, labore dolores dolore sed repudiandae! Id illo fuga, aut odio pariatur amet deserunt, iste quasi consectetur debitis vitae quidem beatae eum molestias? Modi nihil iure, corrupti laudantium minus debitis odit fugiat laborum repudiandae ex quos atque mollitia excepturi placeat, velit quasi unde voluptate adipisci incidunt! Quae vel error temporibus praesentium, minus exercitationem, quas enim corporis, eaque harum placeat inventore. Odio?</div>
    <div class="">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam enim nisi quo? Culpa voluptatum deleniti, fugit ullam architecto cum aliquid accusantium nihil ratione explicabo eos, qui corporis corrupti, natus minus distinctio! Autem cumque soluta ad esse enim! Veniam eos rem, labore dolores dolore sed repudiandae! Id illo fuga, aut odio pariatur amet deserunt, iste quasi consectetur debitis vitae quidem beatae eum molestias? Modi nihil iure, corrupti laudantium minus debitis odit fugiat laborum repudiandae ex quos atque mollitia excepturi placeat, velit quasi unde voluptate adipisci incidunt! Quae vel error temporibus praesentium, minus exercitationem, quas enim corporis, eaque harum placeat inventore. Odio?</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from 'vue';
import AnimatedFX from "@/components/page/AnimatedFX.vue";

export default defineComponent({
  components: {
    AnimatedFX
  },
  setup () {
    const viewParent = ref(null);
    provide('animatedParent', viewParent)
    
    return {
      viewParent
    }
  }
});
</script>

<style lang="scss" scoped>
  .view-container {
   
  }

  .test-0 {
    background-color: red;
  }

  .test-1 {
    background-color: blue;
  }

  .test-2 {
    background-color: green;
  }

  div.animated {

  }
</style>
