<template>
  <header class="sticky top-4 left-0 z-10 w-full">
    <nav class="box flex flex-wrap space-x-4">
      <RouterLink class="header-link" to="/">Home</RouterLink>
      <RouterLink class="header-link" to="/about">About</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.header-link {
  --at-apply: "whitespace-nowrap text-gray-800 hover:text-blue-600 dark:text-white";
}

.header-link.router-link-active {
  --at-apply: "underline";
}
</style>
