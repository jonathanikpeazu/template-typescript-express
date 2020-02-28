import Knex from 'knex'
import { knexSnakeCaseMappers } from 'objection'
import { config } from '../config'

const knexConfig = { ...config.KNEX_CONFIG, ...knexSnakeCaseMappers() }

export const knex = Knex(knexConfig)
