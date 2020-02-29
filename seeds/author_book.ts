import { BaseModel } from '../src/models/BaseModel'
import { Author } from '../src/models'

export const seed = async (knex): Promise<void> => {
  BaseModel.knex(knex)

  const trx = await Author.startTransaction()

  try {
    await Author.query(trx).insertGraph([
      {
        name: 'J.K. Rowling',
        books: [
          {
            title: 'Harry Potter and the Chamber of Secrets',
          },
        ],
      },
      {
        name: 'Michael Crichton',
        books: [
          {
            title: 'Jurassic Park',
          },
        ],
      },
    ])
    await trx.commit()
  } catch (e) {
    await trx.rollback()
    throw e
  }
}
