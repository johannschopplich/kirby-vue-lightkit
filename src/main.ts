import generatedRoutes from "virtual:generated-pages";
import { setupLayouts } from "virtual:generated-layouts";

import "virtual:windi-base.css";
import "virtual:windi-components.css";

// Your custom styles here
import "./styles/index.css";

import "virtual:windi-utilities.css";
import "virtual:windi-devtools";

import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);
const routes = setupLayouts(generatedRoutes);

for (const m of Object.values(import.meta.globEager("./modules/*.ts"))) {
  m.install?.({ app, routes });
}

app.mount("#app");
