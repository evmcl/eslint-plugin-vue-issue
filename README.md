Minimum example to show what seems to be a parser conflict when using
typescript with `.vue` files.

After cloning the repo, do:

```
npm install
npm run lint
# or npx eslint src/*.vue
```

And you will get the error:

```
src/file_b.vue
  3:23  error  Parsing error: '>' expected  vue/no-parsing-error
```

Remove `src/file_a.vue` then there is no errors.
