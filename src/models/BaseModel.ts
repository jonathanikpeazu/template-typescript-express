/* eslint-disable @typescript-eslint/ban-ts-ignore */

import * as uuid from 'uuid'
import { Model } from 'objection'
import { DBErrors } from 'objection-db-errors'
import { knex } from '../lib/knex'

Model.knex(knex)

export class BaseModel extends DBErrors(Model) {
  public static get modelPaths(): string[] {
    return [__dirname]
  }

  public static createId(): string {
    return uuid.v4()
  }

  public static get createIdByDefault(): boolean {
    return true
  }

  /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
  public $beforeInsert(...args): Promise<any> | void {
    // @ts-ignore
    if (this.constructor.idColumn === 'id' && this.constructor.createIdByDefault) {
      // @ts-ignore
      this.id = this.id || this.constructor.createId()
    }

    // @ts-ignore
    return super.$beforeInsert(...args)
  }
}
