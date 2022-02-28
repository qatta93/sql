/* eslint-disable no-console */
const express = require('express');
const instructors = require('./src/instructors');
const modules = require('./src/modules/db');

const app = express();
const port = 3001;

app.use('/api/instructors', instructors);

// Add routing for products

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
