<template>
  <carbon-warning class="text-4xl" />
  <h2 class="text-xl">Not Found</h2>

  <p>
    Requested path: <code>{{ route.path }}</code>
  </p>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>
