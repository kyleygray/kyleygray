<template>
  <NavigationComponent />
  <PageHandler />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavigationComponent from "@/components/Navigation.vue";
import PageHandler from "@/components/PageHandler.vue";

import EventBus from "./services/eventBus";
import useStore from "./services/store";

export default defineComponent({
  components: {
    NavigationComponent,
    PageHandler,
  },
  
  setup() {

    return {
      
    }
  },

});
</script>

<style lang="scss">

html,
body {
  margin: 0;
  width: 100%;
  background-color: var(--background);
  transition: background-color 0.5s ease;
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
  color: var(--primary);
}

</style>

