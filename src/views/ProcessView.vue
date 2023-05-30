<template>
  <div class="view-container" ref="viewParent">
    <div class="skillselect">
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
      <button @click="changeView('audio')" :class="{ activebtn: activeView === 'audio' }">
        audio
      </button>
      <button @click="changeView('ux')" :class="{ activebtn: activeView === 'ux' }">
        ux
      </button>
      <button @click="changeView('os')" :class="{ activebtn: activeView === 'os' }">
        os
      </button>
    </div>
    <div class="skillcontainer">
      <div v-show="activeView === 'default'">
        <p class="text-3xl font-extralight">(Select a skillset...)</p>
      </div>

      <div v-show="activeView === 'webdev'">
        <p class="text-3xl">Web Development &amp; Design</p>
      </div>

      <div v-show="activeView === 'design'">
        <p class="text-3xl">Design &amp; Illustration</p>
      </div>

      <div v-show="activeView === 'audio'">
        <p class="text-3xl">Audio &amp; Music Production</p>
      </div>

      <div v-show="activeView === 'ux'">
        <p class="text-3xl">User Experience Design</p>
      </div>

      <div v-show="activeView === 'os'">
        <p class="text-3xl">Operating Systems</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import AnimatedFX from "@/components/page/AnimatedFX.vue";
import ScrollFX from "@/components/page/ScrollFX.vue";

type SkillView = "default" | "webdev" | "design" | "audio" | "ux" | "os";

export default defineComponent({
  components: {
    AnimatedFX,
    ScrollFX,
  },
  setup() {
    const viewParent = ref(null);
    provide("viewParent", viewParent);

    const activeView = ref<SkillView>("default");

    const changeView = (view: SkillView) => {
      activeView.value = view;
    };

    return {
      viewParent,
      activeView,
      changeView,
    };
  },
});
</script>

<style lang="scss" scoped>
.view-container {
  height: 100vh; // to ensure the view-container takes full viewport height
  display: flex;
  flex-direction: column; // to stack skillselect and skillcontainer vertically

  .skillselect {
    flex-basis: 10%; // to allocate 10% of the height to skillselect
    display: flex; // to align buttons in a row
    flex-wrap: wrap;
    justify-content: flex-start; // to provide equal space around the buttons
    align-items: center; // to center align the buttons vertically

    button {
      padding: 0.5em;
      margin: 0px 10px;
      margin-bottom: 10px;
      border: 1px dotted var(--primary);
      border-radius: 1em;
      min-width: 100px;
      cursor: pointer;
      transition: background-color 0.5s ease;

      &.activebtn {
        background-color: var(--accent);
      }
    }
  }

  .skillcontainer {
    flex-basis: 90%; // to allocate 90% of the height to skillcontainer
    overflow: auto; // to enable scroll if content height exceeds the container height

    div {
      padding: 1em;
    }
  }
}
</style>
