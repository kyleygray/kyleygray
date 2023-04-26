<template>
  <NavigationComponent />
  <router-view v-slot="{ Component }">
    <transition :name="activeTransition">
      <component :is="Component" />
    </transition>
  </router-view>
  <!-- <div id="ComponentView">
    <transition name="page" mode="out-in">
      <HomeView v-if="activeComponent === 'home'" />
    </transition>
    <transition name="page" mode="out-in">
      <AboutView v-if="activeComponent === 'about'" />
    </transition>
    <transition name="page" mode="out-in">
      <ProcessView v-if="activeComponent === 'process'" />
    </transition>
    <transition name="page" mode="out-in">
      <WorkView v-if="activeComponent === 'work'" />
    </transition>
    <transition name="page" mode="out-in">
      <ContactView v-if="activeComponent === 'contact'" />
    </transition>
  </div> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavigationComponent from "@/components/Navigation.vue";
import AboutView from "./views/AboutView.vue";
import ProcessView from "./views/ProcessView.vue";
import WorkView from "./views/WorkView.vue";
import ContactView from "./views/ContactView.vue";

import EventBus from "./services/eventBus";

export default defineComponent({
  components: {
    NavigationComponent,
    AboutView,
    ProcessView,
    WorkView,
    ContactView
  },
  
  setup() {
    const activeComponent = ref("home");
    const activeTransition = ref("page");

    EventBus.on("navigate", (componentName: string) => {
      activeComponent.value = componentName;
      activeTransition.value = componentName === "home" ? "slide" : "page";
    });

    return {
      activeComponent,
      activeTransition
    }
  },

});
</script>

<style lang="scss">
html,
body {
  margin: 0;
  width: 100%;
}

* {
  box-sizing: border-box;
}

#app {
  display: grid;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--primary);
}

.page-container {
  position: absolute;
  height: 100vh;
  width: calc(100% - 25vw);
  margin-left: 25vw;
  background: var(--secondary);
  overflow-x: hidden;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.7s ease;
}
.page-enter-from {
  transform: translateX(100%);
  background: var(--secondary);
}
.page-enter-to,
.page-leave-from {
  transform: translateX(0%);
  background: var(--secondary);
}
.page-leave-to {
  transform: translate(0%);
  background: var(--primary);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease;
}
.slide-leave-to,
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateX(0%);
}

</style>

