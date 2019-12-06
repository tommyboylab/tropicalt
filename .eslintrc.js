module.exports = {
  plugins: ['react-perf', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  root: true,
  extends: [
    'plugin:react-perf/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
    'stylelint',
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    // turn on in case of performance issues
    'react-perf/jsx-no-new-function-as-prop': 0,
    'react-perf/jsx-no-new-object-as-prop': 0,
    'react-perf/jsx-no-new-array-as-prop': 0,
    'react-native/no-inline-styles': 0,
  },
};
