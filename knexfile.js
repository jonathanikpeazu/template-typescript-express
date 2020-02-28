import { knexSnakeCaseMappers } from 'objection'

const { config } = require('./src/config')

const knexConfig = {
  ...config.KNEX_CONFIG,
  ...knexSnakeCaseMappers(),
}

module.exports = {
  development: knexConfig,
  test: knexConfig,
  staging: knexConfig,
  production: knexConfig,
}
