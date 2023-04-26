<template>
  <div class="container">
    <div :class="{ 'small-nav': isSmallNav, 'big-nav': !isSmallNav, navbox: true }">
      <router-link class="my-name" to="/"><h1>{{ myName }}</h1></router-link>
      <nav>
        <router-link to="/about">about</router-link>
        <router-link to="/process">process</router-link>
        <router-link to="/work">work</router-link>
        <router-link to="/contact">contact</router-link>
      </nav>
      <div class="socials">
        <p>Social Media</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";
import { changeTheme } from "../services/themeService";
import * as themes from "../services/themes";

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
      changeTheme,
      themes
    };
  },
});
</script>

<style lang="scss" scoped>

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
    transform: translate(0%, 0%);
    border-radius: 0em;
  }
}

.navbox {
  background: var(--secondary);
  display: grid;
  grid-template:
  "a a a" 33%
  ". b ." 33%
  ". c ." 33%;
  border: 1px solid black;
  max-width: 50vw;
  height: 50vh;
  transform: translate(0%, 0%);
  padding: 0.5em;
  transition: all 0.5s ease;
  transition-property: transform, height, width;
  transition-delay: 1ms;
}

nav {
  a {
    // font-weight: bold;
    color: var(--primary);

    &.router-link-exact-active {
      color: var(--accent);
    }
  }

  display: block;
  grid-column: 2;
  grid-row: 2 / 3;
  align-self: center;

  & > * {
    margin: 10px 0px;
    border: 1px solid black;
    border-radius: 1em;
    display: block;
    text-decoration: none;
    width: 100%;
  }
}

.my-name {
  grid-row: 1;
  grid-column: 1 / 4;
  align-self: end;
  text-decoration: none;
  color: inherit;
}

.socials {
  grid-row: 3;
  grid-column: 2 / 3;
  align-self: start;
}
</style>
