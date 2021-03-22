// Update with your config settings.

module.exports = {

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://jqwasybrlglhmz:f519fef0e6b5e8e3b92927e96829e571a195382395fc47f88ade738374a91bf0@ec2-54-198-252-9.compute-1.amazonaws.com:5432/d65beg8b33o7o3' || 'postgres://whuvjccusymcvt:ac06f3dcd96bd172000ae7bf39da646eefe2a5c181dc40ddd82d1f73a34c76ec@ec2-54-198-252-9.compute-1.amazonaws.com:5432/d683etfl2mli5e'
  },

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'localhost'
  }

}
