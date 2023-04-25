<template>
  <div class="container">
    <div :class="{ 'small-nav': isSmallNav, 'big-nav': !isSmallNav, navbox: true }">
      <div class="myname">
        <h1>{{ myName }}</h1>
      </div>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "NavigationComponent",
  setup() {
    const route = useRoute();
    const isSmallNav = ref(true);
    const myName = ref("Kyley Gray");

    watch(
      () => route.path,
      (path) => {
        isSmallNav.value = path === "/" ? false : true;
      },
      { immediate: true }
    );

    return {
      isSmallNav,
      myName,
    };
  },
});
</script>

<style lang="scss" scoped>
// .container {
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-template-rows: repeat(4, 1fr);
//   grid-gap: 5px;
//   height: 100vh;
// }
.container {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  height: 0vh;
  width: 0vw;

  & > .big-nav {
    height: 50vh;
    width: 50vw;
    transform: translate(50%, 50%);
    border-radius: 2em;
  }

  & > .small-nav {
    height: 100vh;
    width: 25vw;
  }
}
.navbox {
  display: flex;
  border: 1px solid black;
  max-width: 50vw;
  padding: 0.5em;
  transition: all 0.5s ease;
}

// .small-nav {
//   border-radius: 0em;
//   height: 100vh;
//   grid-column: 1 / 1;
//   grid-row: 1 / 4;
// }

// .big-nav {
//   border-radius: 2em;
//   height: 50vh;
//   grid-column: 2 / 4;
//   grid-row: 2 / 4;
// }
</style>
