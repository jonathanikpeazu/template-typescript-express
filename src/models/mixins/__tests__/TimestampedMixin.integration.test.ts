import TimestampedMixin from '../TimestampedMixin'
import BaseModel from '../../BaseModel'
import { knex } from '../../../lib/knex'

const TEST_TABLE_NAME = 'test_table'
class TestModel extends TimestampedMixin(BaseModel) {
  public createdAt: Date

  public updatedAt: Date

  public id: string

  public testField: string

  static get tableName() {
    return TEST_TABLE_NAME
  }
}

beforeEach(async () => {
  const tableExists = await knex.schema.hasTable(TEST_TABLE_NAME)
  if (!tableExists) {
    await knex.schema.createTable(TEST_TABLE_NAME, table => {
      table.uuid('id').primary()
      table.text('testField')
      table.timestamp('createdAt').notNullable()
      table.timestamp('updatedAt')
    })
  }
})

afterEach(() => knex.schema.dropTableIfExists(TEST_TABLE_NAME))

describe('TimestampedMixin', () => {
  it('Adds createdAt and updatedAt timestamps.', async () => {
    // in-memory model should have a createdAt, but not updatedAt
    const inMemoryModel = TestModel.fromJson({})
    expect(inMemoryModel.createdAt).toEqual(jasmine.any(Date))
    expect(inMemoryModel.updatedAt).toBeUndefined()

    // inserting a model should not change the createdAt or add an updatedAt
    const insertedModel = await TestModel.query().insertAndFetch(inMemoryModel)
    expect(insertedModel.createdAt).toEqual(inMemoryModel.createdAt)
    expect(insertedModel.updatedAt).toBeUndefined()

    // Updating the model should set updatedAt without changing createdAt
    const prevCreatedAt = inMemoryModel.createdAt
    const updatedModel = await insertedModel.$query().updateAndFetch({ testField: 'abcde' })
    expect(inMemoryModel.createdAt).toEqual(prevCreatedAt)
    expect(updatedModel.createdAt).toEqual(prevCreatedAt)

    // updatedAt should be updated.
    expect(updatedModel.updatedAt).toEqual(jasmine.any(Date))
    expect(inMemoryModel.updatedAt).toEqual(updatedModel.updatedAt)
  })
})
