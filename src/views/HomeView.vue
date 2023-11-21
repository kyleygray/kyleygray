<template>
  <div class="view-container">
    <div class="mytitlecontainer">
      <h1 class="mytitle text-8xl font-bold w-100 text-center p-2">Kyley Gray</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.view-container {
}

.mytitlecontainer {
  // position: absolute;
  // top: 2em;
  // left: 1.5em;
  // max-width: 70vw;
  // border: 2px dotted var(--primary);
  // border-radius: 0.5rem;

  & * {
    // transition: background-color 0.5s ease;
  }
  .mytitle {
    // text-shadow: 2px 2px 0px var(--accent);
    border-radius: 0.5rem 0.5rem 0 0;
    color: var(--primary);
    background-color: var(--secondary);
    &.rainbow {
      color: #ff8888;
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
}
</style>
