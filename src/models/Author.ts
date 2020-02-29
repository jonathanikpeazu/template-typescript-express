import { JSONSchema, RelationMappings } from 'objection'
import { TimestampedMixin } from './mixins'
import { BaseModel } from './BaseModel'
import { Book } from './Book'
import { TABLE_NAMES } from '../config/tableNames'

export class Author extends TimestampedMixin(BaseModel) {
  public id: string

  public name: string

  public createdAt: Date

  public updatedAt: Date

  public books: Book[]

  public static get tableName(): string {
    return TABLE_NAMES.author
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['id', 'name', 'createdAt'],
      properties: {
        id: { type: 'string' },
        name: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: ['string', 'null'] },
        // createdAt: { type: 'date-time' },
        // updatedAt: { type: ['date-time', 'null'] },
      },
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      books: {
        modelClass: 'Book',
        relation: BaseModel.HasManyRelation,
        join: {
          from: `${TABLE_NAMES.author}.id`,
          to: `${TABLE_NAMES.book}.authorId`,
        },
      },
    }
  }
}
