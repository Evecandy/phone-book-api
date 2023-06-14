import dotenv from "dotenv";
import assert from "assert";

dotenv.config();

const {
  HOST_URL,
  HOST,
  PORT,
  SQL_SERVER,
  SQL_PORT,
  SQL_USER,
  SQL_PWD,
  SQL_DB,
} = process.env;

const sqlEncrypt = process.env.SQL_ENCRYPT === "true";

assert(PORT, "port is required");
assert(HOST, "host is required");

export const config = {
  host: HOST,
  port: PORT,
  url: HOST_URL,
  sql: {
    server: SQL_SERVER,
    user: SQL_USER,
    password: SQL_PWD,
    database: SQL_DB,
    options: {
      encrypt: sqlEncrypt,
      enableArithAbort: true,
    },
  },
};