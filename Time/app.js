const http = require('http')
const express = require('express')

const port = 5000
const host = '127.0.0.1'
const app = express()

var requestTime = (req, res, next) => {
    req.requestTime = Date.now()
    next()
}

app.use(requestTime)

app.get('/', (req, res) => {
    var responseText = 'Hello World!'
    responseText += 'Requested at: ' + req.requestTime + ''
    res.send(responseText)
})

app.listen(port, host, () => {
    console.log(`Servidor a rodar em http://${host}:${port}/`)
})      