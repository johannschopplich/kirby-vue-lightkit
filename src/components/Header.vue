<template>
  <header class="w-full top-4 left-0 z-10 sticky">
    <nav class="flex flex-wrap space-x-4 box">
      <router-link class="header-link" to="/">Home</router-link>

      <router-link class="header-link" to="/about">About</router-link>
    </nav>
  </header>
</template>

<style scoped>
.header-link {
  @apply text-gray-800 whitespace-nowrap dark:text-white hover:text-blue-600;

  &.router-link-active {
    text-decoration-line: underline;
  }
}
</style>
