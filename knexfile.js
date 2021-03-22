// Update with your config settings.

module.exports = {

  production: {
    client: 'pg',
    database: {
      type: 'postgres',
      host: '3.82.213.89',
      username: 'whuvjccusymcvt',
      database: 'd683etfl2mli5e',
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }
    }
    // connection: process.env.DATABASE_URL || 'postgres://whuvjccusymcvt:ac06f3dcd96bd172000ae7bf39da646eefe2a5c181dc40ddd82d1f73a34c76ec@ec2-54-198-252-9.compute-1.amazonaws.com:5432/d683etfl2mli5e'
  }
}
