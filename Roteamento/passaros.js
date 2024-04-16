const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    console.log('Horario:', Date.now())
    next()
})

router.get('/', (req, res) => {
    res.send('Homepage de passaros')
})
router.get('/ajuda', (req, res) => {
    res.send('ajuda sobre passaros')
})

module.exports = router