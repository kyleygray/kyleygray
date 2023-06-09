<template>
  <div v-show="!isMobile" class="container">
    <div :class="{ 'small-nav': !isHome, 'big-nav': isHome, navbox: true }">
      <router-link class="my-K" to="/">
        <img
          ref="theK"
          :class="{ 'the-k': true, inverted: inverted }"
          src="@/assets/kline.png"
          alt="K"
        />
      </router-link>
      <nav>
        <router-link to="/about" active-class="router-link-active">about</router-link>
        <router-link to="/skills" active-class="router-link-active">skills</router-link>
        <router-link to="/experience" active-class="router-link-active"
          >experience</router-link
        >
        <router-link to="/contact" active-class="router-link-active">contact</router-link>
      </nav>
      <div class="controls">
        <div class="themes">
          <ThemeButton :theme="themes.defaultTheme" />
          <ThemeButton :theme="themes.invertedTheme" />
        </div>
        <div class="accessibility">
          <ToggleButton
            @click="methods.toggleAccessibility()"
            :toggleActive="state.animationsOff"
            label="⌇"
            size="2rem"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-show="isMobile" class="container">
    <div
      :class="{
        'small-nav-mobile': !isHome,
        'big-nav-mobile': isHome,
        'navbox-mobile': true,
      }"
    >
      <router-link class="my-K" to="/">
        <img
          ref="theK"
          :class="{ 'the-k': true, inverted: inverted }"
          src="@/assets/kline.png"
          alt="K"
        />
      </router-link>
      <nav>
        <router-link to="/about" active-class="router-link-active">about</router-link>
        <router-link to="/skills" active-class="router-link-active">skills</router-link>
        <router-link to="/experience" active-class="router-link-active"
          >experience</router-link
        >
        <router-link to="/contact" active-class="router-link-active">contact</router-link>
      </nav>
      <div class="controls">
        <div class="themes">
          <ThemeButton :theme="themes.defaultTheme" />
          <ThemeButton :theme="themes.invertedTheme" />
        </div>
        <div class="accessibility">
          <ToggleButton
            @click="methods.toggleAccessibility()"
            :toggleActive="state.animationsOff"
            label="⌇"
            size="2rem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, inject } from "vue";

import ToggleButton from "@/components/ToggleButton.vue";
import ThemeButton from "@/components/ThemeButton.vue";

import useStore from "../services/store";
import useThemes from "../services/themes";

import ResumeBtn from "@/components/page/ResumeBtn.vue";

export default defineComponent({
  name: "NavigationComponent",
  components: {
    ToggleButton,
    ThemeButton,
  },
  setup() {
    const { state, methods } = useStore();
    const themes = useThemes();
    const isHome = ref(true);
    const { isMobile } = inject("mobileHelper");
    const theK = ref(null);
    const inverted = ref(false);

    watch(
      () => state.activeComponent,
      (activeComponent) => {
        isHome.value = activeComponent === "home";
      },
      { immediate: true }
    );

    watch(
      () => state.theme,
      (theme) => {
        inverted.value = theme.inverted; // Access `inverted` directly from `newVal`
      },
      { immediate: true } // this makes the watcher fire immediately upon setup
    );

    return {
      isHome,
      themes,
      state,
      methods,
      isMobile,
      theK,
      inverted,
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
  height: 100vh;
  width: 100vw;
}

.navbox {
  min-height: 400px;
  background-color: var(--secondary);
  display: grid;
  grid-template:
    "a a a" 15%
    "b b b" 55%
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
    height: 100px;
    filter: invert(0);
    transition: filter 0.5s ease, transform 0.5s ease;
  }
  .the-k.inverted {
    filter: invert(1);
  }

  nav {
    a {
      text-align: center;
      height: 35px;
      padding-top: 5px;
      color: var(--primary);
      transition: color 0.5s ease, background-color 0.5s ease;

      &.router-link-active {
        border-color: var(--accent);
        background-color: var(--accent);
        color: var(--compliment);
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
    justify-self: center;
    text-decoration: none;
    color: inherit;
  }

  .controls {
    // margin-top: 50px;
    display: grid;
    grid-row: 3;
    grid-column: 1 / 4;
    align-self: start;
    transition: transform 0.5s ease;

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
      grid-row: 2;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  &.big-nav {
    height: 50vh;
    width: 50vw;
    transform: translate(50%, 20vh);
    border-radius: 1em;

    .the-k {
      transform: translateY(-50%);
    }

    .controls {
      transform: translateY(50px);
    }
  }

  &.small-nav {
    height: 100vh;
    width: 20vw;
    transform: translate(0%, 0%);
    border-radius: 0em;
    border: 0;

    & > nav {
      margin: 0 20%;
    }

    .the-k {
      transform: translateY(0%);
    }
  }
}

.navbox-mobile {
  display: grid;
  grid-template-columns: 20% 60% 20%;
  padding: 0px 20px;
  height: 150px;
  transition-property: transform, background-color;
  transition-duration: 0.5s;
  transition-timing-function: ease;

  .my-K {
    text-decoration: none;
    color: inherit;
    transition: color 0.5s ease;
    align-self: center;
    transform: translate(0%, 0%);
    transition: transform 0.5s ease;

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

  &.big-nav-mobile {
    width: 100vw;
    transform: translateY(calc(50vh - 100px));

    .my-K {
      text-align: center;
      transform: translate(200%, -125%);
      width: 100%;

      .the-k {
        width: 100px;
        max-width: 100px;
      }
    }

    .controls {
      transform: translate(-200%, 150%);
    }
  }

  &.small-nav-mobile {
    width: 100vw;
    transform: translateY(calc(100vh - 150px));

    & > nav {
    }

    .my-K {
      transform: scale(80%) translateY(-20px);
    }
  }

  nav {
    align-self: center;
    display: flex;
    flex-wrap: wrap;
    min-width: 150px;
    a {
      text-align: center;
      width: 42.5%;
      height: 50px;
      margin-left: 2.5%;
      margin-right: 2.5%;
      margin-top: 5px;
      color: var(--primary);
      transition: color 0.5s ease, background-color 0.5s ease;
      padding-top: 10px;
      font-size: 1.1em;
      &.router-link-active {
        background-color: var(--accent);
        color: var(--compliment);
      }
    }
    transition: margin 0.5s ease, background-color 0.5s ease;

    & > * {
      margin: 10px 0px;
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
    transform: translate(0%, 0%);
    transition: transform 0.5s ease;

    .themes {
      display: flex;
      justify-content: center;
    }

    .accessibility {
    }
  }
}

.inverted-btn {
}
</style>
