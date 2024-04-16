const express = require('express')
const bodyParser = require('body-parser')
const route = require('./rotas')

const port = 5000
const host = '127.0.0.1'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))

app.use(route)

app.use('/', (req, res) => {
    res.send('Erro 404')
})

app.listen(port, host, () => {
    console.log(`Server is running http://${host}:${port}`)
})