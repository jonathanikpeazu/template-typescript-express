import * as Knex from 'knex'

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('author', table => {
    table.uuid('id').primary()
    table.text('name')
    table.timestamp('createdAt').notNullable()
    table.timestamp('updatedAt')
  })

  await knex.schema.createTable('book', table => {
    table.uuid('id').primary()
    table.uuid('authorId').references('author.id')
    table.text('title')
    table.timestamp('createdAt').notNullable()
    table.timestamp('updatedAt')
  })
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTableIfExists('book')
  await knex.schema.dropTableIfExists('author')
}
