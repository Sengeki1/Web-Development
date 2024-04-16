const http = require('http')
const express = require('express')
var bodyParser = require('body-parser')

const app = express()

app.get('/', function (req, res, next) {
    res.send('<html><body><form method="POST">' +  
    'First Name: <input type="text" name="first_name"><br>' +  
    'Last Name: <input type="text" name="last_name">' +
    '<input type="submit" value="Submit">' +
    '</form></body></html>')
})

app.get('/example/a', (request, response, next) => {
    console.log('Hello') 
    next()   
}, (req, res) => {
    res.send('A diz ola')
})

/*
app.get(/a/, (req, res) => {
    res.send('/a/')
})
*/

app.post('/', function (req, res) {
    res.send('Got a POST request');
});

/*
app.put('/user', function(request, response) {
    response.send('Hello World!')
})

app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});
*/

// Matriz de funções
const cb0 = (req, res, next) => {
    console.log('CB0')
    next()
}
const cb1 = (req, res, next) => {
    console.log('CB1')
    next()
}
app.get('/example/b', [cb0, cb1], (req, res, next) => {
    console.log('a resposta sera enviada pela proxima função')
    next()
}, (req, res) => {
    res.send('B diz olá')
})


const port = 5000
const host = '127.0.0.1'

const server = http.createServer(app)

server.listen(port, host, () => {
    console.log(`Servidor a rodar em http://${host}:${port}/`)
})      