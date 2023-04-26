<template>
  <NavigationComponent />
  <router-view v-slot="{ Component }">
    <!-- <transition name="page"> -->
      <component :is="Component" />
    <!-- </transition> -->
  </router-view>
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

.page-container {
  height: 100vh;
  width: calc(100% - 25vw);
  margin-left: 25vw;
  background: var(--primary);
  overflow-x: hidden;
  // opacity: 1;
}

.page-enter-active,
.page-leave-active {
  transition: all 1s ease;
}
.page-leave-to,
.page-enter-from {
  opacity: 0;
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
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
