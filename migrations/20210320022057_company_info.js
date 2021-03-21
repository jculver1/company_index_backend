
exports.up = function (knex) {
  return knex.schema
    .createTable('companies', table => {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('description', 2000)
      table.date('founded_date')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTable('companies')
}
