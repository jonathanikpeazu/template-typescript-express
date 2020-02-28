module.exports = {
  extends: [
    'eslint-config-johno'
  ],
  overrides: [
    {
      files: './tools/sql_setup/migrations/*',
      rules: {
        '@typescript-eslint/no-explicit-any': 0
      }
    }
  ]
}
