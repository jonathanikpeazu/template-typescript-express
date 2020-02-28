import { knexSnakeCaseMappers } from 'objection'

const { config } = require('./src/config')

const knexConfig = {
  client: config.KNEX_CLIENT,
  schema: config.POSTGRES_SCHEMA,
  connection: {
    host: config.POSTGRES_HOST,
    port: config.POSTGRES_PORT,
    database: config.POSTGRES_DATABASE,
    user: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
  },
  pool: {
    min: config.POSTGRES_MIN_POOL_SIZE,
    max: config.POSTGRES_MAX_POOL_SIZE,
  },
  ...knexSnakeCaseMappers(),
}

module.exports = {
  development: knexConfig,
  test: knexConfig,
  staging: knexConfig,
  production: knexConfig,
}
