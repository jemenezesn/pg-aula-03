const express = require('express');

const app = express();
let productsList = require('./productsList');

app.use(express.json());



app.listen(3000, () => console.log('Server online'));
