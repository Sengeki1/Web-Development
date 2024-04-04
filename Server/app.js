const http = require('http') // module http

const hostname = '127.0.0.1'
const port = 5000

const server = http.createServer( // returns a new instance of a server
    (request, response) => { // callback function
        console.log(request)
    }
)

server.listen(port, hostname)