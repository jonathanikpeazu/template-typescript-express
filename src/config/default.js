module.exports = {
  PORT: 3000,
  GRAPHQL_PATH: '/graphql',

  // Knex/Postgres
  KNEX_CLIENT: 'pg',
  POSTGRES_SCHEMA: 'public',
  POSTGRES_PORT: '5432',
  POSTGRES_DATABASE: 'template_app',
  POSTGRES_HOST: null,
  POSTGRES_USER: null,
  POSTGRES_PASSWORD: null,
  POSTGRES_MIN_POOL_SIZE: 5,
  POSTGRES_MAX_POOL_SIZE: 200,
}
