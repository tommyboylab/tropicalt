module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    files: ['*.ts', '*.tsx'],
    project: './tsconfig.json',
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'react-perf', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react-perf/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off',
  },
  overrides: [
    {
      files: 'tests/**',
      rules: {},
    },
  ],
};
