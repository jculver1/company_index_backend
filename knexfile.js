module.exports = {

  production: {
    client: 'pg',
    connection: 'postgres://whuvjccusymcvt:ac06f3dcd96bd172000ae7bf39da646eefe2a5c181dc40ddd82d1f73a34c76ec@ec2-54-198-252-9.compute-1.amazonaws.com:5432/d683etfl2mli5e?ssl=true',
    ssl: { rejectUnauthorized: false }
  },

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'localhost'
  }

}
