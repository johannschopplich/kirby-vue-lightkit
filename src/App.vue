<template>
  <Header />

  <main id="main">
    <div class="box container is-md is-fullwidth" data-theme="light">
      <router-view :key="route.path" />
    </div>
  </main>
</template>

<script>
import { useRoute } from "vue-router";
import Header from "~/components/Header.vue";

export default {
  components: {
    Header,
  },

  setup() {
    const route = useRoute();
    return { route };
  },
};
</script>
