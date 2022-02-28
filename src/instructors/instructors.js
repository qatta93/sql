const express = require('express');
const repository = require('./repository');

const router = express.Router();

router.get('/', (req, res) => {
  const products = repository.list();

  res
    .json(products)
    .status(200)
    .end();
});

module.exports = router;
