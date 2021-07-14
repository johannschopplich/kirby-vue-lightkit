import "./assets/buldy.css";
import "./index.css";

import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";

createApp(App).use(router).mount("#app");
