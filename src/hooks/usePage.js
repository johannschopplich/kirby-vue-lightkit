import { shallowReactive } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Map to store pages in
 *
 * @constant {Map}
 */
const pages = new Map()

/**
 * Retrieve data of a page by id from either store or network
 *
 * @param {string} id Page id to retrieve
 * @returns {object|false} The page's data or `false` if fetch request failed
 */
const getPage = async id => {
  let page

  if (pages.has(id)) {
    return pages.get(id)
  }

  try {
    const response = await fetch(`/controllers/${id}.json`)
    const { data } = await response.json()
    page = data
  } catch (error) {
    console.error(error)
    return false
  }

  pages.set(id, page)

  return page
}

/**
 * Hook to get data for a given page id or the current route
 *
 * @param {string} [path] Optional path or page id to retrieve
 * @returns {shallowReactive} Reactive page object
 */
export default path => {
  const { path: currentPath } = useRoute()
  const id = (path ?? currentPath).replace(/^\/|\/$/g, '') || 'home'

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

  return page
}
