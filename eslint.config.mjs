// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
    rules: {
        'vue/multi-word-component-names': 'off',
        'vue/no-unused-components': 'error',
        'no-unused-vars': 'error',
        'no-console': 'warn',
        'no-debugger': 'error',
    },
});
// Your custom configs here
