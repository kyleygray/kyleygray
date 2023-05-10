import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import useStore from './services/store';

import Markdown from 'vue3-markdown-it';
const initialRouteName = router.currentRoute.value.name?.toString() || 'Error';
useStore().methods.setActiveComponent(initialRouteName);

createApp(App).use(router, Markdown).mount("#app");
