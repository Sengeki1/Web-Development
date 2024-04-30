exports.getError404 = (req, res, next) => {
  res.status(404).render('pagina404', { docTitle: 'Página não encontrada!',
  path:'/' });
};
