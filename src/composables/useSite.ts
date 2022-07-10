import { reactive, readonly } from "vue";

const data = JSON.parse(
  document.getElementById("data-site")?.textContent ?? ""
);

const site = reactive(data);

/**
 * Returns the global site object
 */
export default () => readonly(site);
