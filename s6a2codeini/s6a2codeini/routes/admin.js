const express = require('express')

const produtoController = require('../controllers/produtos')

const router = express.Router()

router.get('/add-product', produtoController.getAddProduct)