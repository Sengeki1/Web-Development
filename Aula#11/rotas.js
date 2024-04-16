const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('bem vindo')
})

router.get('/disciplina', (req, res) => {
    res.send('<html><body><ul>' +
    '<li>Matematica</li>' +
    '<li>Fisica</li>' +
    '</ul></body></html>')
})

router.get('/novad', (req, res) => {
    res.send('<h1>Adicionar nova disciplina</h1>\
    <form action="/regeditDisciplina" method="POST">\
    <input type="text" name="nome"/>\
    <button type="submit">Adicionar</button></form>')
})

router.post('/regeditDisciplina', (req, res) => {
    res.send(req.body.nome)
})

module.exports = router