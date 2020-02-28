import { RelationMappings } from 'objection'
import { TimestampedMixin } from './mixins'
import { BaseModel } from './BaseModel'
import { Author } from './Author'
import { TABLE_NAMES } from '../config/tableNames'

export class Book extends TimestampedMixin(BaseModel) {
  public id: string

  public authorId: string

  public name: string

  public createdAt: Date

  public updatedAt: Date

  public author: Author

  public static get tableName(): string {
    return TABLE_NAMES.book
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
