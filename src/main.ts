import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import useStore from './services/store';

import Markdown from 'vue3-markdown-it';

createApp(App).use(router, Markdown).mount("#app");

const initialRouteName = router.currentRoute.value.name?.toString() || 'Error';
useStore().methods.setActiveComponent(initialRouteName);