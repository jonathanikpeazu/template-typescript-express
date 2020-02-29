import { JSONSchema, RelationMappings } from 'objection'
import { TimestampedMixin } from './mixins'
import { BaseModel } from './BaseModel'
import { Author } from './Author'
import { TABLE_NAMES } from '../config/tableNames'

export class Book extends TimestampedMixin(BaseModel) {
  public id: string

  public title: string

  public authorId: string

  public createdAt: Date

  public updatedAt: Date

  public author: Author

  public static get tableName(): string {
    return TABLE_NAMES.book
  }

  public static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['id', 'authorId', 'title', 'createdAt'],
      properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        authorId: { type: 'string' },
        createdAt: { type: 'string', format: 'date-time' },
        updatedAt: { type: ['string', 'null'] },
        // createdAt: { type: 'date-time' },
        // updatedAt: { type: ['date-time', 'null'] },
      },
    }
  }

  public static get relationMappings(): RelationMappings {
    return {
      author: {
        modelClass: 'Author',
        relation: BaseModel.HasOneRelation,
        join: {
          from: `${TABLE_NAMES.book}.authorId`,
          to: `${TABLE_NAMES.author}.id`,
        },
      },
    }
  }
}
