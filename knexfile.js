module.exports = {

  development: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'localhost'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://kvrxfipqczozrn:025e816e350661858171e4aa7c28b05c747df389d926962713838e7b19b2357c@ec2-3-91-127-228.compute-1.amazonaws.com:5432/df5pphbekve3r6'
  }
}
