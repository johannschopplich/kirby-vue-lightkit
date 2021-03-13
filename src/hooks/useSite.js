import { reactive, readonly } from 'vue'

const data = JSON.parse(
  document.getElementById('data-site').textContent
)

/**
 * Reactive object for the global data
 *
 * @type {object}
 */
const site = reactive(data)

/**
 * Hook for the global `site` object
 *
 * @returns {object} Readonly `site` state
 */
export default () => readonly(site)
