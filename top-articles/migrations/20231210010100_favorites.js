export async function up(knex) {
  await knex.schema.createTable('favorites', (table) => {
    table.increments('id')
    table.json('text')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('favorites')
}
