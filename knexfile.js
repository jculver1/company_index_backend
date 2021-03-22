// Update with your config settings.

module.exports = {

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://jqwasybrlglhmz:f519fef0e6b5e8e3b92927e96829e571a195382395fc47f88ade738374a91bf0@ec2-54-198-252-9.compute-1.amazonaws.com:5432/d65beg8b33o7o3'
  },

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'localhost'
  }

}
