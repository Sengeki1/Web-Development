const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorControllers = require('./controllers/erros');

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use('/',errorControllers.getError404 );

const port = 3003;
const hostname = 'localhost'

app.listen(port, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});