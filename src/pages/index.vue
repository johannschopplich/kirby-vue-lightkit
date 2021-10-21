<template>
  <div>
    <p class="text-4xl">
      <carbon-sailboat-offshore class="inline-block" />
    </p>
    <p class="text-xl">Kirby Vue Lightkit</p>
    <p class="text-sm opacity-75">Opinionated Kirby + Vite Starter Template</p>

    <div class="py-4" />

    <form class="flex max-w-sm space-x-3 w-full">
      <label for="input" hidden>What’s your name?</label>
      <input
        id="input"
        v-model="name"
        placeholder="What’s your name?"
        type="text"
        autocomplete="false"
        class="input flex-1"
        @keydown.enter="go"
      />

      <button class="button" :disabled="!name" @click.prevent="go">Go</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useController } from "~/hooks";

// Pass the controller name as parameter
const home = useController("home");

(async () => {
  await home.isReadyPromise();
  // Fetched data for homepage from network (first request only) or store
  // You can access it now, for example:
  console.log(`Hello from the ${home.title} page`);
})();

const name = ref("");
const router = useRouter();
const go = () => {
  if (name.value) router.push(`/hello/${encodeURIComponent(name.value)}`);
};
</script>

<route lang="yaml">
meta:
  layout: home
</route>
