<template>
  <h1 class="title text-4">
    Not Found
  </h1>
  <p>Requested path: <code>{{ route.path }}</code></p>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  props: {
    all: {
      type: String,
      required: true
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
