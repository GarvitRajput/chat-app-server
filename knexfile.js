require("dotenv").config();

let data = {
  client: 'pg',
  connection: {
    user: "yyeutnprpjmrxi",
    password: "93cc09462e9b591c0311dd0c35e8384bbade585a1d17f7e82cf887cb02614e33",
    host: "ec2-54-204-35-248.compute-1.amazonaws.com",
    database: "d80g0bd6v50up8",
    ssl: true
  },
  migrations: {
    tableName: "knex_migrations"
  }
};
module.exports = data;

