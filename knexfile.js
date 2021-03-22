module.exports = {

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgresql-animated-72099',
    ssl: { rejectUnauthorized: false }
  },

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'localhost'
  }

}
