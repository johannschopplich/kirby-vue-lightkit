<template>
  <h1 class="title text-4 mb">
    Subpage
  </h1>
  <p>Requested path: <code>{{ route.path }}</code></p>

  <p class="mt-m">
    All children pages of <code>/article/</code> will be rendered by this component.
  </p>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  props: {
    id: {
      type: String,
      default: ''
    }
  },

  setup () {
    const route = useRoute()
    return {
      route
    }
  }
}
</script>
