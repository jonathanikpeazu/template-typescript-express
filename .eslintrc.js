module.exports = {
  extends: [
    'eslint-config-johno'
  ],
  overrides: [
    {
      files: './migrations/*',
      rules: {
        '@typescript-eslint/no-explicit-any': 0
      }
    }
  ]
}
