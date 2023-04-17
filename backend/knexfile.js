module.exports = {
    client: 'postgresql',
    connection: {
      database: 'Users',
      user:     'postgres',
      password: 'admin'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };