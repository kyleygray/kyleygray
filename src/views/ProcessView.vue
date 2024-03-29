<template>
  <div class="view-container skill-view" ref="viewParent">
    <div class="skillselect">
      <div class="skillnav">
        <button
          @click="changeView('webdev', viewParent)"
          :class="{ activebtn: activeView === 'webdev' }"
        >
          webdev
        </button>
        <button
          @click="changeView('design', viewParent)"
          :class="{ activebtn: activeView === 'design' }"
        >
          design
        </button>
        <button
          @click="changeView('audio', viewParent)"
          :class="{ activebtn: activeView === 'audio' }"
        >
          audio
        </button>
        <button
          @click="changeView('ux', viewParent)"
          :class="{ activebtn: activeView === 'ux' }"
        >
          ux
        </button>
        <button
          @click="changeView('os', viewParent)"
          :class="{ activebtn: activeView === 'os' }"
        >
          os
        </button>
        <!-- <button
          @click="changeView('ai', viewParent)"
          :class="{ activebtn: activeView === 'ai', hidebtn: true }"
        >
          ai
        </button> -->
      </div>
      <div class="skillheader">
        <div v-if="activeView === 'default'">
          <h1 class="md:text-3xl sm:text-xl font-thin">
            <TextFX text="(select a skillset)" type="fadein" speed="30" />
          </h1>
        </div>

        <div v-if="activeView === 'webdev'">
          <h1 class="md:text-3xl sm:text-xl pb-0">
            <TextFX text="Web Development &amp; Design" type="fadein" speed="30" />
          </h1>
        </div>

        <div v-if="activeView === 'design'">
          <h1 class="md:text-3xl sm:text-xl pb-0">
            <TextFX text="Design &amp; Illustration" type="fadein" speed="30" />
          </h1>
        </div>

        <div v-if="activeView === 'audio'">
          <h1 class="md:text-3xl sm:text-xl pb-0">
            <TextFX text="Audio &amp; Music Production" type="fadein" speed="30" />
          </h1>
        </div>

        <div v-if="activeView === 'ux'">
          <h1 class="md:text-3xl sm:text-xl pb-0">
            <TextFX
              text="User Experience Design &amp; Prototyping"
              type="fadein"
              speed="30"
            />
          </h1>
        </div>

        <div v-if="activeView === 'os'">
          <h1 class="md:text-3xl sm:text-xl pb-0">
            <TextFX
              text="Operating Systems &amp; Information Technology"
              type="fadein"
              speed="30"
            />
          </h1>
        </div>

        <div v-if="activeView === 'ai'">
          <h1 class="md:text-3xl sm:text-xl pb-0">
            <TextFX text="Artificial Intelligence" type="fadein" speed="30" />
          </h1>
        </div>
      </div>
    </div>
    <div class="skillcontainer">
      <router-view v-slot="{ Component }">
        <transition name="skill">
          <component :is="Component" />
        </transition>
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
import TextFX from "@/components/page/TextFX.vue";

enum SkillView {
  Default = "default",
  WebDev = "webdev",
  Design = "design",
  Audio = "audio",
  UX = "ux",
  OS = "os",
  AI = "ai",
}

export default defineComponent({
  components: {
    // AnimatedFX,
    // ScrollFX,
    TextFX,
  },
  setup() {
    const viewParent = ref(null);
    const skillSelect = ref(null);
    provide("viewParent", viewParent);
    const devicons = ref(new Set());

    function addDevicons(el) {
      console.log(el);
      devicons.value.add(el);
    }

    const activeView = ref<SkillView>(SkillView.Default);

    const changeView = (view: SkillView, viewParent) => {
      //TODO: Fix the jerking bug
      activeView.value = view;
      router.push(`/skills/${activeView.value}`);
    };

    onMounted(() => {
      activeView.value = router.currentRoute.value.name;
    });

    return {
      viewParent,
      skillSelect,
      activeView,
      changeView,
      addDevicons,
    };
  },
});
</script>

<style lang="scss">
.skill-view {
  display: flex;
  flex-direction: column; // to stack skillselect and skillcontainer vertically
  padding: 1em;
}
.view-container {
  // height: 100svh; // to ensure the view-container takes full viewport height

  & * {
    transition: background-color 0.5s ease, box-shadow 0.5s ease;
  }

  .skillselect {
    transform: translateX(0%);
    opacity: 1;
    // flex-basis: 10%; // to allocate 10% of the height to skillselect
    // display: flex; // to align buttons in a row
    flex-wrap: wrap;
    justify-content: flex-start; // to provide equal space around the buttons
    align-items: center; // to center align the buttons vertically
    background-color: var(--secondary);
    // padding: 1em;
    padding-left: 0;
    margin-left: 0;
    // margin-top: 10px;
    box-shadow: -11px 2px 0px 2px var(--accent);
    border-left: 1px dotted var(--primary);
    border-bottom: 1px dotted var(--primary);

    & > * {
      // width: 100%;
    }
    .skillnav {
      display: flex;
      width: 100%;
      // max-width: 767px;
      justify-content: center;
      // background-color: var(--accent);
      padding-top: 5px;
      padding-bottom: 5px;

      button {
        width: calc(80% / 5 - 5px);
        font-size: 1em;
        min-width: 2em;
        padding: 0.6em;
        margin: 0em 0.2em;
        border: 1px dotted var(--primary);
        background-color: var(--primary);
        color: var(--secondary);
        border-radius: 0.4em;
        cursor: pointer;
        transition: background-color 0.5s ease, opacity 0.5s ease;

        &.hidebtn {
          opacity: 0;
          &:hover {
            opacity: 1;
          }
        }
        &.activebtn {
          border: 1px dotted var(--primary);
          color: var(--primary);
          // border-color: var(--accent);
          background-color: var(--accent);
          opacity: 1;
        }

        @media (max-width: 480px) {
          font-size: 12px;
          width: calc(100% / 5 - 5px);
        }
      }
    }
    .skillheader {
      padding: 0.5em;
    }
  }

  .skillcontainer {
    position: relative;
    flex-basis: 100%; // to allocate 90% of the height to skillcontainer
    overflow-x: hidden; // to enable scroll if content height exceeds the container height
    // padding: 1em;
    // overflow-y: scroll;
    // max-width: 767px;

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
      position: relative;
      display: flex;
      width: object-fit;
      max-width: 50px;
      margin: 0.2em;

      img {
        max-width: 50px;
        width: 1em;
      }

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

  .token-container {
    padding-top: 0.5em;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0.5em 0em;

    & > * {
    }
  }

  .skill-enter-active,
  .skill-leave-active {
    position: absolute;
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .skill-enter-from {
    opacity: 0;
    transform: translateX(-10%);
    // margin-top: -40px;
  }
  .skill-enter-to,
  .skill-leave-from {
    opacity: 1;
    transform: translateX(0%);
    // margin-top: 0px;
  }
  .skill-leave-to {
    // position: absolute;
    transform: translateX(10%);
    opacity: 0;
  }
}

@media (max-width: 767px) {
  .skillheader {
    p {
      font-size: 16px;
    }
  }
  .devicons i {
    font-size: 0.6em;
  }
}

@keyframes icons {
  0% {
    margin-right: 0px;
  }
  50% {
    margin-right: -20px;
  }
  100% {
    margin-right: 0px;
  }
}
</style>
