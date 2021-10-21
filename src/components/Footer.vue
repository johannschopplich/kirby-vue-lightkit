<template>
  <nav class="flex flex-wrap space-x-4 box">
    <button
      class="cursor-pointer text-2xl hover:text-blue-600"
      title="Toggle dark mode"
      @click="toggleDark()"
    >
      <carbon-moon v-if="isDark" class="icon-inline icon-transition" />
      <carbon-sun v-else class="icon-inline icon-transition" />
    </button>

    <a
      class="cursor-pointer text-[currentColor] text-2xl"
      rel="noreferrer"
      href="https://github.com/johannschopplich/kirby-vue-lightkit"
      target="_blank"
      title="GitHub"
    >
      <carbon-logo-github class="icon-inline icon-transition" />
    </a>
  </nav>

  <div class="mx-auto mt-4 text-center text-sm text-white opacity-40">
    [{{ props.layout ?? "Default" }} Layout]
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from "~/logic";

const props = defineProps<{ layout?: string }>();
</script>
