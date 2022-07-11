<template>
  <header class="w-full top-4 left-0 z-10 sticky">
    <nav class="flex flex-wrap space-x-4 box">
      <RouterLink class="header-link" to="/">Home</RouterLink>

      <RouterLink class="header-link" to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header-link {
  --at-apply: "text-gray-800 whitespace-nowrap dark:text-white hover:text-blue-600";
}

.header-link.router-link-active {
  --at-apply: "underline";
}
</style>
