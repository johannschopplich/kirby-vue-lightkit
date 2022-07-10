<template>
  <carbon-warning class="text-4xl" />
  <h2 class="text-xl">Not Found</h2>

  <p>
    Requested path: <code>{{ route.path }}</code>
  </p>

  <div class="py-4" />

  <button class="button" @click="router.back()">Back</button>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
</script>
