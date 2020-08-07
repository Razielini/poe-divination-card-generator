module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    '@nuxtjs',
    'plugin:vue/recommended'
  ],
  
  // add your custom rules here
  rules: {
    "strictPropertyInitialization": 0,
    "no-v-html": 0,
    "vue/valid-v-html": 0,
    "v-html": 0,
    "prefer-const": 0,
    "quote-props": 0,
    "no-console": 0,
    "vue/max-attributes-per-line": ["error", {
      "singleline": 3,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }]
  },
  plugins: [
    'vue'
  ]
}
