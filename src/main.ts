import { createApp } from "vue";
import routes from "virtual:generated-pages";
import App from "./App.vue";
import type { UserModule } from "./types";

import "@unocss/reset/tailwind.css";
import "./styles/index.css";
import "uno.css";

const app = createApp(App);

// Install all modules from `./modules/`
for (const m of Object.values(
  import.meta.glob<{ install?: UserModule }>("./modules/*.ts", {
    eager: true,
  })
)) {
  m.install?.({ app, routes });
}

app.mount("#app");
