import { reactive, readonly } from 'vue'

const data = JSON.parse(
  document.getElementById('data-site').textContent
)

const site = reactive(data)

/**
 * Gets the global site object
 *
 * @returns {object} Readonly site object
 */
export default () => readonly(site)
