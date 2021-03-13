import { shallowReactive, readonly } from 'vue'

const store = new Map()

/**
 * Retrieve data of a controller from either store or network
 *
 * @param {string} id The controller id to retrieve
 * @returns {object|false} The controller's data or `false` if fetch request failed
 */
const getPage = async id => {
  let page

  if (store.has(id)) {
    return store.get(id)
  }

  try {
    const response = await fetch(`/controllers/${id}.json`)

    if (!response.ok) {
      throw new Error(`The request failed with response error "${response.statusText}".`)
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
 * Hook to get data for a given controller
 *
 * @param {string} id The controller id to retrieve
 * @returns {shallowReactive} Readonly reactive page object
 */
export default id => {
  if (!id) {
    throw new Error('Missing id parameter.')
  }

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
    const data = await getPage(id)

    if (!data) {
      page.__status = 'error'
      console.error('Couldn\'t fetch data for:', id)
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
