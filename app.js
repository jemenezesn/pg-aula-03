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

app.put('/products/:name', (req, res) => {
    const {name} = req.params;
    const productInfo = req.body;

    const findProduct = productsList.find(product => product.name === name);

    if(!findProduct) {
        return res.status(404).send({ message: 'Produto não encontrado' });  
    }

    productsList = productsList.map(product => product.name === name ? findProduct : productInfo);

    res.status(200).json(productsList);

});

app.delete('/products/:name', (req, res) => {
    const {name} = req.params;

    const index = productsList.findIndex(product => product.name === name);

    if(!index) {
        return res.status(404).send({ message: 'Produto não encontrado' });  
    }

    const newProductsList = productsList.splice(index, 1);
    console.log(newProductsList);
    res.json(productsList);
});

app.listen(3000, () => console.log('Server online'));
