exports.up = function (knex) {
  return knex.schema
    .createTable('founders', table => {
      table.increments('id')
      table.string('full_name')
      table.string('title')
      table.integer('company_id')
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTable('founders')
}
