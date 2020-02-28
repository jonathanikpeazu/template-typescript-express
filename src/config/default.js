module.exports = {
  PORT: 3000,
  GRAPHQL_PATH: '/graphql',

  // Knex/Postgres
  POSTGRES_MIN_POOL_SIZE: 5,
  POSTGRES_MAX_POOL_SIZE: 200,
  KNEX_CONFIG: {
    client: 'pg',
    schema: 'public',
    connection: {
      host: null,
      port: '5432',
      database: 'template_app',
      user: null,
      password: null,
    },
    pool: {
      min: 5,
      max: 200,
    },
  },
}
