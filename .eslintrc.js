module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  // add your custom rules here
  rules: {
    "strictPropertyInitialization": 0,
    "no-v-html": 0,
    "vue/valid-v-html": 0,
    "v-html": 0,
    "prefer-const": 0,
    "quote-props": 0,
    "no-console": 0
  }
}
