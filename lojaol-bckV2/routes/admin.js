const express = require('express');
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const cors = require("cors")
const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', cors(), auth, admin, adminController.getAddProduct);

// /admin/products => GET
router.get('/products', cors(), auth, admin, adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', cors(), auth, admin, adminController.postAddProduct);

// /admin/edit-product/:productId => GET
router.get('/edit-product/:productId', cors(), auth, admin, adminController.getEditProduct);

// /admin/edit-product => POST
router.post('/edit-product', cors(), auth, admin, adminController.postEditProduct);

// /admin/delete-product => POST
router.post('/delete-product', cors(), auth, admin, adminController.postDeleteProduct);

module.exports = router;
