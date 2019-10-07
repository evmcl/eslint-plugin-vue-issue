module.exports = {
  env: {browser: true, es6: false},
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    extraFileExtensions: ['.vue'],
  },
  plugins: ['@typescript-eslint', 'vue'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/recommended',
  ],
};
