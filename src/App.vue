<template>
  <NavigationComponent />
  <router-view />
</template>

<style lang="scss">
html,
body {
  margin: 0;
  width: 100%;
}

* {
  box-sizing: border-box;
}

#app {
  display: grid;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
<script lang="ts">
import { defineComponent } from "vue";
import NavigationComponent from "@/components/Navigation.vue";

export default defineComponent({
  components: {
    NavigationComponent,
  },
});
</script>
