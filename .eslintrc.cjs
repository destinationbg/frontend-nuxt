module.exports = {
    root: true,
    env: {
        browser: true,
        es2022: true,
        node: true
    },
    plugins: ['prettier'],
    extends: ['@nuxt/eslint-config', 'plugin:nuxt/recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        parser: '@typescript-eslint/parser',
        sourceType: 'module'
    },
    rules: {
        'comma-dangle': 1,
        'no-console': 'off',
        'no-unused-vars': 'off',
        'prettier/prettier': [
            'error',
            {
                endOfLine: 'auto'
            }
        ],
        'vue/html-closing-bracket-newline': [
            'error',
            {
                singleline: 'never',
                multiline: 'always'
            }
        ],
        'vue/html-indent': 'off',
        'vue/max-attributes-per-line': 'off',
        'vue/multi-word-component-names': 'off',
        'vue/no-multiple-template-root': 'off',
        'vue/no-v-html': 'off',
        'vue/require-default-prop': 'off',
        'vue/singleline-html-element-content-newline': 'off',
        quotes: [
            'warn',
            'single',
            {
                avoidEscape: true
            }
        ],
        semi: ['warn', 'never']
    }
}
