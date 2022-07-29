const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    proxy: true,
    app: {
      keys: env.array("APP_KEYS", ["DATABASE_URL", "MY_HEROKU_URL", "NODE_ENV", "PROJECT_PATH"]),
    },
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      ssl: {
        rejectUnauthorized: false
      },
    },
    debug: false,
  },
});
