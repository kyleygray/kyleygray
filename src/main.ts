import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import useStore from "./services/store";

createApp(App).use(router).mount("#app");

const initialRouteName = router.currentRoute.value.name?.toString() || "Error";
useStore().methods.setActiveComponent(initialRouteName);
