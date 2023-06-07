import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProcessView from "@/views/ProcessView.vue";
import WorkView from "@/views/WorkView.vue";
import ContactView from "@/views/ContactView.vue";

import DefaultSkill from "@/views/skills/DefaultSkill.vue";
import WebDevSkill from "@/views/skills/WebDevSkill.vue";
import DesignSkill from "@/views/skills/DesignSkill.vue";
import AudioSkill from "@/views/skills/AudioSkill.vue";
import UXSkill from "@/views/skills/UXSkill.vue";
import OSSkill from "@/views/skills/OSSkill.vue";

import EventBus from "@/services/eventBus";

import useStore from "@/services/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/skills",
    name: "skills",
    component: ProcessView,
    children: [
      { path: "webdev", name: "webdevskill", component: WebDevSkill },
      { path: "design", name: "Designskill", component: DesignSkill },
      { path: "audio", name: "audioskill", component: AudioSkill },
      { path: "ux", name: "uxskill", component: UXSkill },
      { path: "os", name: "osskill", component: OSSkill },
      { path: "", name: "defaultskill", component: DefaultSkill },
    ],
  },
  {
    path: "/experience",
    name: "experience",
    component: WorkView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, _, next) => {
  useStore().methods.setActiveComponent(to.name?.toString() || "error");
  next();
});

export default router;
