import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Markdown from 'vue3-markdown-it';

createApp(App).use(router, Markdown).mount("#app");
