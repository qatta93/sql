const express = require('express');
const db = require('../modules/db');

const router = express.Router();

router.get('/', async (__, res) => {
  const products = await db.query(db.GET_ALL_PRODUCTS);
  res
    .status(200)
    .json(products.rows);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await db.query(db.GET_BY_PRODUCT_ID, [id]);
  res
    .status(200)
    .json(products.rows);
});

router.post('/', async (req, res) => {
  const products = await db.query(db.POST_PRODUCT);
  console.log(products);
  const getProduct = await db.query(db.GET_ALL_PRODUCTS);
  const getId = getProduct.rows[getProduct.rows.length - 1].id;
  res
    .location(`/api/products/${getId}`)
    .status(201)
    .end();
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await db.query(db.UPDATE_PRODUCT, [id]);
  res
    .status(200)
    .json(products.rows);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await db.query(db.DELETE_PRODUCT, [id]);
  res
    // .status(204)
    .json(products.rows);
});

router.get('/?group=[groupname]', async (req, res) => {
  console.log(req.query.group);
  const products = await db.query(db.GET_ALL_PRODUCTS);
  res
    .status(200)
    .json(products.rows);
});

module.exports = router;
