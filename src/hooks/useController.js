import { shallowReactive, readonly } from 'vue'

const store = new Map()

/**
 * Returns controller data from either store or network
 *
 * @param {string} id The controller to retrieve
 * @returns {(object|false)} The controller's data or `false` if fetch request failed
 */
const getController = async id => {
  let page
  const url = `/controllers/${id}.json`

  if (store.has(id)) {
    return store.get(id)
  }

  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error(`Request ${url} failed with ${response.statusText}.`)
    }

    const { data } = await response.json()
    page = data
  } catch (error) {
    console.error(error)
    return false
  }

  store.set(id, page)

  return page
}

/**
 * Gets data for a given controller
 *
 * @param {string} id The controller id to retrieve
 * @returns {shallowReactive} Readonly reactive page object
 */
export default id => {
  if (!id) throw new Error('Missing argument (id).')

  // Setup page waiter promise
  let resolve
  const promise = new Promise(r => { resolve = r }) // eslint-disable-line promise/param-names

  // Setup reactive page object
  const page = shallowReactive({
    __status: 'pending',
    isReady: false,
    isReadyPromise: () => promise
  })

  ;(async () => {
    const data = await getController(id)

    if (!data) {
      page.__status = 'error'
      return
    }

    // Append page data to reactive page object
    Object.assign(page, data)

    page.__status = 'resolved'
    page.isReady = true
    resolve && resolve()
  })()

  return readonly(page)
}
