const express = require('express');
const db = require('../modules/db');

const router = express.Router();

router.get('/', async (__, res) => {
  const products = await db.query(db.GET_ALL_PRODUCTS);
  res
    .send(products.rows)
    .status(200)
    .end();
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await db.query(db.GET_BY_PRODUCT_ID, [id]);
  res
    .send(products.rows)
    .status(200)
    .end();
});

router.post('/', async (req, res) => {
  const products = await db.query(db.POST_PRODUCT);
  // UnhandledPromiseRejectionWarning: error: column "ferrari" does not exist
  res.setHeader('Location', `/${products.rows[0].id}`);
  res
    .send(products.rows)
    .status(201)
    .end();
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await db.query(db.UPDATE_PRODUCT, [id]);
  res
    .send(products.rows)
    .status(200)
    .end();
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await db.query(db.DELETE_PRODUCT, [id]);
  res
    .send(products.rows)
    .status(204)
    .end();
});

router.get('/?group=[groupname]', async (req, res) => {
  console.log(req.query.group);
  const products = await db.query(db.GET_ALL_PRODUCTS);
  res
    .send(products.rows)
    .status(200)
    .end();
});

module.exports = router;
