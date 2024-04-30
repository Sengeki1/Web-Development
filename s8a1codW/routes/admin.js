// Templates engine

const path  = require('path');

const productsController = require('../controllers/products');

const express = require('express');

// Router é uma mini aplicação do express que podemos usar para separar o código em vários arquivos
const router = express.Router();


router.get('/add-product' , productsController.getAddProduct);

router.post('/add-product',productsController.postAddProduct);


module.exports = router;