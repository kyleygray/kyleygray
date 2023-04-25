<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ExampleComponent",
  setup() {
    const message = ref("Hello from ExampleComponent!");

    const onClick = () => {
      console.log("Button clicked!");
    };

    return {
      message,
      onClick,
    };
  },
});
</script>

<style lang="scss" scoped>
div {
  width: 0;
  height: 0;
}
</style>
