module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    wechat: true, // WeChat Mini Program environment
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    // Basic rules
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],

    // WeChat Mini Program specific
    'no-undef': 'off', // Allow global variables like wx, App, Page, etc.
    'no-unused-vars': 'warn',

    // Code quality
    'no-console': 'warn',
    'no-debugger': 'error',
    'no-alert': 'error',

    // Best practices
    'eqeqeq': 'error',
    'curly': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',

    // Variables
    'no-unused-vars': 'warn',
    'no-use-before-define': 'error',

    // Stylistic
    'comma-dangle': ['error', 'always-multiline'],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
  },
  globals: {
    // WeChat Mini Program globals
    wx: 'readonly',
    App: 'readonly',
    Page: 'readonly',
    Component: 'readonly',
    getApp: 'readonly',
    getCurrentPages: 'readonly',
    Behavior: 'readonly',
    requirePlugin: 'readonly',
    requireMiniProgram: 'readonly',
  },
};
