# Different modes for vite

Try it out:

```bash
nx serve my-app --mode=test
```

```bash
nx serve my-app --mode=production
```

```bash
nx serve my-app --mode=development
```

```bash
nx serve my-app --mode=staging
```

In order for the different modes to work, I removed `defaultConfiguration` from my [`project.json`](apps/my-app/project.json) file.

If you add `defaultConfiguration` back, the `defaultConfiguration` will always be applied, disregarind the `--mode` flag.

