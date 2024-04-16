const express = require('express')
const http = require('http') // module http
const bodyParser = require('body-parser')

const app = express()

// MiddleWare Functions
app.use(bodyParser.urlencoded({extended: false}))

app.use( '/',(request, response, next) => {
    console.log('generalizando')
    next()
})

app.use('/add-produto', (request, response, next) => {
    console.log('no primeiro middleware')
    response.send('<h1>Pagina para adicionar produto</h1>\
    <form action="/produto" method="POST">\
    <input type="text" name="nome"/>\
    <button type="submit">Adicionar</button></form>')
})

app.post( '/produto', (request, response, next) => {
    console.log(request.body)
    /* inserir na BD */
    response.redirect('/')
})

app.use('/',(request, response, next) => {
    console.log('no segundo middleware')
    response.send('<h1>Ola do servidor express</h1>')
})

const server = http.createServer(app)
const port = 5000
const host = '127.0.0.1'

server.listen(port, host, () => {  // listen for a request 
    console.log(`Servidor a rodar em http://${host}:${port}/`)
})