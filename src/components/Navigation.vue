<template>
  <nav :class="{ 'small-nav': isSmallNav }">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "NavigationComponent",
  setup() {
    const route = useRoute();
    const isSmallNav = ref(true);

    watch(
      () => route.path,
      (path) => {
        isSmallNav.value = path === "/" ? false : true;
      },
      { immediate: true }
    );

    return {
      isSmallNav,
    };
  },
});
</script>

<style lang="scss" scoped>
.small-nav {
  background: red;
}
</style>
