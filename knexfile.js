// require('dotenv').config()

const {dbName, dbUser, dbPassword, dbHost} = process.env

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'schooldatabase',
      user: 'root',
      password: 'root',
      host: dbHost,
      port: 5432,
    },
    migrations: {
      directory: 'migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds',
    },
  },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
  //
  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user: 'username',
  //     password: 'password',
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10,
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations',
  //   },
  // },
}
