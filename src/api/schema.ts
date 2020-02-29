import { builder } from 'objection-graphql'
import * as Models from '../models'

export const schema = builder()
  .model(Models.Author)
  .model(Models.Book)
  .build()
