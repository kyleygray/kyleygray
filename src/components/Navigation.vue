<template>
  <div class="container">
    <div :class="{ 'small-nav': isSmallNav, 'big-nav': !isSmallNav, navbox: true}">
      <router-link class="my-name" to="/"><h1>{{ myName }}</h1></router-link>
      <nav>
        <router-link to="/about">about</router-link>
        <router-link to="/process">process</router-link>
        <router-link to="/work">work</router-link>
        <router-link to="/contact">contact</router-link>
      </nav>
      <div class="controls">
        <ThemeButton :theme="themes.defaultTheme" name="Default" />
        <ThemeButton :theme="themes.invertedTheme" name="Inverted" />
        <ToggleButton @click="methods.toggleAccessibility()" :toggleActive="state.animationsOff" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useRoute } from "vue-router";

import ToggleButton from "@/components/ToggleButton.vue";
import ThemeButton from "@/components/ThemeButton.vue";

import useStore from "../services/store";
import useThemes from "../services/themes";

export default defineComponent({
  name: "NavigationComponent",
  components: {
    ToggleButton,
    ThemeButton
  },
  setup() {
    const { state, methods } = useStore();
    const themes = useThemes();
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
      themes,
      state,
      methods,
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
}

.navbox {
  background: var(--secondary);
  display: grid;
  grid-template:
  "a a a" 20%
  "b b b" 40%
  "c c c" 40%;
  // border: 1px solid var(--primary);
  max-width: 50vw;
  height: 50vh;
  transform: translate(0%, 0%);
  padding: 0.5em;
  transition-property: transform, height, width, margin, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;
}

nav {
  a {
    color: var(--primary);
    transition: color 0.5s ease, background-color 0.5s ease;

    &.router-link-exact-active {
      background-color: var(--accent);
      color: var(--primary);
    }
  }

  display: block;
  grid-column: 1 / 4;
  grid-row: 2 / 3;
  align-self: center;
  margin: 0 30%;
  transition: margin 0.5s ease, background-color 0.5s ease;

  & > * {
    margin: 10px 0px;
    // color: var(--secondary);
    // background: var(--primary);
    border: 1px dotted var(--primary);
    border-radius: 1em;
    display: block;
    text-decoration: none;
    width: 100%;
    padding: 3px 0px;
  }
}

.my-name {
  grid-row: 1;
  grid-column: 1 / 4;
  align-self: end;
  text-decoration: none;
  color: inherit;
  transition: color 0.5s ease;
}

.controls {
  display: flex;
  grid-row: 3;
  grid-column: 1 / 4;
  align-self: start;

  button {
    display: block;
    height: 30px;
  }
}

.big-nav {
  height: 50vh;
  width: 50vw;
  transform: translate(50%, 50%);
  border-radius: 1em;
}

.small-nav {
  height: 100vh;
  width: 25vw;
  transform: translate(0%, 0%);
  border-radius: 0em;
  border: 0;
  // border-right: 1px dotted var(--accent);

  & > nav {
    margin: 0 20%;
  }
}

</style>
