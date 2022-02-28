const db = require('./db');
// import package 'pg' here and get the connection from the connection pool
// see pg docs
// https://node-postgres.com/features/connecting
// https://node-postgres.com/features/pooling

module.exports.list = () =>
  // This should be the SQL instead
  // If you want an extra challenge, break the SQL out into a separate .sql file and load on startup
  // Separation of concerns
  db.instructors();
