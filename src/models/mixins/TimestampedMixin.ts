/* eslint-disable @typescript-eslint/ban-ts-ignore */

import { Model } from 'objection'

export default function TimestampedMixin(
  ModelClass: typeof Model,
  fieldOptions: { createdAt: boolean; updatedAt: boolean } = { createdAt: true, updatedAt: true },
): typeof Model {
  return class extends ModelClass {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    public $beforeInsert(...args): Promise<any> | void {
      if (fieldOptions.createdAt) {
        // @ts-ignore
        this.createdAt = new Date()
      }

      // @ts-ignore
      return super.$beforeInsert(...args)
    }

    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    public $beforeUpdate(...args): Promise<any> | void {
      if (fieldOptions.updatedAt) {
        // @ts-ignore
        delete this.createdAt // only deletes from the update clause, not the full model
        // @ts-ignore
        this.updatedAt = new Date()
      }

      // @ts-ignore
      return super.$beforeUpdate(...args)
    }
  }
}
