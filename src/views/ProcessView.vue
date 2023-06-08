<template>
  <div class="view-container" ref="viewParent">
    <div class="skillselect">
      <div class="skillnav">
        <button
          @click="changeView('webdev')"
          :class="{ activebtn: activeView === 'webdev' }"
        >
          webdev
        </button>
        <button
          @click="changeView('design')"
          :class="{ activebtn: activeView === 'design' }"
        >
          design
        </button>
        <button
          @click="changeView('audio')"
          :class="{ activebtn: activeView === 'audio' }"
        >
          audio
        </button>
        <button @click="changeView('ux')" :class="{ activebtn: activeView === 'ux' }">
          ux
        </button>
        <button @click="changeView('os')" :class="{ activebtn: activeView === 'os' }">
          os
        </button>
      </div>
      <div class="skillheader">
        <div v-show="activeView === 'default'">
          <p class="text-2xl p-2 pb-0 font-extralight empty">(Select a skillset...)</p>
        </div>

        <div v-show="activeView === 'webdev'">
          <h1 class="text-2xl p-2 pb-0">Web Development &amp; Design</h1>
        </div>

        <div v-show="activeView === 'design'">
          <h1 class="text-2xl p-2 pb-0">Design &amp; Illustration</h1>
        </div>

        <div v-show="activeView === 'audio'">
          <h1 class="text-2xl p-2 pb-0">Audio &amp; Music Production</h1>
        </div>

        <div v-show="activeView === 'ux'">
          <h1 class="text-2xl p-2 pb-0">User Experience Design &amp; Prototyping</h1>
        </div>

        <div v-show="activeView === 'os'">
          <h1 class="text-2xl p-2 pb-0">Operating Systems</h1>
        </div>
      </div>
    </div>
    <div class="skillcontainer">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide, watch, onMounted, computed } from "vue";
import router from "@/router";
import useStore from "@/services/store.ts";
import AnimatedFX from "@/components/page/AnimatedFX.vue";
import ScrollFX from "@/components/page/ScrollFX.vue";

enum SkillView {
  Default = "default",
  WebDev = "webdev",
  Design = "design",
  Audio = "audio",
  UX = "ux",
  OS = "os",
}

export default defineComponent({
  components: {
    // AnimatedFX,
    // ScrollFX,
  },
  setup() {
    const viewParent = ref(null);
    provide("viewParent", viewParent);
    const devicons = ref(new Set());

    function addDevicons(el) {
      console.log(el);
      devicons.value.add(el);
    }

    const activeView = ref<SkillView>(SkillView.Default);

    const changeView = (view: SkillView) => {
      activeView.value = view;
      router.push(`/skills/${activeView.value}`);
    };

    onMounted(() => {
      activeView.value = router.currentRoute.value.name;
    });

    return {
      viewParent,
      activeView,
      changeView,
      addDevicons,
    };
  },
});
</script>

<style lang="scss">
.view-container {
  height: 100vh; // to ensure the view-container takes full viewport height
  display: flex;
  flex-direction: column; // to stack skillselect and skillcontainer vertically

  & * {
    transition: background-color 0.5s ease, box-shadow 0.5s ease;
  }

  .skillselect {
    flex-basis: 10%; // to allocate 10% of the height to skillselect
    display: flex; // to align buttons in a row
    flex-wrap: wrap;
    justify-content: flex-start; // to provide equal space around the buttons
    align-items: center; // to center align the buttons vertically
    background-color: var(--secondary);
    padding: 1em;
    padding-left: 0;
    margin-left: 0;
    box-shadow: -11px 2px 0px 2px var(--accent);
    border-left: 1px dotted var(--primary);
    border-bottom: 1px dotted var(--primary);

    & > * {
      width: 100%;
    }

    button {
      padding: 0.3em;
      margin: 0px 10px;
      margin-bottom: 10px;
      border: 1px dotted var(--primary);
      border-radius: 0.8em;
      min-width: 80px;
      cursor: pointer;
      transition: background-color 0.5s ease;

      &.activebtn {
        border-color: var(--accent);
        background-color: var(--accent);
      }
    }
  }

  .skillcontainer {
    flex-basis: 90%; // to allocate 90% of the height to skillcontainer
    overflow: auto; // to enable scroll if content height exceeds the container height

    & > div {
      padding: 1em;
      padding-left: 0;
    }
  }

  .devicons {
    font-size: 3em;
    display: flex;
    margin: 0.5em 0;
    flex-wrap: wrap;

    i {
      // $delay-time: 0.3s;

      // @for $i from 1 through 10 {
      //   &:nth-child(#{$i}) {
      //     transition-delay: $delay-time * $i !important;
      //   }
      // }

      margin: 0.1em;
      position: relative;
      display: flex;
      width: object-fit;
      max-width: 50px;
      margin: 0.2em;

      &::after {
        content: attr(data-name);
        display: block;
        text-align: center;
        position: absolute;
        font-size: 0.2em;
        left: 0;
        right: 0;
        bottom: -1.5em;
        font-family: "Inconsolata", monospace;
        font-style: initial;
      }
    }
  }

  .skillheader p {
    margin-top: 10px;
    // border-left: 5px double var(--primary);
    padding-left: 0.5em;

    &.empty {
      border: 0;
    }
  }

  .icons-enter-active,
  .icons-leave-active {
    transition-property: opacity;
    transition-duration: 0.5s;
    transition-timing-function: ease;
    .devicons {
      transition-property: opacity;
      transition-duration: 0.5s;
      transition-timing-function: ease;
    }
  }
  .icons-enter-from {
    .devicons {
      opacity: 0;
    }
  }
  .icons-enter-to,
  .icons-leave-from {
    .devicons {
      opacity: 1;
    }
  }
  .icons-leave-to {
    transition-property: opacity;
    transition-duration: 0s;
    transition-timing-function: ease;
    .devicons {
      transition-property: opacity;
      transition-duration: 0s;
      transition-timing-function: ease;
      opacity: 1;
    }
  }
}
</style>
