// importar a classe
const Produto  = require('../models/produto');

exports.getAddProduct = (req, res, next) => {    
  
  res.render('admin/add-product1', {
    docTitle: 'Adicionar produto',
    path:'/admin-add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

exports.postAddProduct = (req,res,next) => {
  const produto = new Produto(req.body.title);
  produto.save();
  res.redirect('/'); 
};

exports.getProducts = (req, res, next) => {

  const produtos = Produto.fetchAll();
  
  res.render('shop/index', {
    listaprods: produtos, 
    docTitle: 'Loja on-line', 
    path: '/', 
    hasProducts: produtos.length > 0,
    productCSS:true
    });
}