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
import AISkill from "@/views/skills/AISkill.vue";

import EventBus from "@/services/eventBus";

import useStore from "@/services/store";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: AboutView,
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: AboutView,
  // },
  {
    path: "/skills",
    name: "skills",
    component: ProcessView,
    children: [
      { path: "webdev", name: "webdev", component: WebDevSkill },
      { path: "design", name: "design", component: DesignSkill },
      { path: "audio", name: "audio", component: AudioSkill },
      { path: "ux", name: "ux", component: UXSkill },
      { path: "os", name: "os", component: OSSkill },
      { path: "ai", name: "ai", component: AISkill },
      { path: "", name: "default", component: DefaultSkill },
      { path: ":pathmatch(.*)*", redirect: "/skills" },
    ],
  },
  {
    path: "/projects",
    name: "projects",
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
