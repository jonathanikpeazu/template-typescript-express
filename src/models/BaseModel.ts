/* eslint-disable @typescript-eslint/ban-ts-ignore */

import * as uuid from 'uuid'
import { JSONSchema, Model } from 'objection'
import { knex } from '../lib/knex'

Model.knex(knex)

export class BaseModel extends Model {
  public static get modelPaths(): string[] {
    return [__dirname]
  }

  public static createId(): string {
    return uuid.v4()
  }

  public static get createIdByDefault(): boolean {
    return true
  }

  public $beforeValidate(jsonSchema, json, opt): JSONSchema {
    // @ts-ignore
    if (this.constructor.idColumn === 'id' && this.constructor.createIdByDefault) {
      // @ts-ignore
      const id = this.id || this.constructor.createId()
      // @ts-ignore
      this.id = id
      // eslint-disable-next-line no-param-reassign
      json.id = id
    }

    // @ts-ignore
    return super.$beforeValidate(jsonSchema, json, opt)
  }
}
