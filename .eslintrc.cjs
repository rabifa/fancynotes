module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@electron-toolkit/eslint-config-ts/recommended',
    '@electron-toolkit/eslint-config-prettier'
  ],
  rules: {
    '@typescipt-eslint/explicit-function-return-type': 'off',
    '@typescipt-eslint/no-unused-vars': 'off'
  }
}
