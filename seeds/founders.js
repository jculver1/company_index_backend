
exports.seed = function (knex) {
  return knex('founders').del()
    .then(function () {
      return knex('founders').insert([
        { full_name: 'Anya Folke Rutherfurd', title: 'CEO', company_id: 1 },
        { full_name: 'Sarah Margarita Kárpáti', title: 'CEO', company_id: 2 },
        { full_name: 'Ela Vera Krüger', title: 'CEO', company_id: 2 }
      ])
    })
}
