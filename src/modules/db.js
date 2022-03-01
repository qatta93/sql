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
  GET_ALL_PRODUCTS: 'SELECT * FROM products',
  POST_PRODUCT: 'INSERT INTO products (name, description, price, product_group_id) VALUES (\'ferrari\', \'red\', 20000, 2)',
  UPDATE_PRODUCT: 'UPDATE products SET price = 10000 WHERE id = $1',
  DELETE_PRODUCT: 'DELETE FROM products WHERE id = $1',
};
