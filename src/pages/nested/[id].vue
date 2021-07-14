<template>
  <h1 class="title text-4">Subpage</h1>

  <p class="mb-m">
    Requested path: <code>{{ route.path }}</code>
  </p>

  <p>
    All children pages of <code>/nested/</code> will be rendered by this
    component.
  </p>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  props: {
    id: {
      type: String,
      default: "",
    },
  },

  setup() {
    const route = useRoute();
    return {
      route,
    };
  },
};
</script>
