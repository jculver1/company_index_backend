
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('companies').del()
    .then(function () {
      // Inserts seed entries
      return knex('companies').insert([
        {name: 'Sales Force', city: 'San Franscico', state: 'California', description:'sjdfsdfsdf', founded_date: new Date(98, 1)},
        {name: 'company 2', city: 'Salt Lake City', state: 'Utah', description:'it does this', founded_date: new Date(98, 1)},
        {name: 'company 3', city: 'Salt Lake City', state: 'Utah', description:'it does this', founded_date: new Date(98, 1)},
        {name: 'company 4', city: 'Salt Lake City', state: 'Utah', description:'it does this', founded_date: new Date(98, 1)},
      ]);
    });
};
