module.exports = {
  extends: [
    'eslint-config-johno'
  ],
  globals: {
    jasmine: 'readonly'
  },
  overrides: [
    {
      files: './migrations/*',
      rules: {
        '@typescript-eslint/no-explicit-any': 0
      }
    }
  ]
}
