exports.seed = function (knex) {
  return knex('companies').del()
    .then(function () {
      return knex('companies').insert([
        { name: 'Bode Group', city: 'San Franscico', state: 'California', description: 'Orci a scelerisque purus semper eget. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Vitae elementum curabitur vitae nunc sed velit. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Arcu bibendum at varius vel. Volutpat consequat mauris nunc congue nisi vitae suscipit. Justo eget magna fermentum iaculis eu non diam. Nibh ipsum consequat nisl vel pretium lectus quam id leo. Id eu nisl nunc mi ipsum faucibus', founded_date: new Date(98, 1) },
        { name: 'Emmerich - Greenholt', city: 'Salt Lake City', state: 'Utah', description: 'Eros in cursus turpis massa tincidunt dui ut ornare lectus. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Risus in hendrerit gravida rutrum quisque non tellus. ', founded_date: new Date(98, 1) },
        { name: 'Mckenzie Group', city: 'Dallas', state: 'TX', description: 'Ut placerat orci nulla pellentesque dignissim enim sit. Scelerisque felis imperdiet proin fermentum leo vel.', founded_date: new Date(98, 1) },
        { name: 'Sipes, Klocko and Rowe', city: 'Atlanta', state: 'GA', description: 'Varius quam quisque id diam vel quam. Curabitur gravida arcu ac tortor. Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Massa vitae tortor condimentum lacinia quis vel eros donec ac.', founded_date: new Date(98, 1) }
      ])
    })
}
