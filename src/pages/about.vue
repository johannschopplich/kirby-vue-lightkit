<script setup lang="ts">
import { useController } from "~/composables";

// Pass the controller name as parameter
const page = useController("about");

(async () => {
  await page.isReadyPromise();

  console.log(`Hello from the ${page.title} page`);
})();
</script>

<template>
  <div>
    <p class="text-4xl">
      <CarbonHaze class="inline-block" />
    </p>
    <p class="text-xl">About</p>

    <p class="text-sm opacity-75">
      Example of the <code>useController</code> hook
    </p>

    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="page.isReady" class="prose" v-html="page.text" />
  </div>
</template>
