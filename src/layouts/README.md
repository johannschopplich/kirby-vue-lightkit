# Layouts

Vue components in this directory are used as layouts. By default, `default.vue` applies unless an alternative is specified in the route meta.

With [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) and [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts), you can specify the layout in the page's SFCs:

```vue
<route lang="yaml">
meta:
  layout: home
</route>
```
