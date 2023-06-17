<template>
  <div class="toilets"></div>
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
  background: url("@/assets/toilets.png");
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  // opacity: 0.25;
  background-repeat: no-repeat;
}
</style>
