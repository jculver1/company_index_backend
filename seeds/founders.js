
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('founders').del()
    .then(function () {
      // Inserts seed entries
      return knex('founders').insert([
        {full_name: 'rowValue1', title: 'sdfsdf', company_id: 1 },
        {full_name: 'rowValue2', title: 'sdfsdf', company_id: 2 },
        {full_name: 'rowValue3', title: 'hiii', company_id: 2 },
      ]);
    });
};
