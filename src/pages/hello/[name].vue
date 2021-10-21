<template>
  <h1 class="text-xl">Hi, {{ props.name }}!</h1>

  <p class="text-sm opacity-75">Demo of a dynamic route</p>

  <div class="py-4" />

  <p>
    All children pages of <code>/hello/*</code> will be rendered by this
    component.
  </p>

  <div class="py-4" />

  <button class="button" @click="router.back()">Back</button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const props = defineProps<{ name: string }>();
const router = useRouter();
</script>
