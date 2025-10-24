// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
  rules: {
    // TypeScript правила
    '@typescript-eslint/no-empty-object-type': 'warn',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',

    // Vue правила
    'vue/multi-word-component-names': 'off',
    'vue/no-unused-components': 'error',
    'vue/require-default-prop': 'off',
    'vue/html-indent': 'off', // Отключаем, так как Prettier управляет отступами
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',

    // Основные ESLint правила
    'no-unused-vars': 'off', // Отключаем в пользу @typescript-eslint/no-unused-vars
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
    'prefer-const': 'error',
    'no-var': 'error',

    // Стилистические правила - ОТКЛЮЧАЕМ те, что конфликтуют с Prettier
    quotes: 'off', // Управляется Prettier
    semi: 'off', // Управляется Prettier
    'comma-dangle': 'off', // Управляется Prettier
    indent: 'off', // Управляется Prettier
  },
});
// Your custom configs here
