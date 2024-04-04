const http = require('http') // module http

const hostname = '127.0.0.1'
const port = 5000

const server = http.createServer( (request, response) => {
    
    console.log(request.url, request.method, request.headers)

    response.setHeader('Content-Type', 'text/html')
    response.write('<html><head><title><Resposta do Servidor</title></head>')
    response.write('<body><h1>Ola do Servidor Web com NodeJS!</h1></body>')
    response.write('html')
    response.end()

    }
)

server.listen(port, hostname, () => {  // listen for a request 
    console.log(`Servidor a rodar em http://${hostname}:${port}/`)
})