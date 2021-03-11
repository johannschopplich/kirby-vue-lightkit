<template>
  <h1 class="title text-4">
    Welcome
  </h1>
  <hr>

  <div
    v-if="page.isReady"
    class="content"
    v-html="page.text"
  />
</template>

<script>
import { usePage } from '~/hooks'

export default {
  setup () {
    const page = usePage()

    ;(async () => {
      await page.isReadyPromise()
      console.log('Fetched data for homepage from network (first request only) or store.')
    })()

    return { page }
  }
}
</script>
