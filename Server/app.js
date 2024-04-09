const express = require('express')
const http = require('http') // module http

const app = express()

// MiddleWare Functions
app.use((request, response, next) => {
    console.log('no primeiro middleware')
    next()
})

app.use((request, response, next) => {
    console.log('no segundo middleware')
    response.send('<h1>Ola do servidor express</h1>')
})

const server = http.createServer(app)
const port = 5000
const host = '127.0.0.1'

server.listen(port, host, () => {  // listen for a request 
    console.log(`Servidor a rodar em http://${host}:${port}/`)
})