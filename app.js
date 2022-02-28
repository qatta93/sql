/* eslint-disable no-console */
const express = require('express');
const instructors = require('./src/instructors/instructors');

const app = express();
const port = 3001;

app.use('/api/instructors', instructors);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
