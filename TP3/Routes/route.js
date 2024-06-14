const express = require('express');
const adminController = require('../Controllers/admin');
const loginController  = require('../Controllers/login')
const singUpController  = require('../Controllers/singup')

const router = express.Router();

router.get('/loginUser', adminController.loginUser); // login routes

router.post('/loginUser', loginController.login);


router.get('/singupUser', adminController.singupUser); // register routes

router.post('/singupUser', singUpController.register);


router.get('/logout', adminController.logout); // logout route

module.exports = router