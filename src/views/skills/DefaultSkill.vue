<template>
  <div class="toilets"><h1>I have a degree in Computer Science</h1></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DefaultSkill",
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.toilets {
  // position: absolute;
  display: flex;
  background: url("@/assets/toilets.png");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  // opacity: 0.25;
  background-repeat: no-repeat;
  text-align: center;

  & > * {
    align-self: center;
    justify-self: center;
    text-align: center;
    font-size: 4em;
    font-family: "Rubik", sans-serif;
    font-weight: bold;
    text-shadow: 0px 2px 4px var(--primary);
    color: var(--secondary);
  }
}

@media (max-width: 767px) {
  .toilets > * {
    font-size: 3em;
  }
}
</style>
