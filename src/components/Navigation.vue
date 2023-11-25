<template>
  <div v-show="!isMobile" class="container">
    <div class="small-nav navbox">
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
        <router-link to="/portfolio" active-class="router-link-active"
          >portfolio</router-link
        >
        <router-link to="/contact" active-class="router-link-active">contact</router-link>
      </nav>
      <!-- <nav>
        <div class="homeheadline"></div>
        <router-link class="biglink" to="/about">enter site</router-link>
      </nav> -->
      <div class="controls">
        <div class="themes">
          <ThemeButton :theme="themes.defaultTheme" />
          <ThemeButton :theme="themes.invertedTheme" />
        </div>
        <div class="accessibility">
          <div class="anispinner">
            <div><span></span></div>
          </div>
          <ToggleButton
            @click="methods.toggleAccessibility()"
            :toggleActive="state.animationsOff"
            size="2rem"
          />
        </div>
      </div>
    </div>
  </div>
  <div v-show="isMobile" class="container">
    <div class="small-nav-mobile navbox-mobile">
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
        <router-link to="/portfolio" active-class="router-link-active"
          >portfolio</router-link
        >
        <router-link to="/contact" active-class="router-link-active">contact</router-link>
      </nav>
      <!-- <nav v-show="isHome">
        <div class="homeheadline"></div>
        <router-link class="biglink" to="/about">enter site</router-link>
      </nav> -->
      <div class="controls">
        <div class="themes">
          <ThemeButton :theme="themes.defaultTheme" />
          <ThemeButton :theme="themes.invertedTheme" />
        </div>
        <div class="accessibility">
          <div class="anispinner">
            <div><span></span></div>
          </div>
          <ToggleButton
            @click="methods.toggleAccessibility()"
            :toggleActive="state.animationsOff"
            size="1.5rem"
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
  height: 100svh;
  width: 100vw;
}

.navbox {
  // min-height: 400px;
  background-color: var(--secondary);
  display: grid;
  grid-template:
    "a a a" 20%
    "b b b" 50%
    "c c c" 40%;
  // border: 1px solid var(--primary);
  max-width: 50vw;
  height: 25vh;
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

      &.biglink {
        width: 100%;
        font-size: 1.5em;
      }
    }

    display: block;
    grid-column: 1 / 4;
    grid-row: 2 / 3;
    align-self: center;
    margin: 0 30%;
    transition: margin 0.5s ease, background-color 0.5s ease;

    & > a {
      margin: 10px 0px;
      // color: var(--secondary);
      // background: var(--primary);
      // border: 1px dotted var(--primary);
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
    transform: translate(50%, 20svh);
    border-radius: 1em;

    .the-k {
      transform: translateY(-50%);
    }

    .controls {
      transform: translateY(50px);
    }
  }

  &.small-nav {
    height: 100svh;
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
  font-size: 14px;
  display: grid;
  grid-template-columns: 20% 60% 20%;
  padding: 0px 20px;
  height: 120px;
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
      max-width: 5em;
      filter: invert(0);
      transition: filter 0.5s ease;

      &.inverted {
        filter: invert(1);
      }
    }
  }

  &.big-nav-mobile {
    width: 100vw;
    transform: translateY(calc(50svh - 100px));

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
    transform: translateY(calc(100svh - 120px));

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
      height: 2.2em;
      margin-left: 2.5%;
      margin-right: 2.5%;
      margin-top: 0.1em;
      color: var(--primary);
      transition: color 0.5s ease, background-color 0.5s ease;
      padding-top: 0.2em;
      font-size: 1em;
      border: 1px dotted var(--primary);
      border-radius: 1em;
      &.router-link-active {
        background-color: var(--accent);
        color: var(--compliment);
      }
      &.biglink {
        width: 100%;
        font-size: 1.5em;
      }
    }
    transition: margin 0.5s ease, background-color 0.5s ease;

    & > * {
      margin: 0.4em 0em;
      // border: 1px dotted var(--primary);
      display: block;
      text-decoration: none;
      width: 100%;
      padding: 0.1em 0em;
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
      margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}

.anispinner {
  font-size: 10px;
  position: relative;
  width: 2em;
  margin-right: 5px;
  div {
    animation: spin 5s infinite linear;
    top: 0;
    left: 0;
    width: 2em;
    height: 2em;
    border: 1px solid var(--primary);
    border-radius: 1em;
    transform: rotate(0deg);

    span {
      animation: activate 1s infinite linear;
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(0.45em, 0.45em);
      width: 1em;
      height: 1em;
      border-radius: 1em;
      background-color: var(--primary);
    }
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(359deg);
  }
}

@keyframes activate {
  0% {
    transform: translate(0em, 0em);
  }
  100% {
    transform: translate(0em, 0em);
  }
}

.enterbtn-enter-active,
.enterbtn-leave-active {
  & > a {
    transition: opacity 0.5s ease;
  }
}
.enterbtn-enter-from {
  & > a {
    opacity: 0;
  }
}
.enterbtn-enter-to,
.enterbtn-leave-from {
  & > a {
    opacity: 1;
  }
}
.enterbtn-leave-to {
  & > a {
    opacity: 0;
  }
}

.enternav-enter-active,
.enternav-leave-active {
  & > a {
    transition: opacity 0.5s ease;
  }
}
.enternav-enter-from {
  & > a {
    opacity: 0;
  }
}
.enternav-enter-to,
.enternav-leave-from {
  & > a {
    opacity: 1;
  }
}
.enternav-leave-to {
  & > a {
    opacity: 0;
  }
}
</style>
