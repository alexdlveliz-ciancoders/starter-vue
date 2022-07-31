module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    'arrow-parens': [2, 'as-needed'],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always'
      }
    }]
  }
}
