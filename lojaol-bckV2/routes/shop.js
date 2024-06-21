const express = require('express');
const auth = require('../middleware/auth')
const cors = require("cors")

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', cors(), auth, shopController.getIndex);

router.get('/products', cors(), auth, shopController.getProducts);

router.get('/products/:productId', cors(), auth, shopController.getProduct);

router.get('/cart', cors(), auth, shopController.getCart);

router.post('/cart', cors(), auth, shopController.postCart);

router.post('/cart-delete-item', cors(), auth, shopController.postCartDeleteProduct);

router.get('/orders', cors(), auth, shopController.getOrders);

router.get('/checkout', cors(), auth, shopController.getCheckout);

module.exports = router;
