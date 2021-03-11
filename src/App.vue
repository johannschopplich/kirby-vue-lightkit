<template>
  <Header />

  <main id="main">
    <div class="box" data-theme="light">
      <div class="container is-md is-decentered">
        <router-view :key="route.path" />
      </div>
    </div>
  </main>
</template>

<script>
import { useRoute } from 'vue-router'
import Header from '~/components/Header.vue'

export default {
  components: {
    Header
  },

  setup () {
    const route = useRoute()
    return { route }
  }
}
</script>

<style scoped>
.container {
  padding: 0;
}
</style>
