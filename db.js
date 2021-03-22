
const environment = process.env.NODE_ENV || 'production';
const knexConfig = require('./knexfile')[environment]
const db = require('knex')(knexConfig)



module.exports = db
