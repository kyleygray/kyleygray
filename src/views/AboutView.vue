<template>
  <main class="view-container p-0" ref="viewParent">

    <div class="w-full object-cover relative">
      <div class="mytitlecontainer absolute top-20 left-10 z-1">
        <h1 ref="mytitle" class="mytitle text-4xl font-bold p-2 relative"><TextFX text="Kyley Gray" type="fadein" speed="20" /><button ref="rainbowbtn" class="absolute right-2 top-2 rainbow-btn" @click="makeRainbow()"></button></h1>
        <!-- <h1 class="mytitle text-4xl font-bold p-2"><TextFX text="Kyley Gray" type="fadein" speed="20" /></h1> -->
        <h2 class="mydesc text-2xl font-normal p-2"><TextFX text="Multimedia Design &amp; Development" type="fadein" speed="20" /></h2>
      </div>
      <img class="h-96 rounded-lg w-full object-cover" src="@/assets/backyard.jpg" alt="cover image">
    </div> 
    
    <article class="p1">
      <!-- <h2 class="my-2 text-xl font-bold"><TextFX type="fadein"
      text="
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia, esse.
      " /></h2> -->
      <p class="text-xl my-5 font-semibold"><TextFX type="fadein"
      text="
      Kyley is a cryptid located in Seattle, Washington. They have been creating websites, designing visual art, producing electronic music, and exploring the mind and the universe since 2004.
      " speed="10" /></p>
    </article>

    <AnimatedFX name="fade1" :steps="[40]">
      <p class="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quisquam odio quia esse ducimus quibusdam tempora? Similique enim voluptatem, quam asperiores, officiis placeat illo vero, velit distinctio impedit quae! Itaque quas facere voluptatem veritatis nulla fugit laborum enim, repellat similique dolore, nam amet facilis voluptates! Enim laudantium nihil incidunt accusamus? Laudantium rerum perspiciatis recusandae? Ullam assumenda dolor natus officiis suscipit ipsum asperiores sequi itaque quas. Assumenda officia, cumque quos totam cupiditate porro minima omnis id odit fugit voluptatum explicabo! Eos atque tempore id odio vero modi ad tempora similique veritatis facilis quam exercitationem ab fuga eaque accusantium, a voluptas excepturi.</p>
    </AnimatedFX>
    <AnimatedFX name="fade1" :steps="[35]">
      <p class="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quisquam odio quia esse ducimus quibusdam tempora? Similique enim voluptatem, quam asperiores, officiis placeat illo vero, velit distinctio impedit quae! Itaque quas facere voluptatem veritatis nulla fugit laborum enim, repellat similique dolore, nam amet facilis voluptates! Enim laudantium nihil incidunt accusamus? Laudantium rerum perspiciatis recusandae? Ullam assumenda dolor natus officiis suscipit ipsum asperiores sequi itaque quas. Assumenda officia, cumque quos totam cupiditate porro minima omnis id odit fugit voluptatum explicabo! Eos atque tempore id odio vero modi ad tempora similique veritatis facilis quam exercitationem ab fuga eaque accusantium, a voluptas excepturi.</p>
    </AnimatedFX>
    <AnimatedFX name="fade1" :steps="[30]">
      <p class="text-xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex quisquam odio quia esse ducimus quibusdam tempora? Similique enim voluptatem, quam asperiores, officiis placeat illo vero, velit distinctio impedit quae! Itaque quas facere voluptatem veritatis nulla fugit laborum enim, repellat similique dolore, nam amet facilis voluptates! Enim laudantium nihil incidunt accusamus? Laudantium rerum perspiciatis recusandae? Ullam assumenda dolor natus officiis suscipit ipsum asperiores sequi itaque quas. Assumenda officia, cumque quos totam cupiditate porro minima omnis id odit fugit voluptatum explicabo! Eos atque tempore id odio vero modi ad tempora similique veritatis facilis quam exercitationem ab fuga eaque accusantium, a voluptas excepturi.</p>
    </AnimatedFX>
  </main>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue';
import TextFX from "@/components/page/TextFX.vue";
import AnimatedFX from "@/components/page/AnimatedFX.vue";

export default defineComponent({
  components: {
    TextFX,
    AnimatedFX
  },
  methods: {
    makeRainbow() {
      console.log('makerainbow');
      this.$refs.mytitle.classList.add('rainbow');
      this.$refs.rainbowbtn.style.setProperty("display", "none");
    }
  },
  mounted() {
    // this.makeRainbow();
  },
  setup () {
    const viewParent = ref(null);
    provide("viewParent", viewParent);
    const mytitle = ref(null);
    
    return {
      viewParent,
      mytitle,
    }
  }
});
</script>

<style lang="scss">
  .view-container {
    // padding: 1.5em;
    .mytitlecontainer {
      border-radius: 0.5rem;

      & * {
        // transition: background-color 0.5s ease;
      }
      .mytitle {
        border-radius: 0.5rem 0.5rem 0 0;
        color: var(--secondary);
        background-color: var(--primary);
        &.rainbow {
          color: var(--danger);
          .fx {
            .fadein {
              animation: colorcycle 10s linear infinite;
              filter: hue-rotate(0deg);
            }
          }
        }
      }
      .mydesc {
        border-radius: 0 0 0.5rem 0.5rem;
        color: var(--primary);
        background-color: var(--secondary);
      }
      .rainbow-btn {
        // display: block;
        width: 25px;
        height: 25px;
        border-radius: 5px;
        background: linear-gradient(
          45deg,
          rgba(255, 0, 0, 1) 0%,
          rgba(255, 154, 0, 1) 10%,
          rgba(208, 222, 33, 1) 20%,
          rgba(79, 220, 74, 1) 30%,
          rgba(63, 218, 216, 1) 40%,
          rgba(47, 201, 226, 1) 50%,
          rgba(28, 127, 238, 1) 60%,
          rgba(95, 21, 242, 1) 70%,
          rgba(186, 12, 248, 1) 80%,
          rgba(251, 7, 217, 1) 90%,
          rgba(255, 0, 0, 1) 100%
         );
        opacity: 0;
        &:hover {
          opacity: 1;
        }

        font-size: 1rem;
      }
    }

    [class^="fade1-"] {
      transition: opacity 0.5s ease;
    }
    .fade1-default: {
      opacity: 1;
    }
    .fade1-0 {
      opacity: 0;
    }
    .fade1-1 {
      opacity: 1;
    }

    @keyframes colorcycle {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
  }

  .p1 {
      span {
        margin: -1px -1px;
        padding: 2px 1px;
        color: var(--secondary);
        background-color: var(--primary);
        animation: wave 10s ease infinite;
      }  
    }

    @keyframes wave {
      0% {
        padding: 2px 1px;
        margin: -1px -1px;
      }
      50% {
        padding: 4px 0.8px;
        margin: -2px -0.8px;
      }
      100% {
        padding: 2px 1px;
        margin: -1px -1px;
      }
    }
</style>