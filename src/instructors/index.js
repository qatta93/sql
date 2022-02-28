const express = require('express');
const db = require('../modules/db');

const router = express.Router();

router.get('/', async (req, res) => {
  const instructors = await db.query(db.GET_ALL_INSTRUCTORS);

  res
    .send(instructors.rows)
    .status(200)
    .end();
});

module.exports = router;
