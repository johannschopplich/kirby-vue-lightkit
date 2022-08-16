<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
</script>

<template>
  <div class="space-y-4">
    <div>
      <CarbonWarning class="text-4xl" />
      <h2 class="text-xl">Not Found</h2>

      <p>
        Requested path: <code>{{ route.path }}</code>
      </p>
    </div>

    <button class="button" @click="router.back()">Back</button>
  </div>
</template>
