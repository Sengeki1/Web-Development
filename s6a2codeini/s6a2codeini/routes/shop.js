const express = require('express')
const router = express.Router()

const produtos = []

router.get('/', (req, res, next) => {
    res.render('shop', {
        listprods: produtos,
        tituloPagina: 'Loja Online'
    })
})