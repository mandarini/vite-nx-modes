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


## Related issue/PR

* [Issue](https://github.com/nrwl/nx/issues/20111)
* [PR](https://github.com/nrwl/nx/pull/17335)

## Issue explanation

The above PR made sure that you can load environment variables from configuration name.

In vite, you can load environment files that are `.env.[mode]` using the `--mode` flag.

In Nx, you can load environment files that are `.env.[configuration]` using the `--configuration` flag.

This creates a conflict, and when using the `--configuration` flag on Nx, the `--mode` flag is ignored. The `--configuration` flag is almost always used in Nx, since we have the `defaultConfiguration` property in the `project.json` file in most targets.


