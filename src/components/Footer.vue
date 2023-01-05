<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav class="box flex flex-wrap space-x-4">
    <button
      class="cursor-pointer text-2xl hover:text-blue-600"
      title="Toggle dark mode"
      @click="toggleDark()"
    >
      <CarbonMoon v-if="isDark" class="icon-inline" />
      <CarbonSun v-else class="icon-inline" />
    </button>

    <a
      class="cursor-pointer text-2xl text-current"
      rel="noreferrer"
      href="https://github.com/johannschopplich/kirby-vue-lightkit"
      target="_blank"
      title="GitHub"
    >
      <CarbonLogoGithub class="icon-inline" />
    </a>
  </nav>
</template>
