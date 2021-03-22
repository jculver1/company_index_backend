const { Client } = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
})

const knexConfig = require('./knexfile')[client]
const db = require('knex')(knexConfig)


client.connect();

module.exports = db
