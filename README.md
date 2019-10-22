**Update:** Release 2.5.0 of @typescript-eslint/eslint-plugin and
@typescript-eslint/parser has fixed this issue. Leaving this repo here for
posterity.

Minimum example to show what seems to be a parser conflict when using
typescript with `.vue` files as a demonstration for issue
[970](https://github.com/vuejs/eslint-plugin-vue/issues/970).

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
