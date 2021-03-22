module.exports = {

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://csmtumindlpyqz:7eb96abd5857e7d2326840c604255f87c1ba6f96a7f1970acc700ae266ed7355@ec2-54-164-22-242.compute-1.amazonaws.com:5432/d2oen615t07pgf'
  },

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'localhost'
  }

}
