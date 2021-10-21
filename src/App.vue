<template>
  <main class="mx-auto max-w-screen-md py-4 px-4">
    <router-view :key="route.path" />
  </main>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
</script>
