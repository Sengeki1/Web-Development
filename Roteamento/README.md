O Roteamento refere-se à determinação de como um aplicativo responde a uma solicitação do cliente por um endpoint específico, que é uma URI (ou caminho) e um método de solicitação HTTP específico (GET, POST, e assim por diante).

```js
    app.METHOD(PATH, HANDLER)
```

* app é uma instância do express.
* METHOD é um método de solicitação HTTP.
* PATH é um caminho no servidor.
* HANDLER é a função executada quando a rota é correspondida.

Os seguintes exemplos ilustram a definição de rotas simples.

GET é usado para solicitar dados de um recurso especificado.
```js
app.get('/', function (req, res) {
  res.send('Hello World!');
});
```

POST é usado para enviar dados a um servidor para criar/atualizar um recurso.
```js
app.post('/', function (req, res) {
  res.send('Got a POST request');
});
```

Responder a uma solicitação PUT para a rota /user:
```js
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user');
});
```

Responder a uma solicitação DELETE para a rota /user:
```js
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user');
});
```

Este caminho de rota irá corresponder a qualquer coisa com um “a” no nome.
```js
app.get(/a/, (req, res) => {
  res.send('/a/')
})
```