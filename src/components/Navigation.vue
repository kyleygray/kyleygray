<template>
  <div v-show="!isMobile" class="container">
    <div :class="{ 'small-nav': !isHome, 'big-nav': isHome, 'navbox': true}">
      <router-link class="my-K" to="/">
        <img ref="theK" :class="{ 'the-k': true, 'inverted': inverted }" src="@/assets/kline.png" alt="K">
      </router-link>
      <nav>
        <router-link to="/about">about</router-link>
        <router-link to="/process">process</router-link>
        <router-link to="/work">work</router-link>
        <router-link to="/contact">contact</router-link>
      </nav>
      <div class="controls">
        <div class="themes">
          <ThemeButton @click="toggleInversion(themes.defaultTheme)" :theme="themes.defaultTheme" />
          <ThemeButton @click="toggleInversion(themes.invertedTheme)" :theme="themes.invertedTheme" />
        </div>
        <div class="accessibility">
          <ToggleButton @click="methods.toggleAccessibility()" :toggleActive="state.animationsOff" label="animations" />
        </div>
      </div>
    </div>
  </div>
  <div v-show="isMobile" class="container">
    <div :class="{ 'small-nav-mobile': !isHome, 'big-nav-mobile': isHome, 'navbox-mobile': true}">
      <router-link class="my-K" to="/">
        <img ref="theK" :class="{ 'the-k': true, 'inverted': inverted }" src="@/assets/kline.png" alt="K">
      </router-link>
      <nav>
        <router-link to="/about">about</router-link>
        <router-link to="/process">process</router-link>
        <router-link to="/work">work</router-link>
        <router-link to="/contact">contact</router-link>
      </nav>
      <div class="controls">
        <div class="themes">
          <ThemeButton @click="toggleInversion(themes.defaultTheme)" :theme="themes.defaultTheme" />
          <ThemeButton @click="toggleInversion(themes.invertedTheme)" :theme="themes.invertedTheme" />
        </div>
        <div class="accessibility">
          <ToggleButton @click="methods.toggleAccessibility()" :toggleActive="state.animationsOff" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, inject, computed, onMounted } from "vue";

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
    const isHome = ref(true);
    const { isMobile } = inject("mobileHelper");
    const myName = ref("KG");
    const theK = ref(null);

    const inverted = ref(false);

    watch(
      () => state.activeComponent,
      (activeComponent) => {
        isHome.value = activeComponent === "home";
      },
      {immediate: true},
    )

    // onMounted(() => {
    //   theK.value.classList.add("inverted");
    // })

    //TODO make this reactive to the theme

    function toggleInversion(theme: themes.Theme) {
      console.log(theme.inverted);
      inverted.value = theme.inverted;
    }

    return {
      isHome,
      myName,
      themes,
      state,
      methods,
      isMobile,
      theK,
      toggleInversion,
      inverted
    };
  },
});
</script>

<style lang="scss" scoped>



.container {
  display: block;
  position: relative;
  left: 0;
  top: 0;
  height: 0vh;
  width: 0vw;
}

.navbox {
  min-height: 400px;
  background-color: var(--secondary);
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

  .the-k {
    height: 60px;
    filter: invert(0);
    transition: filter 0.5s ease;
  }
  .the-k.inverted {
    filter: invert(1);
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

  .my-K {
    grid-row: 1;
    grid-column: 1 / 4;
    align-self: center;
    text-decoration: none;
    color: inherit;
    transition: color 0.5s ease;
  }

  .controls {
    margin-top: 50px;
    display: grid;
    grid-row: 3;
    grid-column: 1 / 4;
    align-self: start;

    .label {
      margin: 5px;
    }

    .themes {
      grid-row: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      height: fit-content;
      margin: 5px 0px;
    }

    .accessibility {
      margin: 5px 0px;
      grid-row: 2;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }

  }
  
  &.big-nav {
    height: 50vh;
    width: 50vw;
    transform: translate(50%, 50%);
    border-radius: 1em;
  }

  &.small-nav {
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
  
}

.navbox-mobile {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  padding: 0px 20px;
  height: 20vh;

  &.big-nav-mobile {
    width: 100vw;
    transform: translateY(200%);
  }

  &.small-nav-mobile {
    width: 100vw;
    transform: translateY(400%);

    & > nav {
      
    }
  }

  .my-K {
    text-decoration: none;
    color: inherit;
    transition: color 0.5s ease;
    align-self: center;

    .the-k {
      height: auto;
      width: 100%;
      max-width: 100px;
      filter: invert(0);
      transition: filter 0.5s ease;

      &.inverted {
        filter: invert(1);
      }

    }
  }

  nav {
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    a {
      width: 42.5%;
      height: calc(25vh / 5);
      margin-left: 2.5%;
      margin-right: 2.5%;
      margin-top: 5px;
      color: var(--primary);
      transition: color 0.5s ease, background-color 0.5s ease;
      padding-top: 6px;
      font-size: 1.1em;
      &.router-link-exact-active {
        background-color: var(--accent);
        color: var(--primary);
      }
    }
    transition: margin 0.5s ease, background-color 0.5s ease;

    & > * {
      margin: 10px 0px;
      // color: var(--secondary);
      // background: var(--primary);
      border: 1px dotted var(--primary);
      border-radius: 1rem;
      display: block;
      text-decoration: none;
      width: 100%;
      padding: 3px 0px;
    }
  }

  .controls {
    align-self: center;

    .label {
      
    }

    .themes {
      display: flex;
      justify-content: center;
    }

    .accessibility {
     
    }

  }

}

</style>
