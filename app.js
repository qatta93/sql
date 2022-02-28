/* eslint-disable no-console */
const express = require('express');
const instructors = require('./src/instructors');
const products = require('./src/product');
const modules = require('./src/modules/db');

const app = express();
const port = 3001;

app.use('/api/instructors', instructors);

app.use('/api/products', products);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
