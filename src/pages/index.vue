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
import { useController } from '~/hooks'

export default {
  setup () {
    // Pass the controller name as parameter
    const page = useController('home')

    ;(async () => {
      await page.isReadyPromise()
      // Fetched data for homepage from network (first request only) or store
      // You can access it now, for example:
      console.log(page.title)
    })()

    return { page }
  }
}
</script>
