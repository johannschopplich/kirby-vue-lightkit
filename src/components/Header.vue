<template>
  <header>
    <div class="box" data-theme="light">
      <p class="title text-4">
        {{ site.title }}
      </p>

      <nav>
        <ul class="d-flex h-stacked">
          <li
            v-for="(link, index) in links"
            :key="index"
          >
            <router-link :to="link.path">
              {{ link.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { useSite } from '~/hooks'

export default {
  setup () {
    const site = useSite()
    const links = [
      { path: '/', name: 'Home' },
      { path: '/todo', name: 'Todo' },
      { path: '/article/kirby-rocks', name: 'Subpage' },
      { path: '/not-found', name: '404' }
    ]

    return {
      site,
      links
    }
  }
}
</script>

<style scoped>
header {
  position: sticky;
  top: var(--space-xs);
  left: 0;
  width: 100%;
}

header .title {
  margin-right: var(--component-spacer);
}

@media (min-width: 640px) {
  header .box {
    display: flex;
    align-items: center;
  }
}

.router-link-exact-active {
  color: currentColor;
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-color: var(--color-primary);
  text-decoration-thickness: 0.2ex;
  text-underline-offset: 0.5ex;
}
</style>
