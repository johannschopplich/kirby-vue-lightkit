<template>
  <h1 class="title text-4">
    Welcome
  </h1>
  <hr>

  <div
    v-if="home.isReady"
    class="content"
    v-html="home.text"
  />
</template>

<script>
import { useController } from '~/hooks'

export default {
  setup () {
    // Pass the controller name as parameter
    const home = useController('home')

    ;(async () => {
      await home.isReadyPromise()
      // Fetched data for homepage from network (first request only) or store
      // You can access it now, for example:
      console.log(home.title)
    })()

    return { home }
  }
}
</script>
