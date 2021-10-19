import "./assets/buldy.css";
import "./index.css";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

for (const m of Object.values(import.meta.globEager("./modules/*.js"))) {
  m.install?.(app);
}

app.mount("#app");
