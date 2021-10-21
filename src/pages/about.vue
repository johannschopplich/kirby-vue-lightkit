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

    <div v-if="page.isReady" class="prose" v-html="page.text" />
  </div>
</template>

<script setup lang="ts">
import { useController } from "~/hooks";

// Pass the controller name as parameter
const page = useController("about");

(async () => {
  await page.isReadyPromise();

  console.log(`Hello from the ${page.title} page`);
})();
</script>
