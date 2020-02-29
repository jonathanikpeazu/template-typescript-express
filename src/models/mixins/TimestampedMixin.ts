/* eslint-disable @typescript-eslint/ban-ts-ignore */

import { JSONSchema, Model } from 'objection'

export default function TimestampedMixin(
  ModelClass: typeof Model,
  fieldOptions: { createdAt: boolean; updatedAt: boolean } = { createdAt: true, updatedAt: true },
): typeof Model {
  return class extends ModelClass {
    public $beforeValidate(jsonSchema, json, opt): JSONSchema {
      if (fieldOptions.createdAt) {
        const createdAt = new Date()
        // @ts-ignore
        this.createdAt = createdAt
        // eslint-disable-next-line no-param-reassign
        json.createdAt = createdAt
      }

      return super.$beforeValidate(jsonSchema, json, opt)
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
