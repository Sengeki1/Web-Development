exports.getAddProduct = (req,res, next) => {
    res.render('add-produto', {
        tituloPagina: 'Novo Produto',

    })
}