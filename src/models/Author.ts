import { RelationMappings } from 'objection'
import { TimestampedMixin } from './mixins'
import { BaseModel } from './BaseModel'
import { Book } from './Book'
import { TABLE_NAMES } from '../config/tableNames'

export class Author extends TimestampedMixin(BaseModel) {
  public id: string

  public authorId: string

  public name: string

  public createdAt: Date

  public updatedAt: Date

  public Books: Book[]

  public static get tableName(): string {
    return TABLE_NAMES.author
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
