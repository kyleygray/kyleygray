import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProcessView from "../views/ProcessView.vue";
import WorkView from "../views/WorkView.vue";
import ContactView from "../views/ContactView.vue";

import EventBus from "../services/eventBus";

import useStore from "../services/store";

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
