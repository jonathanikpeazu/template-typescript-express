import * as Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('author', table => {
    table.uuid('id').primary()
    table.text('name')
  })
  await knex.schema.createTable('book', table => {
    table.uuid('id').primary()
    table.uuid('authorId').references('author.id')
    table.text('name')
  })
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists('book')
  await knex.schema.dropTableIfExists('author')
}
