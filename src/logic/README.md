# Path Aliasing

`~/` is aliased to `./src/` folder.

For example, instead of importing like:

```ts
import { isDark } from "../../../../logic";
```

You can use:

```ts
import { isDark } from "~/logic";
```
