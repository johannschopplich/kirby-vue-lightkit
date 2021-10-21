# File-based Routing

Routes will be auto-generated for Vue files in this dir with the same file structure. Head over to [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) for more details.

## Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of having:

```ts
import { isDark } from "../../../../logic";
```

You can use:

```ts
import { isDark } from "~/logic";
```
