<template>
  <div>
    <p class="text-4xl">
      <carbon-haze class="inline-block" />
    </p>
    <p class="text-xl">About</p>
    <p class="text-sm opacity-75">
      Example of the <code>useController</code> hook
    </p>

    <div class="py-4" />

    <div v-if="home.isReady" class="prose" v-html="home.text" />
  </div>
</template>

<script setup lang="ts">
import { useController } from "~/hooks";

// Pass the controller name as parameter
const home = useController("home");

(async () => {
  await home.isReadyPromise();
  // Fetched data for homepage from network (first request only) or store
  // You can access it now, for example:
  console.log(home.title);
})();
</script>
