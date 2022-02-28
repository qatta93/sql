const { Pool } = require('pg');

const pool = new Pool({
  host: 'abul.db.elephantsql.com',
  user: 'nlxacbto',
  database: 'nlxacbto',
  password: 'b1rkWgkD1c9U6xYhZJszP93YYQgTkAi0',
  port: 5432,
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = {
  query: async (text, params) => pool.query(text, params),
  GET_BY_PRODUCT_ID: 'SELECT * FROM products WHERE id = $1',
  GET_ALL_INSTRUCTORS: 'SELECT * FROM instructors',
  // Add additional queries to do stuff for products
};
