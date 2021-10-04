module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-perf'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-perf/recommended',
    'prettier',
    "plugin:prettier/recommended",
  ],
  overrides: [
    {
      files: 'tests/**',
      rules: {
        'no-template-curly-in-string': 1,
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        // 'react-perf/jsx-no-new-function-as-prop': 0,
        // 'react-perf/jsx-no-new-object-as-prop': 0,
        // '@typescript-eslint/explicit-function-return-type': 0,
      },
    },
  ],
};
