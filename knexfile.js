require("dotenv").config();
module.exports = {
  client: process.env.DB_DIALECT,
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    ssl: true
  },
  migrations: {
    tableName: "knex_migrations"
  }
};

