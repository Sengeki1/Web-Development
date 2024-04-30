
const todosprodutos = [];

module.exports = class Produto {

  constructor(nome) {
    this.nome = nome;
  }

  save() {
      todosprodutos.push(this);
  }

  static fetchAll() {
    return todosprodutos;
  }

}