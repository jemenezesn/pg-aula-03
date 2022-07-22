const express = require('express');

const app = express();
let productsList = require('./productsList');

app.use(express.json());


app.get('/products', (req, res) => {
    console.log(productsList);
    res.status(200).json(productsList);
});

app.post('/products', (req, res) => {
    const product = req.body;
    productsList = [...productsList, product];

    res.status(201).json(productsList);
});



app.listen(3000, () => console.log('Server online'));
